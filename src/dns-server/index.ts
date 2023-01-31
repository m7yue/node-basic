import dgram, { RemoteInfo } from 'dgram'

// 注意发送请求的协议是 https 还是 http, 要与 node 服务对应上

const domain = /7yue/
const targetIp = '127.0.0.1'
// 本地 DNS 服务
const fallbackServers = ['192.168.39.15', '192.168.39.140']

const server = dgram.createSocket('udp4')
const serverPort = 53
server.on('message', (msg, rinfo) => {
  const host = parseHost(msg.subarray(12))

  if (domain.test(host)) {
    resolve(msg, rinfo)
  } else {
    forward(msg, rinfo)
  }
});

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`)
  server.close()
})

server.on('listening', () => {
  const address = server.address()
  console.log(`server listening ${address.address}:${address.port}`)
})

server.bind(serverPort)


/**
 * 解析获取域名
 * @param msg ：当前域长度 + 当前域内容 + 当前域长度 + 当前域内容 + 当前域长度 + 当前域内容 + 0
 * @returns 
 */
function parseHost(msg: Buffer) {
  let num = msg.readUInt8(0);
  let offset = 1;
  let host = "";
  while (num !== 0) {
    host += msg.subarray(offset, offset + num).toString();
    offset += num;

    num = msg.readUInt8(offset);
    offset += 1;

    if (num !== 0) {
      host += '.'
    }
  }
  return host
}

function copyBuffer(src: Buffer, offset: number, dst: Buffer) {
  for (let i = 0; i < src.length; ++i) {
    dst.writeUInt8(src.readUInt8(i), offset + i)
  }
}

function resolve(msg: Buffer, rinfo: RemoteInfo) {
  const queryInfo = msg.subarray(12)
  const response = Buffer.alloc(28 + queryInfo.length)
  let offset = 0

  // Transaction ID
  const id  = msg.subarray(0, 2)
  copyBuffer(id, 0, response)  
  offset += id.length
  
  // Flags
  response.writeUInt16BE(0x8180, offset)  
  offset += 2

  // Questions
  response.writeUInt16BE(1, offset)  
  offset += 2

  // Answer RRs
  response.writeUInt16BE(1, offset)  
  offset += 2

  // Authority RRs & Additional RRs
  response.writeUInt32BE(0, offset)  
  offset += 4
  copyBuffer(queryInfo, offset, response)
  offset += queryInfo.length

    // offset to domain name
  response.writeUInt16BE(0xC00C, offset) 
  offset += 2
  const typeAndClass = msg.subarray(msg.length - 4)
  copyBuffer(typeAndClass, offset, response)
  offset += typeAndClass.length

  // TTL, in seconds
  response.writeUInt32BE(600, offset)  
  offset += 4

  // Length of IP
  response.writeUInt16BE(4, offset)  
  offset += 2
  targetIp.split('.').forEach(value => {
    response.writeUInt8(parseInt(value), offset)
    offset += 1
  })
  server.send(response, rinfo.port, rinfo.address, (err) => {
    if (err) {
      console.log(err)
      server.close()
    }
  })
}

function forward(msg: Buffer, rinfo: RemoteInfo) {
  const client = dgram.createSocket('udp4')
  
  client.on('error', (err) => {
    console.log(`client error:\n${err.stack}`)
    client.close()
  })
  
  client.on('message', (fbMsg, fbRinfo) => {
    server.send(fbMsg, rinfo.port, rinfo.address, (err) => {
      err && console.log(err)
    })
    client.close()
  })

  fallbackServers.forEach(ip => {
    client.send(msg, serverPort, ip, (err) => {
      if (err) {
        console.log(err)
        client.close()
      }
    })
  })
}



// https://juejin.cn/post/7105620424368586782#heading-2
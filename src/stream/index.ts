import http from 'http'
import fs from 'fs'
import zlib from 'zlib'
import iconv from 'iconv-lite'
import * as ws from 'ws'
import { AddressInfo } from 'net'

// 创建一个 WebSocket 服务器，监听的是 30002 端口
const webSocketServer = new ws.Server({
  port: 30002,
});

// 监听的是 WebSocket 服务开始监听的事件
webSocketServer.on('listening', (socket: ws) => {
  console.log('web socket begins listening');
});

// 监听的是 WebSocket 服务被客户端连接上的事件
webSocketServer.on('connection', (socket: ws, req) => {
  // 监听的是 服务端收到了客户端发来的消息 事件
  socket.on('message', (data) => {
    console.log(data);
    if (data.toString() === 'terminate') {
      socket.close();
      setTimeout(() => {
        webSocketServer.close();
      }, 3000);
    }
  });

  // 监听的是，服务端收到了客户端关闭连接的事件，由客户端发起的关闭
  socket.on('close', (code, reason) => {
    console.log(code);
    console.log(reason);
  });

  // 监听的是，WebSocket 通信过程中出错的事件
  socket.on('error', (error: Error) => {
    console.log('error:');
    console.log(error);
  });

  const {port, address} = req.socket.address() as AddressInfo;
  console.log(address + ':' + port + ' is connected');

  const socketSendWithStream = () => {
    const stream = fs.createReadStream(__dirname + '/data.txt')
    stream.on('data', (chunk) => {
      socket.send(chunk.toString())
    })
  
    stream.on('end', () => {
      socket.close()
    })
  }
  socketSendWithStream()

  const socketSendWithString = () => {
    /**
     * readFile() 读取文件的全部内容，并在完成时调用回调函数。
     * 如果文件很大，则该操作会花费较多的时间。
     */
    fs.readFile(__dirname + '/data.txt', (err, data) => {      
      socket.send(data.toString())
      socket.close()
    })
  }
  // socketSendWithString()
});
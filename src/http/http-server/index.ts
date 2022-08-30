import http from 'http'

const port = 80

const server = http.createServer((req, res) => {
  console.log(99999)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello, 7yue 44444\n')
})

server.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}/`)
})



const options = {
  hostname: 'nodejs.cn',
  port: 443,
  path: '/todos',
  method: 'GET'
}

const req = http.request(options, res => {
  console.log(`状态码: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
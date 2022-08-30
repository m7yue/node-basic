import http from "http";

const server = http.createServer((req, res) => {
  //res 是一个 http.ServerResponse 对象。
  console.log(res.getHeaderNames(), 'getHeaderNames()')
  console.log(res.getHeaders(), 'getHeaders()')
  res.setHeader('set-7yue-header', 'HI, 7YUE')

  console.log(res.getHeader('set-7yue-header'))

  console.log(res.hasHeader('set-7yue-header'))

  res.removeHeader('set-7yue-header')
  
  console.log(res.headersSent)
});
server.on('request',(req,res)=>{
  console.log(req.url, '================');
  //设置应答头信息
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write('hi, welcome request!\n');
  res.end('server already end\n');
});

server.listen(7777);
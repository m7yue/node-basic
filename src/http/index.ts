import http from "http";

// http.METHODS
console.log(http.METHODS);

// http.STATUS_CODES
console.log(http.STATUS_CODES);

// 指向 Agent 对象的全局实例，该实例是 http.Agent 类的实例。
// 用于管理 HTTP 客户端连接的持久性和复用，它是 Node.js HTTP 网络的关键组件。
console.log(http.globalAgent);
console.log(http.globalAgent instanceof http.Agent);

// http.createServer()
const server = http.createServer((req, res) => {
  //使用此回调处理每个单独的请求。
  res.end("hi");
});
server.on('request',(req,res)=>{
  console.log(req.url);
  //设置应答头信息
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write('hi, welcome request!');
  res.end('server already end\n');
});

server.listen(7777);
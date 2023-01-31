/* http-proxy */

var http = require("http"),
  httpProxy = require("http-proxy"), //http-proxy
  proxy = httpProxy.createProxyServer({}),
  fs = require("fs"),
  path = require("path")
  // getConType = require("./content-type"); //本身定义 根据后缀转换Content-Type

var server = http.createServer(function (req, res) {
  console.log(req, res)
  var _url = req.url, //获取请求的url
    _file,
    _localPath,
    _localFile,
    _ext,
    _stream;

  //eg://g-assets.daily.taobao.net/ais-fed/sunfire/1.0.0/vendor.js
  const targetUrl = "https://lf3-cdn-tos.bytescm.com/obj/rc-web-sdk/acrawler.js";
  const localUrl = "";

  if (_url.indexOf(targetUrl) > -1) {
    _ext = path.extname('.js'); // 文件扩展
    _localFile = localUrl;

    //判断文件是否存在
    if (fs.existsSync(_localFile)) {
      //若是文件存在
      res.writeHead(200, {
        // "Content-Type": getConType(_ext),
      });
      _stream = fs.createReadStream(_localFile, { flags: "r", encoding: null }); //只读模式 读取文件内容
      _stream.on("error", function () {
        //若是读取错误 返回404
        res.writeHead(404, {
          "Content-Type": "text/html",
        });
        res.end("<h1>404 Read Error</h1>");
      });

      _stream.pipe(res); //链接文件流和http返回流的管道,用于返回实际Web内容

      _stream.on("end", function () {
        _stream = null;
      });
    } else {
      //返回404错误
      res.writeHead(404, {
        "Content-Type": "text/html",
      });
      res.end("<h1>404 Not Found</h1>");
    }
  } else {
    proxy.web(req, res, { target: "x.alibaba-inc.com" });
  }
});

console.log("listening on port 7777");
server.listen(80);


// https://blog.csdn.net/xiaolengzile/article/details/78362618
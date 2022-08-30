import http, { IncomingMessage } from 'http'

const options = {
  hostname: "127.0.0.1",
  port: 7777,
  path: "",
  method: "GET",
};
const req = http.request(options, (res) => {
  const { statusCode, statusMessage, headers, method, httpVersion, url, socket } = res
  console.log(statusCode, 'statusCode')
  console.log(statusMessage, 'statusMessage')
  console.log(headers, 'headers')
  console.log(method, 'method')
  console.log(httpVersion, 'httpVersion')
  console.log(url, 'url')

  res.pipe(process.stdout)
});
req.end()
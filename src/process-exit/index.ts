
// 默认的退出码为 0，表示成功。 不同的退出代码有不同的含义，您可能希望在自己的系统中使用它来让程序与其他程序通信。
// process.exit(1)

// 也可以设置 process.exitCode 属性
// process.exitCode = 1


// 对于正在运行的 http 服务，程序永远不会结束。 如果您调用 process.exit()，
// 则任何当前待处理或正在运行的请求都将被中止。 这并不好。
// 在这种情况下，您需要向命令发送 SIGTERM 信号，并使用进程信号句柄处理它：
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  setTimeout(() => {
    process.emit('SIGTERM')
  }, 2000);

  res.send('Hi!')
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
  console.log(99999)

  // closed when all connections are ended and the server emits a `'close'` event.
  server.close(() => {
    console.log(7777)
    console.log('Process terminated')
  })
})
// SIGKILL 是告诉进程立即终止的信号，理想情况下会像 process.exit() 一样。
// SIGTERM 是告诉进程正常终止的信号。 这是从 upstart 或 supervisord 等进程管理器发出的信号。


// 你可以从程序内部，在另一个函数中发送这个信号：
// process.kill(process.pid, 'SIGTERM')
// 或者从另一个 Node.js 运行的程序、或者从您的系统中运行的任何其他应用程序（知道您要终止的进程的 PID）。

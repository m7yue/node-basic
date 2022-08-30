// 可用于从底层的操作系统和程序运行所在的计算机上检索信息并与其进行交互。

import os from 'os'

// 可告知所有与处理过程信号相关的常量，例如 SIGHUP、SIGKILL 等。
// console.log(os.EOL)

// 可告知所有与处理过程信号相关的常量，例如 SIGHUP、SIGKILL 等。
// console.log(os.constants.signals)

// 可设置用于错误报告的常量，例如 EADDRINUSE、EOVERFLOW 等。
// console.log(os.constants.errno)


// 返回标识底层架构的字符串，例如 arm、x64、arm64。
// console.log(os.arch())

// 返回关于系统上可用的 CPU 的信息
// console.log(os.cpus())


// 根据是使用大端序或小端序编译 Node.js，返回 BE 或 LE。
// console.log(os.endianness())

// 返回代表系统中可用内存的字节数。
// console.log(os.freemem())


// 返回到当前用户的主目录的路径。
// console.log(os.homedir())

// 返回主机名。
// console.log(os.hostname())

// 返回操作系统对平均负载的计算。
// console.log(os.loadavg())

// 返回系统上可用的网络接口的详细信息。
// console.log(os.networkInterfaces())


// 返回为 Node.js 编译的平台：
// console.log(os.platform())


// 返回标识操作系统版本号的字符串。
// console.log(os.release())


// 返回指定的临时文件夹的路径。
// console.log(os.tmpdir())


// 返回表示系统中可用的总内存的字节数。
// console.log(os.totalmem())

// 标识操作系统
// console.log(os.type())

// 返回自上次重新启动以来计算机持续运行的秒数。
// console.log(os.uptime())


console.log(os.userInfo())
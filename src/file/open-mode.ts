import fs from 'fs'

// 在与位于文件系统中的文件进行交互之前，需要先获取文件的描述符。
fs.open('./test.txt', 'r', (err, fd) => {
  console.log(fd)
})

/**
 * r: 该标志意味着打开文件用于读取。
 * r+: 打开文件用于读写
 * w+: 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件
 * a: 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
 * a+: 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件
 */

const fwd = fs.openSync('./a.txt', 'w+')
console.log(fwd)
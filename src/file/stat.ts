import fs from 'fs'

// fs.stat('./test.txt', (err, stats) => {
//   if (err) {
//     console.log(err)
//     return
//   }

//   console.log(stats)
// })


try {
  const stats = fs.statSync('./test.txt')
  console.log(stats)

  console.log(stats.isFile()) //  判断文件是否是文件。
  console.log(stats.isDirectory()) //  判断文件是否目录或文件。
  console.log(stats.isSymbolicLink()) //  判断文件是否符号链接。
  console.log(stats.size) // 获取文件的大小（以字节为单位）。
} catch (err) {
  console.error(err)
}
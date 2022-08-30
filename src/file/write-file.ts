import fs from 'fs'

const content = '写入内容'

// 默认情况下，此 API 会替换文件的内容（如果文件已经存在）。
fs.writeFile('./write.txt', content, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log(fs.readFileSync('./write.txt', 'utf-8'))
})

// try {
//   const data = fs.writeFileSync('./write.txt', content)
//   //文件写入成功。
// } catch (err) {
//   console.error(err)
// }


try {
  const data = fs.writeFileSync('./write.txt', content, {flag: 'a'})
  //文件写入成功。
} catch (err) {
  console.error(err)
}


// 追加到文件
fs.appendFile('./write.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //完成！
})


// 使用流
// 所有这些方法都是在将全部内容写入文件之后才会将控制权返回给程序（在异步的版本中，这意味着执行回调）。

// 在这种情况下，更好的选择是使用流写入文件的内容。
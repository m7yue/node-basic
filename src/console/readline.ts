import readline from 'readline'

const readlineInstance = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


readlineInstance.question(`你叫什么名字?`, name => {
  console.log(`你好 ${name}!`)
  readlineInstance.close() // 关闭了 readline 接口
})


// 可以使用 inquirer 成熟的包
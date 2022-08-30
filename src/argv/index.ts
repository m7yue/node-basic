
// 获取参数值的方法是使用 Node.js 中内置的 process 对象。
// 它公开了 argv 属性，该属性是一个包含所有命令行调用参数的数组。

// 第一个参数是 node 命令的完整路径。
// 第二个参数是正被执行的文件的完整路径。
// 所有其他的参数从第三个位置开始。

const args = process.argv.slice(2)
console.log(process.argv, args)

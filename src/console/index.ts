import Stream from 'stream'

console.log('我的%s已经%d岁', '猫', 2)
// %s 会格式化变量为字符串
// %d 会格式化变量为数字
// %i 会格式化变量为其整数部分
// %o 会格式化变量为对象


// count 方法会对打印的字符串的次数进行计数，并在其旁边打印计数：
console.count('A')
console.count('A')
console.count('b')


// 打印堆栈踪迹, 这在排查问题的时候显得很有用
const function2 = () => console.trace()
const function1 = () => function2()
function1()


// 计算耗时  可以使用 time() 和 timeEnd() 轻松地计算函数运行所需的时间
const doSomething = () => console.log('测试')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()



// stdout 和 stderr
const readableStream = new Stream.Readable({
  read() {
  }
})
readableStream.push('hi!\n')
readableStream.push('7yue!\n')
readableStream.pipe(process.stdout)


// 为输出着色, 可以使用转义序列在控制台中为文本的输出着色。 转义序列是一组标识颜色的字符。
// 转义序列: https://gist.github.com/iamnewton/8754917
// 相关成熟库：chalk
console.log('\x1b[33m%s\x1b[0m', '你好')


// 创建进度条
// Progress 是一个很棒的软件包，可在控制台中创建进度条。
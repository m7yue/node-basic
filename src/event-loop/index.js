// http://nodejs.cn/learn/the-nodejs-event-loop

// 调用堆栈
// 调用堆栈是一个 LIFO 队列（后进先出）。


// 消息队列
// 当调用 setTimeout() 时，浏览器或 Node.js 会启动定时器。 
// 当定时器到期时（在此示例中会立即到期，因为将超时值设为 0），则回调函数会被放入“消息队列”中。
// 在消息队列中，用户触发的事件（如单击或键盘事件、或获取响应）也会在此排队，然后代码才有机会对其作出反应。 类似 onLoad 这样的 DOM 事件也如此。


// 事件循环会赋予调用堆栈优先级，它首先处理在调用堆栈中找到的所有东西，一旦其中没有任何东西，便开始处理消息队列中的东西。



// ES6 作业队列


// process.nextTick()


console.log('=======start========')

setTimeout(() => {
  console.log('=======timeout========')
}, 0);

// 传给 process.nextTick() 的函数会在事件循环的当前迭代中（当前操作结束之后）被执行。
// 这意味着它会始终在 setTimeout 和 setImmediate 之前执行。
process.nextTick(() => {
  console.log('=======nextTick========')
})

new Promise((resolve, reject) => {
  resolve(7777)
}).then(() => {
  console.log('=======promsie1========')

  Promise.resolve().then(() => {
    console.log('=======promsie2========')
  })
})

Promise.resolve().then(() => {
  console.log('=======promsie3========')
})

// 延迟 0 毫秒的 setTimeout() 回调与 setImmediate() 非常相似。 
// 执行顺序取决于各种因素，但是它们都会在事件循环的下一个迭代中运行。
setImmediate(() => console.log('=======immediate========'))

console.log('=======end========')

// 无论 promise 和 nextTick 顺序如何， 总是会先调用 promise
// 这里有一个很奇怪的点，在控制台用 node REPL 是 nextTick 先执行
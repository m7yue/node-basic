import EventEmitter from 'events'

const door = new EventEmitter()

door.on('event1', () => {
  console.log('===== event1 emit! =====')
})

// 添加当事件在注册之后首次被触发时调用的回调函数。 该回调只会被调用一次，不会再被调用。
door.once('event1', () => {
  console.log('===== 回调只调用一次 =====')
})

// 当使用 once 添加监听器时，监听器会被添加到监听器队列中的最后一个，并且最后一个被调用。 使用 prependOnceListener 则可以在其他监听器之前添加并调用。
door.prependOnceListener('event1', () => {
  console.log('======= 我也只调用一次， 但我在前面调用 =========')
})


const handler1 = () => console.log('event1')
// emitter.on() 的别名。
door.addListener('event1', handler1)
door.addListener('event1', () => console.log('event1-2'))

door.emit('event1')

// 返回字符串（表示在当前 EventEmitter 对象上注册的事件）数组
console.log(door.eventNames())

// 获取可以添加到 EventEmitter 对象的监听器的最大数量（默认为 10，但可以使用 setMaxListeners() 进行增加或减少）。
console.log(door.getMaxListeners())

door.setMaxListeners(100)
console.log(door.getMaxListeners())

// 获取作为参数传入的事件监听器的计数
console.log(door.listenerCount('event1'))

// 获取作为参数传入的事件监听器的数组
console.log(door.listeners('event1'))

// emitter.removeListener() 的别名
door.off('event1', handler1)
door.emit('event1')

// 当使用 on 或 addListener 添加监听器时，监听器会被添加到监听器队列中的最后一个，并且最后一个被调用。 使用 prependListener 则可以在其他监听器之前添加并调用。
door.prependListener('event1', () => console.log('prepend in pre evnts!'))
door.emit('event1')


door.on('event3', () => console.log('event3'))
// 移除 EventEmitter 对象的所有监听特定事件的监听器
door.removeAllListeners('event1')
console.log(door.eventNames())

door.removeAllListeners()
console.log(door.eventNames())

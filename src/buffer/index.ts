// Buffer 与流紧密相连。 当流处理器接收数据的速度快于其消化的速度时，则会将数据放入 buffer 中。


// 创建 buffer
/**
 * Buffer.from(array)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 * Buffer.from(buffer)
 * Buffer.from(string[, encoding])
 */
const buf = Buffer.from('Hey!')
// console.log(buf.toString())

// console.log(String.fromCharCode(buf[0]))

// for (const item of buf) {
//   console.log(item)
//   console.log(String.fromCharCode(item))
// }

// // 获取 buffer 的长度
// console.log(buf.length)

// 修改内容
// buf[1] = 111
// console.log(buf.toString())

// 复制 buffer
// const bufCopy = Buffer.alloc(4)
// buf.copy(bufCopy)
// console.log(bufCopy.toString())


// 切片 buffer
buf.subarray(0).toString() //Hey!
const subarray = buf.subarray(0, 2)
console.log(subarray.toString()) //He
buf[1] = 111 //o
console.log(subarray.toString()) //Ho


/**
 * 虽然 alloc 和 allocUnsafe 均分配指定大小的 Buffer（以字节为单位），但是 alloc 创建的 Buffer 会被使用零进行初始化，而 allocUnsafe 创建的 Buffer 不会被初始化。
 * 这意味着，尽管 allocUnsafe 比 alloc 要快得多，但是分配的内存片段可能包含可能敏感的旧数据。
 * 当 Buffer 内存被读取时，如果内存中存在较旧的数据，则可以被访问或泄漏。 这就是真正使 allocUnsafe 不安全的原因，在使用它时必须格外小心。
 */
const bufAlloc = Buffer.alloc(1024)
//或
const bufAllocUnsafe = Buffer.allocUnsafe(1024)


// 更改 buffer 的内容
const bufWrite = Buffer.alloc(4)
// console.log(bufWrite.length)
// bufWrite.write('Hey!')
// console.log(bufWrite.toString(), 'bufWrite')




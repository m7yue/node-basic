console.log('=======start========')

setTimeout(() => {
  console.log('=======timeout========')
}, 0);

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

setImmediate(() => console.log('=======immediate========'))

console.log('=======end========')
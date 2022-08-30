/**
 * 自定义 Error
 */
class CustomError extends Error {
  name: string = '[cutom-error-name]';
  // stack?: string | undefined = 'custom-stack'
  // message: string = 'custom-message'
}

const error = () => {
  /**
   * 一旦 JavaScript 执行到此行，则常规的程序流会被停止，且控制会被交给最近的异常处理程序。
   * 在客户端代码中，value 可以是任何 JavaScript 值（包括字符串、数字、或对象）。
   * 在 Node.js 中，我们不抛出字符串，而仅抛出 Error 对象。
   */
  // throw 'cstom err value!'
  // throw new Error('custom err value!')
  throw new CustomError('custom err value!')
}

/**
 * 处理异常
 */
const tryCatchHandler = () => {
  try {
    error()
  }
  catch(err) {
    const errObj = err as Error
    const { name, message, stack } = errObj
    console.log(name)
    console.log(message)
    console.log(stack)
  }
  finally {
    console.log('finally')
  }
}

// tryCatchHandler()



/**
 * 异步异常无法通过 try catch 捕获
 */
 const asynctryCatchHandler = () => {
  try {
    process.nextTick(() => {
      error()
    })
  }
  // 没有捕获到
  catch(err) {
    const errObj = err as Error
    const { name, message, stack } = errObj
    console.log(name)
    console.log(message)
    console.log(stack)
  }
  finally {
    console.log('finally')
  }
}

// asynctryCatchHandler()



/**
 * 捕获未捕获的异常
 */
const processListenerErrorHandler = () => {
  asynctryCatchHandler()

  process.on('uncaughtException', err => {
    console.error('有一个未捕获的错误', err)
    process.exit(1) //强制性的（根据 Node.js 文档）
  })
}

// processListenerErrorHandler()


/**
 * Promise 异常
 */
const promiseErrorHandler = () => {
  process.on('unhandledRejection', err => {
    console.error('有一个未捕获的 promise 错误', err)
    process.exit(1)
  })

  new Promise((resolve, reject) => {
    reject('promise error!')
  })
}

// promiseErrorHandler()




/**
 * async/await 异常
 */
const asyncErrorHandler = async () => {
  process.on('unhandledRejection', err => {
    console.error('有一个未捕获的 promise 错误', err)
    process.exit(1)
  })
  await Promise.reject('async/awit error!')
}

// asyncErrorHandler()
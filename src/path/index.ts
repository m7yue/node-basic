import path from 'path'

// 该模块提供了 path.sep（作为路径段分隔符，在 Windows 上是 \，在 Linux/macOS 上是 /）
console.log(path.sep)

// path.delimiter（作为路径定界符，在 Windows 上是 ;，在 Linux/macOS 上是 :）。
console.log(path.delimiter)
console.log(process.env.PATH)
console.log(process.env.PATH?.split(path.delimiter))


// path.basename(): 返回路径的最后一部分。 第二个参数可以过滤掉文件的扩展名, 从而得到文件名
console.log(path.basename('/test/something')) //something
console.log(path.basename('/test/something.txt')) //something.txt
console.log(path.basename('/test/something.txt', '.txt')) //something


// path.dirname(): 返回路径的目录部分
console.log(path.dirname('/test/something')) // /test 
console.log(path.dirname('/test/something/')) // /test 
console.log(path.dirname('/test/something/file.txt')) // /test/something


// path.extname()
console.log(path.extname('/test/something')) // ''
console.log(path.extname('/test/something/file.txt')) // '.txt'


// path.isAbsolute(): 如果是绝对路径，则返回 true。
console.log(path.isAbsolute('/test/something')) // true
console.log(path.isAbsolute('./test/something')) // false


// path.join(): 连接路径的两个或多个部分
const name = 'joe'
console.log(path.join('/', 'users', name, 'notes.txt')) //'/users/joe/notes.txt'


// path.normalize()
console.log(path.normalize('/users/joe/..//test.txt')) // /users/test.txt


// path.parse()
/**
  解析对象的路径为组成其的片段：
    root: 根路径。
    dir: 从根路径开始的文件夹路径。
    base: 文件名 + 扩展名
    name: 文件名
    ext: 文件扩展名
 */
console.log(path.parse('/users/test.txt'))
/**
  {
    root: '/',
    dir: '/users',
    base: 'test.txt',
    ext: '.txt',
    name: 'test'
  }
 */


// path.relative(): 接受 2 个路径作为参数。 基于当前工作目录，返回从第一个路径到第二个路径的相对路径。
console.log(path.relative('/Users/joe', '/Users/joe/test.txt')) // test.txt
console.log(path.relative('/Users/joe/test.txt', '/Users/joe/LOG.TXT')) // ../LOG.TXT



// path.resolve(): 可以使用 path.resolve() 获得相对路径的绝对路径计算
const __dirname = path.resolve()
console.log(__dirname) // /Users/wanglei56/Documents/study-space/node-basic/path
console.log(path.resolve('joe.txt')) // /Users/wanglei56/Documents/study-space/node-basic/path/joe.txt
// 通过指定第二个参数，resolve 会使用第一个参数作为第二个参数的基准
console.log(path.resolve('tmp', 'joe.txt')) // /Users/wanglei56/Documents/study-space/node-basic/path/tmp/joe.txt
// 如果第一个参数以斜杠开头，则表示它是绝对路径：
console.log(path.resolve('/etc', 'joe.txt')) // /etc/joe.txt


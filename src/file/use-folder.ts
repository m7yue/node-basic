import fs, { fstat } from 'fs'
import path from 'path'
import fsExtra from 'fs-extra'

// 检查文件夹是否存在
// 使用 fs.access() 检查文件夹是否存在以及 Node.js 是否具有访问权限。
// fs.access('../file-null', err => {
//   console.log(err)
// })

// 创建新的文件夹
// 使用 fs.mkdir() 或 fs.mkdirSync() 可以创建新的文件夹。
const folderName = 'new-test-folder'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}


// 读取目录的内容
// 使用 fs.readdir() 或 fs.readdirSync() 可以读取目录的内容。
// 这段代码会读取文件夹的内容（全部的文件和子文件夹），并返回它们的相对路径：
const subContents = fs.readdirSync('../')
console.log(subContents)

/**
 * 获取指定目录下所有的文件并格式化
 * @param target 
 * @returns 
 */
const getAllsubContents: any = (target: string) => {
  const folderName = path.resolve(target)

  const subContents = fs.readdirSync(folderName)
  
  const files = subContents.filter(p => {
    const relative = path.resolve(folderName, p)
    return fs.statSync(relative).isFile()
  })
  const folders =  subContents.filter(p => {
    const relative = path.resolve(folderName, p)
    return !fs.statSync(relative).isFile()
  })
  const subFiles = folders.map(p => {
    return getAllsubContents(path.resolve(folderName, p))
  })

  return {
    folderName,
    files,
    subFiles
  }
}
// console.log(JSON.stringify(getAllsubContents('../'), null, 2))



// 重命名文件夹
// 使用 fs.rename() 或 fs.renameSync() 可以重命名文件夹。 第一个参数是当前的路径，第二个参数是新的路径
// fs.rename('./rename-test.txt', './rename-test.csv', err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //完成
// })

// try {
//   fs.renameSync('./rename-test.txt', './rename-test.csv')
// }
// catch(err) {
//   console.error(err)
// }



// 删除文件夹
// 使用 fs.rmdir() 或 fs.rmdirSync() 可以删除文件夹。
// 删除包含内容的文件夹可能会更复杂。
// 在这种情况下，最好安装 fs-extra 模块，该模块非常受欢迎且维护良好。 它是 fs 模块的直接替代品，在其之上提供了更多的功能。
const delFolder = './new-test-folder'

// fsExtra.remove(delFolder, err => {
//   if (!err) {
//     console.log('删除成功')
//   }
//   else {
//     console.error(err)
//   }
// })
const res = fsExtra.removeSync(delFolder+'/AAA')
console.log(!!res! ? '删除成功' : '删除失败')

// promsie
// fsExtra.remove(delFolder)
//   .then(() => {
//     console.log('删除成功')
//   })
//   .catch(err => {
//     console.log(err)
//   })

// async/await
// async function removeFolder(delFolder: string) {
//   try {
//     await fsExtra.remove(delFolder)
//     console.log('删除成功')
//   }
//   catch(err) {
//     console.error(err)
//   }
// }
// removeFolder(delFolder)

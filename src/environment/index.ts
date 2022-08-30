/**
 * 设置环境为 production 通常可以确保：
 * 日志记录保持在最低水平。
 * 更高的缓存级别以优化性能。
 */
process.env.NODE_ENV = 'production'

console.log(process.env.NODE_ENV)


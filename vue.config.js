// ./vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/forum-front-end-vue/'
    : '/'
}
// 如此 github page 的網址才看得到 forum-ront-end-vue
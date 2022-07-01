// 导入jquery
import $ from 'jquery'
$('#myUl>li:odd').css('color','red')
$('#myUl>li:even').css('color','green')

// 引入css文件
import './css/index.css'
// 引入less文件
import './less/index1.less'
// 引入一个图片文件
// webpack眼里 万物皆模块
import imgObj from './assets/1.gif'
let theimg = document.createElement('img')
theimg.src = imgObj
document.body.appendChild(theimg)

// 引入字体图标文件样式
import './assets/fonts/iconfont.css'
let theI = document.createElement('i')
theI.className = 'iconfont icon-qq'
document.body.appendChild(theI)
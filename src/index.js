import _ from 'lodash';
import './style.css';
import './font/iconfont.css'

import myImg from './img/fehelper-www-webpackjs-com-guides-asset-management-1574845141553.png'

function component() {
  var element = document.createElement('div');
  var span = document.createElement('span');
  span.classList.add('iconfont');
  span.classList.add('icon');
  span.classList.add('icon-refresh');

  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  // 将图像添加到我们现有的 div。

  const myIcon = new Image();
  myIcon.src = myImg;
  element.appendChild(myIcon);
  element.appendChild(span);
  return element;
}

document.body.appendChild(component());

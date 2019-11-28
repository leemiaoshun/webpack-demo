import _ from 'lodash';
import printMe from './print';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  console.log(btn);
  btn.innerHTML = 'click me and check the console';
  btn.onclick = printMe;

  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

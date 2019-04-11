//获取url后的参数
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg); 
  if (r != null) return unescape(r[2]); 
  return null;
}
getQueryString('a')
//获取URL参数值/多个同名参数值
function getQueryVal(name) {
  let arrVal = []
  if(window.location.search != '') {
    let arrName = window.location.search.substr(1).split("&");
    for(let [index, item] of arrName.entries()) {
      if(item.startsWith(name+'=') && (name+'=').length < item.length) {
        arrVal.push(decodeURIComponent(item.substr((name+'=').length))) 
      }
    }
  }
  if(arrVal.length == 0) {
    return null;
  } else if (arrVal.length == 1) {
    return arrVal[0];
  } else {
    return arrVal;
  }
}
getQueryVal('a')
getQueryVal('b')
getQueryVal('c')
getQueryVal('d')
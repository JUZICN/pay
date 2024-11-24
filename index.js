function payType() {
  var userAgent = window.navigator.userAgent.toUpperCase();
  if (userAgent.indexOf('ALIPAYCLIENT') > 0) {
    window.location.href = '支付宝要跳转的';
    return '支付宝支付';
  }
  if (userAgent.indexOf('MICROMESSENGER') > 0) {
    window.location.href = '微信要跳转的';
    return '微信支付';
  }
    if (userAgent.indexOf('QQ/') > 0) {
    window.location.href = 'qq要跳转的';
    return 'QQ支付';
  }
  window.location.href = '非微信支付宝要跳转的';
  return '非QQ微信支付宝';
}


  var info = payType();
  var div = document.getElementById("pay-id");
  div.innerHTML = info;

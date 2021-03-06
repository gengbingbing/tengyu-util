// 通过原型链开发js库
function Tengyu() { }
Tengyu.prototype = {
  init: function () {
    console.log("初始化操作~~");
  },
  // 邮箱格式校验
  isEmail: function(email) {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email)
  },
  // 手机号码校验
  isMobile: function(mobile) {
    return /^1[0-9]{10}$/.test(mobile)
  },
  // 校验身份证
  isCardID: function(sId) {
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
        console.log('你输入的身份证长度或格式错误')
        return false
    }
    //身份证城市
    var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
    if (!aCity[parseInt(sId.substr(0, 2))]) {
        console.log('你的身份证地区非法')
        return false
    }
    // 出生日期验证
    var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
        d = new Date(sBirthday)
    if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
        console.log('身份证上的出生日期非法')
        return false
    }
    // 身份证号码校验
    var sum = 0,
        weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        codes = "10X98765432"
    for (var i = 0; i < sId.length - 1; i++) {
        sum += sId[i] * weights[i];
    }
    var last = codes[sum % 11]; //计算出来的最后一位身份证号码
    if (sId[sId.length - 1] != last) {
        console.log('你输入的身份证号非法')
        return false
    }
    return true
  },
  // 判断类型，类似于typeof
  type: function(string) {
    var state = Object.prototype.toString.call(string);
    var str = '';
    switch(state) {
      case state.indexOf('Undefined') !== -1:
        str = 'undefined';
        break;
     case state.indexOf('Null') !== -1:
        str = 'null';
        break;
     case state.indexOf('String') !== -1:
        str = 'string';
        break;
     case state.indexOf('Number') !== -1:
        str = 'number';
        break;
     case state.indexOf('Boolean') !== -1:
        str = 'boolean';
        break;
     case state.indexOf('Function') !== -1:
        str = 'function';
        break;
     case state.indexOf('Object') !== -1:
        str = 'object';
        break;
     case state.indexOf('Array') !== -1:
        str = 'array';
        break;
     case state.indexOf('Date') !== -1:
        str = 'date';
        break;
     case state.indexOf('RegExp') !== -1:
        str = 'reg';
        break;
     case state.indexOf('Error') !== -1:
        str = 'err';
        break;
     case state.indexOf('Promise') !== -1:
        str = 'promise';
        break;
     default:
        str = 'undefined';
    }
    return str;
  },
  // 检测密码强度
  checkPwd: function(str) {
    var Lv = 0;
    if (str.length < 6) {
        return Lv
    }
    if (/[0-9]/.test(str)) {
        Lv++
    }
    if (/[a-z]/.test(str)) {
        Lv++
    }
    if (/[A-Z]/.test(str)) {
        Lv++
    }
    if (/[\.|-|_]/.test(str)) {
        Lv++
    }
    return Lv;
  },
  // 去除空格, type:1-所有空格2-前后空格3-前空格4-后空格
  trim: function(str, type) {
    type = type || 1
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
  },
  // 字符转换， type:1:首字母大写2：首字母小写3：大小写转换4：全部大写5：全部小写
  changeCase: function(str, type) {
    type = type || 4
    switch (type) {
        case 1:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
            });
        case 2:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
        case 3:
            return str.split('').map(function (word) {
                if (/[a-z]/.test(word)) {
                    return word.toUpperCase();
                } else {
                    return word.toLowerCase()
                }
            }).join('')
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
  },
  // 动态引入js
  injectScript: function(src) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = src;
    var t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
  },
  // 根据url地址下载
  download: function(url) {
    var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    if (isChrome || isSafari) {
        var link = document.createElement('a');
        link.href = url;
        if (link.download !== undefined) {
            var fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
            link.download = fileName;
        }
        if (document.createEvent) {
            var e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return true;
        }
    }
    if (url.indexOf('?') === -1) {
        url += '?download';
    }
    window.open(url, '_self');
    return true;
  },
  // 操作class
  setClass: {
    hasClass: function(el, className) {
      var reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
      return reg.test(el.className)
    },
    addClass: function(el, className) {
      if (hasClass(el, className)) {
          return
      }
      var newClass = el.className.split(' ')
      newClass.push(className)
      el.className = newClass.join(' ')
    },
    removeClass: function(el, className) {
      if (!hasClass(el, className)) {
          return
      }
      var reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
      el.className = el.className.replace(reg, ' ')
    }
  },
  arrFalse: function (arr1, arr2) {
    // 对比两个数组并且返回其中不同的元素
    // return arr1.filter((v) => !arr2.includes(v));
    return arr1.filter(function (v) {
      return !arr2.includes(v)
    });
  },
  arrTrue: function (arr1, arr2) {
    // 返回两个数组中相同的元素
    // return arr2.filter((v) => arr1.includes(v));
    return arr2.filter(function (v) {
      return arr1.includes(v)
    });
  },
  getURLParams: function (url) {
    // 返回url中的参数对象
    // return url
    //   .match(/([^?=&]+)(=([^&]*))/g)
    //   .reduce(
    //     (a, v) => (
    //       (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    //     ),
    //     {}
    //   );
    return url
      .match(/([^?=&]+)(=([^&]*))/g)
      .reduce(
        function (a, v) {
          return
        }(
          (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
        ),
        {}
      );
  },
  scrollToTop: function () {
    // 滚动条回到顶部动画
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    } else {
      window.cancelAnimationFrame(scrollToTop);
    }
  },
  copy: function (str) {
    // 复制文本
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    el.style.top = "-9999px";
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  },
  getDeviceType: function () {
    // 检测设备类型
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? "Mobile"
      : "Desktop";
  },
  // 操作Cookie
  cookie: {
    setCookie: function (key, value, expiredays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + expiredays);
      document.cookie =
        key +
        "=" +
        escape(value) +
        (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
    },
    delCookie: function (name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = getCookie(name);
      if (cval != null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
      }
    },
    getCookie: function (name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) {
        return arr[2];
      } else {
        return null;
      }
    },
  },
  // 数字千分位分割
  commafy: function (num) {
    return num.toString().indexOf(".") !== -1
      ? num.toLocaleString()
      : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  }
};
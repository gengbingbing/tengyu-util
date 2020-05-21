(function (tengyu) {
  tengyu.init = function () {
    console.log("初始化操作~~");
  }
  tengyu.arrFalse = function (arr1, arr2) {
    // 对比两个数组并且返回其中不同的元素
    // return arr1.filter((v) => !arr2.includes(v));
    return arr1.filter(function (v) {
      return !arr2.includes(v)
    });
  };
  tengyu.arrTrue = function (arr1, arr2) {
    // 返回两个数组中相同的元素
    // return arr2.filter((v) => arr1.includes(v));
    return arr2.filter(function (v) {
      return arr1.includes(v)
    });
  };
  tengyu.getURLParams = function (url) {
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
  };
  tengyu.scrollToTop = function () {
    // 滚动条回到顶部动画
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    } else {
      window.cancelAnimationFrame(scrollToTop);
    }
  };
  tengyu.copy = function (str) {
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
    tengyu.getDeviceType = function () {
      // 检测设备类型
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? "Mobile"
        : "Desktop";
    };
  // 操作Cookie
  tengyu.setCookie = function (key, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie =
      key +
      "=" +
      escape(value) +
      (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
  };
  tengyu.delCookie = function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) {
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
  };
  tengyu.getCookie = function (name) {
    var arr,
      reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
      return arr[2];
    } else {
      return null;
    }
  };
  // 数字千分位分割
  tengyu.commafy = function (num) {
    return num.toString().indexOf(".") !== -1
      ? num.toLocaleString()
      : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  }
})(this)
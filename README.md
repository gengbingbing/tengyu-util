# tengyu-util
工作中常用方法封装为工具类

## 使用方法

引入util.js 或 util.min.js

```javascript
var util = new Tengyu();
util.init();

// 输出
初始化操作~~
```

#### 1. isEmail(email) 邮箱格式校验

#### 2. isMobile(mobile) 手机号码校验

#### 3. isCardID(card) 校验身份证

#### 4. type(**) 判断类型，类似于typeof，返回string

#### 5. checkPwd(passworld) 检测密码强度

#### 6. trim(str, type) 去除空格, type:1-所有空格2-前后空格3-前空格4-后空格

#### 7. changeCase(str, type) 字符转换， type:1:首字母大写2：首字母小写3：大小写转换4：全部大写5：全部小写

#### 8. injectScript(src) 动态引入js

#### 9. download(url) 根据url地址下载

#### 10. setClass.hasClass(el, className) 判断el是否存在class

#### 11. setClass.addClass(el, className) 添加class到el

#### 12. setClass.removeClass(el, className) 在el中删除class

#### 13. arrFalse(arr1, arr2) 对比两个数组并且返回其中不同的元素

#### 14. arrTrue, arr2） 返回两个数组中相同的元素

#### 15. getURLParams(url) 返回url中的参数对象

#### 16. scrollToTop() 滚动条回到顶部动画

#### 17. copy(str) 复制文本

#### 18. getDeviceType() 检测设备类型

#### 19. cookie.setCookie(key, value, time) 操作Cookie-添加

#### 20. cookie.delCookie(name) 操作Cookie-删除

#### 21. cookie.getCookie(name) 操作Cookie-获取

#### 22. commafy(num) 数字千分位分割




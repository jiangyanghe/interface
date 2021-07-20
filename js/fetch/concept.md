# Fetch API 教程
### 参考资料
* [MDN Fetch_API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)
* [阮一峰Fetch 教程](https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html)
* [XMLHttpRequest 教程](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)
* [iyb-fetch](https://git.baoyun.ltd/iyunbao/frontend/iyb-fetch)

### 概念：fetch 是XMLHttpRequest 的升级版，用于在JavaScript中发出http请求
<br>

### 基本用法
------
fetch()的功能与 XMLHttpRequest 基本相同，但有三个主要的差异。
1. fetch使用 Promise，XMLHttpRequest使用回调函数；
2. 采用模块化设计，API 分散在多个对象上（Response 对象、Request 对象、Headers 对象），更合理一些； XMLHttpRequest 是定义在实例对象 xhr上；
3. fetch()通过数据流（Stream 对象）处理数据，可以分块读取，有利于提高网站性能表现，减少内存占用，对于请求大文件或者网速慢的场景相当有用。XMLHTTPRequest 对象不支持数据流，所有的数据必须放在缓存里，不支持分块读取，必须等待全部拿到后，再一次性吐出来

```
fetch('https://api.github.com/users/jiangyanghe')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log('Request Failed', err)); 
```
```
async function getJSON() {
  let url = 'https://api.github.com/users/jiangyanghe';
  try { // await语句必须放在try...catch里面，这样才能捕捉异步操作中可能发生的错误。
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('Request Failed', error);
  }
}
```
<br>

### Response: 处理HTTP回应


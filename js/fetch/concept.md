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

### Fetch 接口
* Headers 相当于 response/request 的头信息，可以使你查询到这些头信息，或者针对不同的结果做不同的操作。
* Request 相当于一个资源请求。
* Response 相当于请求的响应
<br><br>

### Headers
Headers接口是一个简单的键值对，Request接口中的headers参数就可以直接用一个对象来代替，但它和普通对象的不同在于它提供了以下一些方法,且大多方法的返回值是可以被for of迭代的，使得操作Header更为方便 Headers接口的方法Headers接口的方法<br><br>

```
let response =  await  fetch(url);  
response.headers.get('Content-Type')
// application/json; charset=utf-8
```
Headers 方法
* Headers.get()：根据指定的键名，返回键值。
* Headers.has()： 返回一个布尔值，表示是否包含某个标头。
* Headers.set()：将指定的键名设置为新的键值，如果该键名不存在则会添加。
* Headers.append()：添加标头。
* Headers.delete()：删除标头。
* Headers.keys()：返回一个遍历器，可以依次遍历所有键名。
* Headers.values()：返回一个遍历器，可以依次遍历所有键值。
* Headers.entries()：返回一个遍历器，可以依次遍历所有键值对（[key, value]）。
* Headers.forEach()：依次遍历标头，每个标头都会执行一次参数函数。
<br><br>


guard属性
在Headers对象中有一个guard 属性，来指定其是否可以被改变，其有以下5种取值。

* none：默认值
* request：Request.headers 对象只读
* request-no-cors：在 no-cors 模式下，Request.headers 对象只读
* response：Response.headers 对象只读
* immutable：通常在 ServiceWorkers 中使用，所有 Header 对象都为只读

<br><br>

### Request 
```
const myRequest = new Request('http://localhost/flowers.jpg');

const myURL = myRequest.url; // http://localhost/flowers.jpg
const myMethod = myRequest.method; // GET
const myCred = myRequest.credentials; // omit

fetch(myRequest)
  .then(response => response.blob())
  .then(blob => {
    myImage.src = URL.createObjectURL(blob);
});
```
属性：
* Request.method // 包含请求的方法 (GET, POST, 等.)
* Request.url // 包含这个请求的URL。
* Request.referrer
* Request.mode //包含请求的模式 (例如： cors, no-cors, same-origin, navigate).
* Request.credentials // 包含请求的证书(例如： omit, same-origin).
### Response: 处理HTTP回应

fetch()请求成功以后，得到的是一个 Response 对象。它对应服务器的 HTTP 回应。

```
async function fetchText() {
  let response = await fetch('/readme.txt');
  console.log(response.status);  // 同步属性
  console.log(response.statusText);  // 同步属性
  let json = await response.json(); // 异步获取json
}
```
Response 包含的数据通过 Stream 接口异步读取, 其中response.status、response.statusText为同步属性
* Response.ok属性返回一个布尔值，表示请求是否成功，true对应 HTTP 请求的状态码 200 到 299，false对应其他的状态码。
* Response.status属性返回一个数字，表示 HTTP 回应的状态码（例如200，表示成功请求）。
* Response.statusText属性返回一个字符串，表示 HTTP 回应的状态信息（例如请求成功以后，服务器返回"OK"）。
* Response.url属性返回请求的 URL。如果 URL 存在跳转，该属性返回的是最终 URL。
* Response.type 
* * basic：普通请求，即同源请求。
* * cors：跨域请求。
* * error：网络错误，主要用于 Service Worker。
* * opaque：如果fetch()请求的type属性设为no-cors，就会返回这个值，详见请求部分。表示发出的是简单的跨域请求，类似<form>表单的那种跨域请求。
* * opaqueredirect：如果fetch()请求的redirect属性设为manual，就会返回这个值，详见请求部分。
* Response.redirected 属性返回一个布尔值，表示请求是否发生过跳转。

<br><br>
## 读取内容的方法
_____
Response对象根据服务器返回的不同类型的数据，提供了不同的读取方法。
```
* response.text()：得到文本字符串。可以用于获取文本数据，比如 HTML 文件。
* response.json()：得到 JSON 对象。
* response.blob()：得到二进制 Blob 对象。
* response.formData()：得到 FormData 表单对象。主要用在 Service Worker 里面，拦截用户提交的表单，修改某些数据以后，再提交给服务器。
* response.arrayBuffer()：得到二进制 ArrayBuffer 对象。用于获取流媒体文件。

// 实际封装中 可以根据response.headers.get("content-type") 去封装
if(response.headers.get("content-type") === "application/json") {
    return response.json().then(function(json) {
      // process your JSON further
    });
  }
```

Reponse.clone()
___
Stream 对象只能读取一次，读取完就没了。这意味着，前一节的五个读取方法，只能使用一个，否则会报错。


let text =  await response.text();
let json =  await response.json();  // 报错
上面示例先使用了response.text()，就把 Stream 读完了。后面再调用response.json()，就没有内容可读了，所以报错。

Response 对象提供Response.clone()方法，创建Response对象的副本，实现多次读取。

```
const response1 = await fetch('flowers.jpg');
const response2 = response1.clone();

const myBlob1 = await response1.blob();
const myBlob2 = await response2.blob();

image1.src = URL.createObjectURL(myBlob1);
image2.src = URL.createObjectURL(myBlob2);
```
上面示例中，response.clone()复制了一份 Response 对象，然后将同一张图片读取了两次。

Response 对象还有一个Response.redirect()方法，用于将 Response 结果重定向到指定的 URL

Reponse.body.getReader()
___
Response.body属性是 Response 对象暴露出的底层接口，返回一个 ReadableStream 对象，供用户操作。

它可以用来分块读取内容，应用之一就是显示下载的进度。

```
const response = await fetch('flower.jpg');
const reader = response.body.getReader();

while(true) {
  const {done, value} = await reader.read();

  if (done) {
    break;
  }

  console.log(`Received ${value.length} bytes`)
}
```
上面示例中，response.body.getReader()方法返回一个遍历器。这个遍历器的read()方法每次返回一个对象，表示本次读取的内容块。

这个对象的done属性是一个布尔值，用来判断有没有读完；value属性是一个 arrayBuffer 数组，表示内容块的内容，而value.length属性是当前块的大小
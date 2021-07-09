# document

### [document.readyState](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/readyState)
* loading(正在加载) // document 仍在加载。
* interactive（可交互）// 文档已被解析，"正在加载"状态结束，但是诸如图像，样式表和框架之类的子资源仍在加载。
* complete（完成）// 文档和所有子资源已完成加载。表示 load (en-US) 状态的事件即将被触发。

<br><br>

### 页面加载事件 DOMContentLoaded 和 window.onload 的区别

* window.onload // 样式文件、图片文件、子框架页面（iframe）完全加载之后
* DOMContentLoaded // 当页面文档加载并解析完毕之后会马上出发 DOMContentLoaded 事件，而不会等待样式文件、图片文件和子框架页面的加载。

```
 document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });
```
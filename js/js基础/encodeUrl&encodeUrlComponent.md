# escape,encodeURI,encodeURIComponent有什么区别?
* 简单来说，escape是对字符串(string)进行编码(而另外两种是对URL)，作用是让它们在所有电脑上可读。
* encodeURIComponent会把 http:// 编码成 http%3A%2F%2F 而encodeURI却不会。

```
encodeURI("http://www.cnblogs.com/season-huang/some other thing");
// 编码后会变为
"http://www.cnblogs.com/season-huang/some%20other%20thing";

encodeURIComponent("http://www.cnblogs.com/season-huang/some other thing");
// 编码后会变为
"http%3A%2F%2Fwww.cnblogs.com%2Fseason-huang%2Fsome%20other%20thing";

```
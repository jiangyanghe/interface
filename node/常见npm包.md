# 开发常用的npm 包

* ~ ^ 比较：
~ 会匹配最近的小版本依赖包，比如~1.2.3会匹配所有1.2.x版本，但是不包括1.3.0
^ 会匹配最新的大版本依赖包，比如^1.2.3会匹配所有1.x.x的包，包括1.3.0，但是不包括2.0.0
————————————————

* compression express启用gzip gzip是用于压缩,js、css等文件的压缩 
```
  var compression = require('compression')
  var app = express();
  // 启用gzip
  app.use(compression())
```

* consolidate consolidate是一个模板引擎的结合体。包括了常用的jade和ejs。
通过配置我们就可以使用多种模板引擎。

```
  const server = require('express')();
  const consolidate = require('consolidate');

  // 将html设置为默认扩展
  server.set('view engine' , 'html');
  // 指定模版文件位置，这边表示的是同级目录
  server.set('views' , './');
  // 指定将ejs文件渲染成html文件
  server.engine('html' , consolidate.ejs);
```
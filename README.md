#简介
这是[在工大](http://www.zaigongda.com)项目的 React Native 实现。同时开发 iOS 和 Android 客户端。通过抓包的方法获得现有接口。

##运行错误解决方法
如果 Xcode 编译遇到以下错误

```
uncaught error Error: ReferenceError: [BABEL] /Users/zhongshaofen/Development/AtHIT/node_modules/react-deep-force-update/lib/index.js: Unknown option: /Users/zhongshaofen/Development/AtHIT/node_modules/react-deep-force-update/.babelrc.stage

...

Command /bin/sh failed with exit code 1
```
删除`*/node_modules/react-deep-force-update/.babelrc`这个文件就可以运行了
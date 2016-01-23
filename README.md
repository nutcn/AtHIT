#简介
这是[在工大](http://www.zaigongda.com)项目的 React Native 实现。同时开发 iOS 和 Android 客户端。通过抓包的方法获得现有接口。

## 环境需求

1. OS X - 本向导假设您的操作系统是OS X，因为这是开发iOS应用所必须的。
2. 推荐使用[Homebrew](http://brew.sh) 来安装Watchman和Flow
3. 安装[Node.js](http://nodejs.org/) 4.0或更高版本(译注：如果你并不使用Node.js开发网站，只是用于React Native的开发，那么请先安装homebrew，然后直接使用`brew install node`安装即可，不必按照下面的nvm的安装步骤)
  - 安装 **nvm**（安装向导在[这里](https://github.com/creationix/nvm#installation)）。然后运行`nvm install node && nvm alias default node`，这将会默认安装最新版本的Node.js并且设置好命令行的环境变量，这样你可以输入`node`命令来启动Node.js环境。nvm使你可以可以同时安装多个版本的Node.js，并且在这些版本之间轻松切换。
  - 如果你从未接触过npm，推荐阅读[npm的文档](https://docs.npmjs.com/)
4. 在命令行中输入`brew install watchman`，我们推荐安装[watchman](https://facebook.github.io/watchman/docs/install.html)，否则你可能会遇到一个Node.js监视文件系统的BUG。
5. 如果你希望使用[flow](http://www.flowtype.org/)来为js代码加上类型检查，那么在命令行中输入`brew install flow`来安装flow。（译注：新手可以跳过这一步）

我们推荐您定期运行`brew update && brew upgrade`来保持上述几个程序为最新版本。

## iOS开发环境准备

你需要安装[Xcode](https://developer.apple.com/xcode/downloads/) 7.0或者更高版本。你可以在App Store中找到并安装Xcode。

## Android开发环境准备

要使React Native应用支持Android，首先需要安装Android SDK (如果你不想连接安卓设备，那么还需要一个安卓模拟器)。参见 [Android开发指南](/docs/android-setup.html#content) 了解如何搭建安卓开发环境。

现在[Windows和Linux也在实验性的支持](/docs/linux-windows-support.html#content)Android开发。

Windows用户可以参考[这个帖子](/bbs/post/7)来搭建环境。



##运行错误解决方法
如果 Xcode 编译遇到以下错误

```
uncaught error Error: ReferenceError: [BABEL] /Users/zhongshaofen/Development/AtHIT/node_modules/react-deep-force-update/lib/index.js: Unknown option: /Users/zhongshaofen/Development/AtHIT/node_modules/react-deep-force-update/.babelrc.stage

...

Command /bin/sh failed with exit code 1
```
删除`*/node_modules/react-deep-force-update/.babelrc`这个文件就可以运行了
##此api来源于[网易api](https://github.com/Binaryify/NeteaseCloudMusicApi)
##特别感谢[Binaryify](https://github.com/Binaryify/NeteaseCloudMusicApi)提供此api

##由于后端和webpack-server-dev的冲突原因，建议先使用```webpack ./public/main.js ./dist/bundle.js```  进行打包，然后执行node app.js
##如果有想重写的同学可以删除==public==里面的所有内容，然后自己重写
## 环境要求

需要 NodeJS 8.12+ 环境

## 安装

```shell
$ git clone git@github.com:chenpengdepot/Music.git
$ npm install
```

## 运行

```shell
$ node app.js
```

服务器启动默认端口为 3000,若不想使用 3000 端口,可使用以下命令: Mac/Linux

```shell
$ PORT=4000 node app.js
```

windows 下使用 git-bash 或者 cmder 等终端执行以下命令:

```shell
$ set PORT=4000 && node app.js
```

## 使用文档

[文档地址](https://binaryify.github.io/NeteaseCloudMusicApi)

![文档](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/docs.png)

## 更新日志

[changelog](https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/CHANGELOG.MD)

## 单元测试

```shell
$ npm test
```

![单元测试](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/screenshot1.png)
![单元测试](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/screenshot2.png)

## 贡献者
![](https://opencollective.com/NeteaseCloudMusicApi/contributors.svg?width=890)


## License

[The MIT License (MIT)](https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/LICENSE)

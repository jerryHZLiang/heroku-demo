# heroku-demo
基于heroku部署
node.js的hello-world程序

#环境需要
```
node.js, and npm
heroku CLI tool
git
```
#安装Heroku 的命令行工具包Toolbelt
[安装Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
```
$ brew install heroku/brew/heroku
```

#新建一个文件夹
```
$ mkdir heroku-demo
$ cd heroku-demo
```
#然后在根目录新建 server.js
内容可以参考nodejs官网的hello-word
[hello-world](http://nodejs.cn/api/synopsis.html#synopsis_example)
```
let http = require('http'),
port = process.env.PORT || 8080;
 
// create a simple server
let server = http.createServer(function (req, res) {
 
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write('hello heroku!', 'utf-8');
        res.end();
 
    });
 
// listen on the port
server.listen(port, function () {
 
    console.log('app up on port: ' + port);
 
});
```
**注意把port改一下**
```
let port = process.env.PORT || 8080;
```

#建一个package.json
```
# npm init -y
```

#建一个git文件
```
$ git init
$ git add *
$ git commit -m "first commit"
```
#新建一个procfile文件, 不带后缀名
```
web: node index.js
```

去heroku官网注册账号
ps: qq邮箱注册不了, 最好用gmail

新建一个 heroku app
```
$ heroku login
$ heroku create dp83-hello-world
$ git push heroku master
```
访问
[hello-word](https://polar-savannah-78927.herokuapp.com/)

var Koa = require('koa');
var wechat = require('./wechat/g');
var config = {
    wechat: {
        appID: 'wxeaa02ad3ac62bce7',
        appSecret: 'f2bd3d8f6931eabe9510a822dd46364f',
        token: 'painandlove6'
    }
};

var app = new Koa();

app.use(wechat(config));

app.listen(8080);
console.log('Listen at port: 8080')
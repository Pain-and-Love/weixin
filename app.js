var path = require('path');
var Koa = require('koa');
var wechat = require('./wechat/g');
var util = require('./libs/util');
var wechat_file = path.join(__dirname, './config/wechat.txt');
var config = {
    wechat: {
        appID: 'wxeaa02ad3ac62bce7',
        appSecret: 'f2bd3d8f6931eabe9510a822dd46364f',
        token: 'painandlove6',
        getAccessToken: function() {
            return util.readFileAsync(wechat_file);
        },
        saveAccessToken: function(data) {
            data = JSON.stringify(data);
            return util.writeFileAsync(wechat_file, data);
        }
    }
};

var app = new Koa();

app.use(wechat(config.wechat));

app.listen(8080);
console.log('Listen at port: 8080')
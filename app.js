var Koa = require('koa');
var sha1 = require('sha1');
var config = {
    wechat: {
        appID: 'wxeaa02ad3ac62bce7',
        appSecret: 'f2bd3d8f6931eabe9510a822dd46364f',
        token: 'painandlove6'
    }
};

var app = new Koa();

app.use(function *(next) {
    console.log(this.query);
    var token = config.wechat.token;
    var signature = this.query.signature;
    var nonce = this.query.nonce;
    var timestamp = this.query.timestamp;
    var echostr = this.query.echostr;

    var str = [token, timestamp, nonce].sort().join('');
    var sha = sha1(str);
    console.log(sha, signature, sha === signature);
    if (sha === signature) {
        this.body = echostr + '';
    } else {
        this.body = 'Wrong~~';
    }
});

app.listen(8080);
console.log('Listen at port: 8080')
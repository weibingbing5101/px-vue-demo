let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./slider');

http.createServer(function(req, res) {
    let { pathname, query } = url.parse(req.url, true);

    if (pathname === '/api/getsliderimg') {
        return res.end(JSON.stringify(sliders));
    }


}).listen(3000, function(err) {
    let info = '监听成功';
    if (err) {
        info = err
    }
    console.log(info);
});

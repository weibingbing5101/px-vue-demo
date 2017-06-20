let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./slider');

function read(cbfn) {
    fs.readFile('./book.json', 'utf8', (err, data) => {
        let datas = data.length ? JSON.parse(data) : []; // 从文件中取出来的是buffer 要转义
        cbfn && cbfn(datas);
    })
}

http.createServer(function(req, res) {
    let { pathname, query } = url.parse(req.url, true);

    if (pathname === '/api/getsliderimg') {
        return res.end(JSON.stringify(sliders));
    }

    if (pathname === '/api/books') {
        read((data) => {
            res.end(JSON.stringify(data));
        });
        return false;
    }

    // 图书的增删改查
    if (pathname === '/api/getBookList') {
        switch (req.method) {
            case 'GET':
                read(function(data) { //data代表所有数据
                    res.end(JSON.stringify(data));
                });
                break;
            case 'POST':
                break;
            case 'DELETE':
                break;
            case 'PUT':
                break;
        }

    }


}).listen(3000, function(err) {
    let info = '监听成功';
    if (err) {
        info = err
    }
    console.log(info);
});

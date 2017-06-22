let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./slider');
/*
    总结
        读取文件流  取出的是buffer   取出的buffer要进行操作必须要JSON.parse();
        写入文件流  写入的必须是 string || buffer        经过JS处理的数据必须 要 JSON.stringify();

        前端发后台的数据  必须是string
        后端发前端的数据  必须是string
*/
function write(data, cbfn) {
    fs.writeFile('./book.json', JSON.stringify(data), (err, datar) => { // 写入流必须是string || buffer
        cbfn && cbfn(datar);
    });
};

function read(cbfn) {
    fs.readFile('./book.json', 'utf8', (err, data) => {
        let datas = data.length ? JSON.parse(data) : []; // 从文件中取出来的是buffer 要转义
        cbfn && cbfn(datas);
    })
};
// 收集数据方法
function getData(req, cbfn) {
    let str = '';
    req.on('data', function(data) { // 注意  req.on('data',()=>{}) req.on('end',()=>{})是异步
        str += data; // 收集数据
    });
    req.on('end', function() {
        cbfn && cbfn(str);
    });
};

http.createServer(function(req, res) {
    let { pathname, query } = url.parse(req.url, true);   // 把query转换成对象

    if (pathname === '/api/getsliderimg') {
        return res.end(JSON.stringify(sliders));
    }

    // 获取一本书的信息
    if (pathname === '/api/getBookInfo') {
        getData(req, (str) => {
            let bookid = JSON.parse(str);
            read((data) => {
                let book = data.find(item => item.id == bookid.id);
                res.end(JSON.stringify(book));
            });
        });
        return;
    }

    // 修改某一部书信息
    if (pathname === '/api/editBookInfo') {
        getData(req, (str) => {
            let bookinfo = JSON.parse(str);
            read((data) => {
                let arr = data.map((item) => {
                    if (item.id == bookinfo.id) {
                        return bookinfo;
                    } else {
                        return item;
                    }
                });
                console.log(arr);
                write(arr, () => {
                    console.log(arr);
                    res.end(JSON.stringify({}));
                });

            });
        });
        return;
    }

    if (pathname === '/api/books') {
        read((data) => {
            res.end(JSON.stringify(data));
        });
        return;
    }

    // 图书的增删改查
    if (pathname === '/api/getBookList') {
        switch (req.method) {
            case 'GET':
                read((data)=> { //data代表所有数据
                    res.end(JSON.stringify(data));
                });
                break;
            case 'POST':
                getData(req, (str) => {
                    read(function(data) {
                        let addBook = JSON.parse(str);
                        addBook.id = data.length ? data[data.length - 1].id + 1 : 1;

                        data.push(addBook);
                        write(data, (data) => {
                            res.end(JSON.stringify(data));
                        });
                    });
                });
                break;
            case 'DELETE':
                getData(req, (str) => {
                    let removeID = JSON.parse(str).id;
                    read(function(books) {
                        books = books.filter(item => removeID != item.id);
                        write(books, function() {
                            res.end(JSON.stringify({}));
                        });
                    });
                });

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

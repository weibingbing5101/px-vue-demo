let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./slider');

function read(cbfn){
	fs.readFile('./book.json', 'utf8', (err, data)=>{
		let datas = data.length ? JSON.parse(data) : [];   // 从文件中取出来的是buffer 要转义
		cbfn && cbfn(data);
	})
}

http.createServer(function(req, res) {
    let { pathname, query } = url.parse(req.url, true);

    if (pathname === '/api/getsliderimg') {
        return res.end(JSON.stringify(sliders));
    }

    if(pathname === '/api/books'){
    	read((data)=>{
    		res.end(JSON.stringify(data));
    	});
    	return false;
    }


}).listen(3000, function(err) {
    let info = '监听成功';
    if (err) {
        info = err
    }
    console.log(info);
});

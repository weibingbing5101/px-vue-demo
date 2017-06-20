import axios from 'axios';

export function getSliderImg(body) {
    return getData('/api/getsliderimg', body, 'GET');
};


export function getBooks(body) {
    return getData('/api/books', body, 'GET');
};


export function getBookList(body) { // 获取书列表
    return getData('/api/getBookList', body, 'GET');
}

export function addBook(body) {
    return getData('/api/getBookList', body, 'POST');
}


export function getData(url, body, method, host, headers) {
    let option = {
        method: method || "POST",
        url: url
    };

    if (body) {
        // option.data = JSON.stringify(body || {});  // 此处可以不转string   axios已经做处理了
        option.data = body || {};
        console.log(option);
    }

    return new Promise((resolve, reject) => {
        axios(option).then(function(res) {
            if (res && res.status == 200) {
                // console.log(res.data);
                resolve(res.data);
            } else {
                reject(res);
                console.log('请求失败');
            }
        })
    });
}

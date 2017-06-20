import axios from 'axios';

export function getSliderImg(body) {
    return getData('/api/getsliderimg', 'GET', body);
};


export function getBooks(body) {
    return getData('/api/books', 'GET', body);
};


export function getBookList(body) {  // 获取书列表
    return getData('/api/getBookList', 'GET', body);
}


export function getData(url, method, body, host, headers) {
    let option = {
        method: method || "POST",
        url: url
    };

    if (body) {
        option.data = JSON.stringify(body || {});
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

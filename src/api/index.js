import axios from 'axios';

export function getSliderImg(body) {
    return getData('/api/getsliderimg', 'get', body);
};



export function getData(url, method, body, host, headers) {
    let option = {
        method: method || "POST",
        url: url,
        data: body
    };

    if (body) {
        option.data = JSON.stringify(body);
    }

    return new Promise((resolve, reject) => {
        axios(option).then(function(res) {
            if (res && res.status == 200) {
                resolve(res.data);
            } else {
                reject(res);
                console.log('请求失败');
            }
        })
    });
}

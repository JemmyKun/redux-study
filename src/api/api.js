import axios from "axios";

const baseConfig = {
    baseURL: "",
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    timeout: 60000,
    withCredentials: false,
    responseType: 'json',
}
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params,
    }
    return config;
}, function (error) {
    let status = "ERROR";
    return Promise.resolve({
        data: {
            status
        }
    });
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    let status = "ERROR";
    return Promise.resolve({
        data: {
            status
        }
    });
});

const request = (config) => {
    return axios.request(Object.assign(baseConfig, config))
}

const get = (url, config) => {
    return new Promise((res, rej) => {
        axios.get(url, Object.assign(baseConfig, config)).then((data) => {
            res(data);
        }).catch(function (error) {
            rej(error);
        });
    })
}

const post = (url, data, config) => {
    return new Promise((res, rej) => {
        axios.post(url, data, Object.assign(baseConfig, config)).then((data) => {
            res(data);
        }).catch(function (error) {
            rej(error);
        });
    })
}

export {
    axios,
    request,
    get,
    post
}
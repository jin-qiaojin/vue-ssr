import axios from 'axios'
// import cookies from 'js-cookie'

axios.defaults.timeout = 10000 // 设置过期时间
axios.defaults.withCredentials = true // 带上cookie
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

// axios请求拦截
axios.interceptors.request.use(config => {
    return config
}, (error) => {
    return Promise.reject(error)
})

// axios响应拦截
axios.interceptors.response.use(res => {
    return res
}, (error) => {
    return Promise.reject(error)
})

const fetch = (options) => {
    let _options = Object.assign({
        method: 'post',
        toastInfo: true,
        withCredentials: true
    }, options)

    let [_params, _data] = _options.method == 'get'?[options.params, ''] : ['', options.params]
    return axios({
        method: _options.method,
        url: _options.url,
        params: _params,
        data: _data,
        withCredentials: _options.withCredentials
    })
}

export default fetch
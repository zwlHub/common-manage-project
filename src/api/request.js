import config from '../cofing/config.js'
import axios from 'axios'
import { ElMessage } from 'element-plus'
const NETWORK_ERROR = '网络请求异常，请稍后再试'
const service = axios.create({
    baseURL: config.baseApi
})

service.interceptors.request.use((config) => {
    // 在请求之前做些什么，例如配置请求头
    return config
})


service.interceptors.response.use((res) => {
    console.log(res);
    const { code,data,msg } = res.data
    if(code == 200) {
        return data
    }else {
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})


function request (options) {
    // 默认get请求
    options.methods = options.methods || 'get'
    if(options.methods === 'get'){
        options.params = options.data
    }

    // 对mock的处理
    let isMock = config.mock
    if( typeof options.mock !== 'undefined'){
        isMock = options.mock
    }

    // 线上环境处理
    if(import.meta.env.VITE_APP_ENV === 'production'){
        service.defaults.baseURL = config.baseApi
    }else {
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }
    return service(options)
}

export default request

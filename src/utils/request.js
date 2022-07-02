// axios请求模块

import axios from "axios";
// 封装基础路径
const requset = axios.create({
    baseURL: "http://toutiao-app.itheima.net/"
})

// 请求拦截器

// 响应拦截器

export default request;
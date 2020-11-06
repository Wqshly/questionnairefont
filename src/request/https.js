// 封装axios
import Vue from 'vue'
// import axios from 'axios'
import {Message, Loading} from 'element-ui'
import router from '@/router'

const service = Vue.axios.create({
  // 设置跨域代理接口统一的前置地址
  baseURL: '/api',
  timeout: 1000 * 3
})

// 请求拦截
service.interceptors.request.use(config => {
  Loading.service({text: 'Loading...'})
  return config
}, error => {
  Message.error({message: '请求超时'})
  return Promise.resolve(error)
})

// 响应拦截
service.interceptors.response.use(res => {
  Loading.service().close()
  console.log(res.data)
  if (res.data.code === 200) {
    return res.data
  } else if (res.data.code === -99) {
    Message.error('无访问权限!')
    return Promise.reject(res)
  } else if (res.data.code === -1) {
    router.push('/login')
    return Promise.reject(res)
  }
  return Promise.reject(res)
}, error => {
  Loading.service().close()
  if (error.response.status === 504 || error.response.status === 404) {
    Message.error({message: '网络或服务器错误! ⊙﹏⊙∥'})
  } else if (error.response.status === 403) {
    Message.error({message: '权限不足,请联系管理员!'})
  } else {
    Message.error({message: '未知错误!'})
  }
  return Promise.reject(error)
})

export default service

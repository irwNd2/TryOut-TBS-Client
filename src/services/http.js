import applyCaseMiddleware from 'axios-case-converter'
import axios from 'axios'

const instance = applyCaseMiddleware(
  console.log(import.meta.env.VITE_BASE_CORE_URL),
  axios.create({
    baseURL: import.meta.env.VITE_BASE_CORE_URL,
    headers: {
      Accept: 'application/json'
    }
  })
)

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.access_token = token
    }
    return config
  },
  (error) => Promise.reject(error)
)

const request = (config, options) => {
  if (typeof config === 'string') {
    if (!options) return instance.request({ url: config })
    return instance.request({ url: config, ...options })
  }
  return instance.request(config)
}

export const get = async (config, options) => {
  console.log(config)
  return request({ ...config, method: 'GET' }, options)
}

export const post = async (config, options) => {
  return request({ ...config, method: 'POST' }, options)
}

export const put = async (config, options) => {
  return request({ ...config, method: 'PUT' }, options)
}

export const patch = async (config, options) => {
  return request({ ...config, method: 'PATCH' }, options)
}

export const del = async (config, options) => {
  return request({ ...config, method: 'DELETE' }, options)
}

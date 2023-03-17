import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'https://aravi.aenzt.tech/' })

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to us e this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
// const axiosInstance = axios.create({
//   baseURL: 'localhost:5050/'
// })

// export default async ({ Vue }) => (
//   Vue.prototype.$axios = axiosInstance
// )

// export { axiosInstance }

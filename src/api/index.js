import axios from "../utils/request"
import base from "./base"

const api = {
  /**
   * 获取数据
   */
  getNews(params) {
    return axios.get(base.baseUrl + base.news, {
      params: params
    })
  }
}


export default api
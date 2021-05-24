const axios = require('axios');
const apiURL = 'http://34.126.150.58:8000/api';
export default {
  getHeaders() {
    let token = window.localStorage.getItem('token');
      if (token == null) {
        return {}
      }
      return { Authorization: 'Bearer ' + token}
  },
  get(url) {
    return axios.get(apiURL + url, 
        { headers: this.getHeaders()}
      )
  },
  post(url, data){
    return axios.post(
      apiURL + url,
      data,
      { headers: this.getHeaders()}
    )
  }
}
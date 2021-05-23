const axios = require('axios');
const apiURL = 'http://localhost/api';
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
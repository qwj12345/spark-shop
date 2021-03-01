
export function http_api_post(url, obj) {
    return axios.post('/api'+url,obj).then((res) => {
      // console.log(res)
      return Promise.resolve(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  
  export function http_api_get(url) {
    return axios.get('/api'+url).then((res) => {
      // console.log(res)
      return Promise.resolve(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  
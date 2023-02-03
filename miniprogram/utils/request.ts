const baseUrl = "https://api.zbztb.cn/"

type config = {
  url: string,
  data: object,
  header?: object,
  method: | 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
}

const request =   (config: config) => {
    config.header = config.header || {
      'content-type': 'application/json'
    }
    config.method = config.method || 'GET'
    config.url = config.url.startsWith('http') ? config.url : baseUrl + config.url
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.url,
        data: config.data,
        method: config.method,
        header: config.header,
        success(res) {
          resolve(res.data)
        },
        fail(err) {
          reject(err)
        }
      })
    })
}

export default request
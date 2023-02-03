import request from './request' // 引入request.ts封装的接口
 
export const getBanner = (data:any) =>{
  return request({
    url:'login',
    method:'POST',
    data
  }) // 接口1
}
 
// export const getList = (params:any) =>request.post('/house/get_house_list',params)  // 接口2
 
 
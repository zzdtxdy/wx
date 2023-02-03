import request from '../utils/request' // 引入request.ts封装的接口
 
export const login = (data:any) =>{
  return request({
    url:'1111',
    method:'POST',
    data
  }) // 接口1
}
 
// export const getList = (params:any) =>request.post('/house/get_house_list',params)  // 接口2
 
 
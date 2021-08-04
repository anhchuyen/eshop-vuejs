import request from '@/utils/request'

class UsersAPI  {
    addCategory(data){
         return request({
           url: '/categories',
           method: 'post',
           data
         })
       }
    
    listCategory(data){
        return request({
            url : '/categories',
            method:'get',
            params:data
        })
    }
    deleteCategory(data){
      return request({
        url:`/categories/${data.id}`,
        method:'delete',
      })
    }
    handleUpdate(data){
      return request({
        url:`/categories/${data.id}`,
        method:'put',
        data
      })
    }
    
  }
  const Users = new UsersAPI("users");
  export { Users as default };
  
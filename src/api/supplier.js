import request from '@/utils/request'

class SupplierAPI  {
    addSupplier(data){
         return request({
           url: '/suppliers',
           method: 'post',
           data
         })
       }
    
    listSupplier(data){
        return request({
            url : '/suppliers',
            method:'get',
            params:data
        })
    }
    deleteSupplier(data){
      return request({
        url:`/suppliers/${data.id}`,
        method:'delete',
      })
    }
    handleUpdate(data){
      return request({
        url:`/suppliers/${data.id}`,
        method:'put',
        data
      })
    }
    
  }
  const Supplier = new SupplierAPI("users");
  export { Supplier as default };
  
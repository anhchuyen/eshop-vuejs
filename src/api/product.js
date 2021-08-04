import request from '@/utils/request'

class ProductAPI  {
    addProduct(data){
         return request({
           url: '/products',
           method: 'post',
           data
         })
       }
    
    listProduct(data){
        return request({
            url : '/products',
            method:'get',
            params:data
        })
    }
    deleteProduct(data){
      return request({
        url:`/products/${data.id}`,
        method:'delete',
      })
    }
    handleUpdate(data){
      return request({
        url:`/products/${data.id}`,
        method:'put',
		data
      })
    }

    
  }
  const Product = new ProductAPI("products");
  export { Product as default };
  
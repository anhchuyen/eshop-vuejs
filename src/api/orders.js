import request from '@/utils/request'

class OrdersAPI {

    listOrders(data) {
        return request({
            url: `/orders?status=${data}`,
            method: 'get',
        })
    }
    deleteOrders(data) {
            return request({
                url: `/orders/${data.id}`,
                method: 'delete',
            })
        }
		shipOrders(id){
        return request({
          url:`/orders/${id}`,
          method:'post',
		
        })
      }
	  shipOrders1(id){
        return request({
          url:`/orders/${id}/completed`,
          method:'post',
		
        })
      }
	  listOrdersComplete(){
        return request({
          url:'orders-complete',
          method:'get',
		
        })
      }

}
const Orders = new OrdersAPI("orders");
export { Orders as default };
import Orders from '@/api/orders'


const state = {
    listOrders: [],
	listOrdersComplete:[]

}

const mutations = {

    SET_LIST_ORDERS: (state, data) => state.listOrders = data,
	SET_LIST_ORDERS_COMPLETE: (state, data) => state.listOrdersComplete = data,

}

const getters = {

}

const actions = {
	listOrders({commit},data){
		return new Promise((resolve,reject) =>{
			console.log('stauts',data)
		   Orders.listOrders(data)
		  .then(res =>{
			resolve(res)
			commit('SET_LIST_ORDERS', res.data.result)

		  })
		  .catch(error =>{
			reject(error)
		  })
		})
	  },

    // listOrders({ commit }) {

    //     return new Promise((resolve, reject) => {
    //         Orders.listOrders()
    //             .then(res => {
    //                 resolve(res.data.result)

    //                 commit('SET_LIST_ORDERS', res.data.result)

    //             })
    //             .catch(error => {
    //                 reject(error)
    //             })
    //     })
    // },

	shipOrders({commit},id){
     	return new Promise((resolve,reject) =>{
			Orders.shipOrders(id)
     	  .then(res =>{
     		resolve(res)


     	  })
     	  .catch(error =>{
     		reject(error)
     	  })
     	})
       },
	   shipOrders1({commit},id){
		return new Promise((resolve,reject) =>{
		   Orders.shipOrders1(id)
		  .then(res =>{
			resolve(res)


		  })
		  .catch(error =>{
			reject(error)
		  })
		})
	  },
	  listOrdersComplete({commit}){
		return new Promise((resolve,reject) =>{
		   Orders.listOrdersComplete()
		  .then(res =>{
			resolve(res)
			
			commit('SET_LIST_ORDERS_COMPLETE', res.data.result)

		  })
		  .catch(error =>{
			reject(error)
		  })
		})
	  },
    //   deleteContact({ commit },item) {

    // 	return new Promise((resolve, reject) => {
    // 	  Contact.deleteContact(item) 
    // 		.then(response => {
    // 		  resolve(response);
    // 		})
    // 		.catch(error => {
    // 		  reject(error);
    // 		});
    // 	});
    //   },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
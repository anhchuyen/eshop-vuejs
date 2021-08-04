import Dashboard from '@/api/dashboard'


const state = {
	revenue:0,
	revenueLast:0,
	averageUp:0,
	orderSuccess:0,
	orderUp:0,
	chart:[]

}

const mutations = {
	SET_REVENUE:(state,data) => state.revenue = data,
	SET_REVENUE_LAST:(state,data) => state.revenueLast = data,
	SET_AVERAGE_UP:(state,data) => state.averageUp = data,
	SET_ORDERS_SUCCESS:(state,data) => state.orderSuccess = data,
	orderUp:(state,data) => state.orderUp = data,
	SET_CHART:(state,data) => state.chart = data,
}

const getters = {
  total:(state) => state.revenue - state.revenueLast
}

const actions = {
    dashboard({state,commit},){
        console.log(state)
        return new Promise((resolve,reject) =>{
			Dashboard.dashboard()
          .then((res) =>{
			  console.log('game',res)
			  commit('SET_REVENUE',res.data.card.revenue)
			  commit('SET_REVENUE_LAST',res.data.card.revenueLast)
			  commit('SET_AVERAGE_UP',res.data.card.averageUp)
			  commit('SET_ORDERS_SUCCESS',res.data.card.orders.success)
			  commit('orderUp',res.data.card.orderUp)
			  commit('SET_CHART',res.data.chart)

            resolve(res)
          })
          .catch((error) =>{
            reject(error)
          })
        })
      },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}


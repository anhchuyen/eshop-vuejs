import Product from '@/api/product'


const state = {
  listData:[],
  totalData:0,
  limit:10,
  page:1,
  current:{}
}

const mutations = {
	current : (state,current) => state.current = current,
  LIST_CATEGORY : (state,res) => state.listData = res,
  set_page:(state, page) => state.page = page,
  set_totalData:(state, totalData) => state.totalData = totalData,


}

const getters = {
  
}

const actions = {
    addProduct({state,commit},data){
        console.log(state)
        return new Promise((resolve,reject) =>{
    
          Product.addProduct(data)
    
          .then((res) =>{
          
            resolve(res.message)
      
          })
          .catch((error) =>{
            reject(error)
          })
        })
      },
    listProduct({state,commit}){
      return new Promise((resolve,reject) =>{
        let data = {
          page:state.page,
          limit:state.limit
        }
		
        Product.listProduct(data).then(res =>{
          commit('LIST_CATEGORY',res.data.result)
		  

          commit('set_totalData',res.data.meta.total)
          resolve(res)
         console.log(res.data.meta.total)
        })
        .catch((error)=>{
          reject(error)
        })
        

      })
    },

    deleteProduct({ commit },item) {
      
      return new Promise((resolve, reject) => {
        Product.deleteProduct(item) 
          .then(response => {
            resolve(response);
			
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    handleUpdate({commit},data){
		// console.log( data)
      return new Promise((resolve,reject) =>{

        Product.handleUpdate(data)
		
        .then(res =>{
          resolve(res)
		//   console.log(res.data)
        })
        .catch(error =>{
          reject(error)
        })
      })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}


import User from '@/api/category'


const state = {
  listData1:[],
  totalData:0,
  limit:10,
  page:1,
 

}

const mutations = {
  LIST_CATEGORY : (state,res) => state.listData1 = res,
  set_page:(state, page) => state.page = page,
  set_totalData:(state, totalData) => state.totalData = totalData,
	SET_MEN_FASHION:(state,men_fashion) => state.men_fashion = men_fashion

}

const getters = {
  
}

const actions = {
    add({state,commit},data){
        console.log(state)
        return new Promise((resolve,reject) =>{
    
          User.addCategory(data)
    
          .then((res) =>{
            
            resolve(res.message)
      
          })
          .catch((error) =>{
            reject(error)
          })
        })
      },
    listCategory({state,commit}){
      return new Promise((resolve,reject) =>{
        let data = {
          page:state.page,
          limit:state.limit
        }

        User.listCategory(data).then(res =>{
          commit('LIST_CATEGORY',res.data.result)
          commit('set_totalData',res.data.meta.total)
          resolve(res)
		
        })
        .catch((error)=>{
          reject(error)
        })
        

      })
    },
    deleteCategory({ commit },item) {
      
      return new Promise((resolve, reject) => {
        User.deleteCategory(item) 
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    handleUpdate({commit},data){
		
      return new Promise((resolve,reject) =>{
        User.handleUpdate(data)
        .then(res =>{
          resolve(res)
        commit
         
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


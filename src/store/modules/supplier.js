import Supplier from '@/api/supplier'


const state = {
  listData2:[],
  totalData:0,
  limit:10,
  page:1
}

const mutations = {
  LIST_CATEGORY : (state,res) => state.listData2 = res,
  set_page:(state, page) => state.page = page,
  set_totalData:(state, totalData) => state.totalData = totalData
 

}

const getters = {
  
}

const actions = {
    add({state,commit},data){
        console.log(state)
        return new Promise((resolve,reject) =>{
    
          Supplier.addSupplier(data)
    
          .then((res) =>{
            
            resolve(res.message)
      
          })
          .catch((error) =>{
            reject(error)
          })
        })
      },
    listSupplier({state,commit}){
      return new Promise((resolve,reject) =>{
        let data = {
          page:state.page,
          limit:state.limit
        }

        Supplier.listSupplier(data).then(res =>{
          commit('LIST_CATEGORY',res.data.result)
          commit('set_totalData',res.data.meta.total)
          resolve(res)
        })
        .catch((error)=>{
          reject(error)
        })
        

      })
    },
    deleteSupplier({ commit },item) {
      
      return new Promise((resolve, reject) => {
        Supplier.deleteSupplier(item) 
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    handleUpdate({commit},item){
      return new Promise((resolve,reject) =>{
        Supplier.handleUpdate(item)
        .then(res =>{
          resolve(res)
         
         
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


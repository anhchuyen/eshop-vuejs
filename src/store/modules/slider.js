import Slider from '@/api/slider'


const state = {
  listData:[],
  totalData:0,
  limit:10,
  page:1
}

const mutations = {
  LIST_CATEGORY : (state,res) => state.listData = res,
  set_page:(state, page) => state.page = page,
  set_totalData:(state, totalData) => state.totalData = totalData
 

}

const getters = {
  
}

const actions = {
    addSlider({state,commit},data){
        console.log(state)
        return new Promise((resolve,reject) =>{
    
          Slider.addSlider(data)
    
          .then((res) =>{
         
            resolve(res.message)
            commit
          })
          .catch((error) =>{
            reject(error)
          })
        })
      },
    listSlider({state,commit}){
      return new Promise((resolve,reject) =>{
        let data = {
          page:state.page,
          limit:state.limit
        }

        Slider.listSlider(data).then(res =>{
          commit('LIST_CATEGORY',res.data.result)
          commit('set_totalData',res.data.meta.total)
          resolve(res)
        })
        .catch((error)=>{
          reject(error)
        })
        

      })
    },
    deleteSlider({ commit },item) {
      
      return new Promise((resolve, reject) => {
        Slider.deleteSlider(item) 
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
        Slider.handleUpdate(item)
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


import Contact from '@/api/contact'


const state = {
  listContact:[],
  current:{}

}

const mutations = {

	SET_LIST_CONTACT:(state,data) => state.listContact = data,
	SET_CURRENT:(state,data) => state.current = data
}

const getters = {
  
}

const actions = {

    listContact({commit}){
	
      return new Promise((resolve,reject) =>{
        Contact.listContact()
        .then(res =>{
          resolve(res.data.result)
         
         commit('SET_LIST_CONTACT',res.data.result)
	
        })
        .catch(error =>{
          reject(error)
        })
      })
    },
	
    handleUpdate({commit},item){
		return new Promise((resolve,reject) =>{
		  Contact.handleUpdate(item)
		  .then(res =>{
			resolve(res)
		   
		   
		  })
		  .catch(error =>{
			reject(error)
		  })
		})
	  },
	  deleteContact({ commit },item) {
      
		return new Promise((resolve, reject) => {
		  Contact.deleteContact(item) 
			.then(response => {
			  resolve(response);
			})
			.catch(error => {
			  reject(error);
			});
		});
	  },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}


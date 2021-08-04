import Brands from "@/api/brands";

const state = {
  listData: [],
  totalData: 0,
  limit: 4,
  page: 1
};

const mutations = {
  LIST_CATEGORY: (state, res) => (state.listData = res),
  set_page: (state, page) => (state.page = page),
  set_totalData: (state, totalData) => (state.totalData = totalData)
};

const getters = {};

const actions = {
  add({ state, commit }, data) {
    console.log(state);
    return new Promise((resolve, reject) => {
      Brands.addBrand(data)

        .then(res => {
          resolve(res.message);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  listBrand({ state, commit }) {
    return new Promise((resolve, reject) => {
      let data = {
        page: state.page,
        limit: state.limit
      };

      Brands.listBrand(data)
        .then(res => {
          commit("LIST_CATEGORY", res.data.result);
          commit("set_totalData", res.data.meta.total);
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  deleteBrand({ commit }, item) {
    return new Promise((resolve, reject) => {
      Brands.deleteBrand(item)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  handleUpdate({ commit }, item) {
    return new Promise((resolve, reject) => {
      Brands.handleUpdate(item)
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

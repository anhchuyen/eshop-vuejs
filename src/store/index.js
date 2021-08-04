import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import category from './modules/category'
import brand from './modules/brand'
import slider from './modules/slider'
import supplier from './modules/supplier'
import product from './modules/product'
import contact from './modules/contact'
import orders from './modules/orders'
import dashboard from './modules/dashboard'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    category,
    brand,
    slider,
    supplier,
	product,
	contact,
	orders,
	dashboard
	
  },
  getters
})

export default store

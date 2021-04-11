import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: [],

    },
    mutations: {
        addElementToCart(state, data) {
            state.cart.push({ ...data })
            sessionStorage.setItem('cart', JSON.stringify(state.cart))
        },
        deleteElementFromCart(state, index){
          state.cart.splice(index, 1)
          sessionStorage.setItem('cart', JSON.stringify(state.cart))
        },

        cleanCart(state){
          state.cart = []
          sessionStorage.setItem('cart', JSON.stringify(state.cart))
        },

        initializeCart(state){
          const data = sessionStorage.getItem('cart')
          if(data){
            const dataParsed = JSON.parse(data)
            state.cart = [...dataParsed]
          }
        }


    },
    actions: {},
    modules: {}
})
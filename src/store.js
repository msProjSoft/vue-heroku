import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},
   

  },

  getters: {

    /*  
      firstNameX() {
        const cu = sessionStorage.getItem('userLogin');
        if (cu) { return JSON.parse(cu).firstName; }
        return '';
      },
 */
  },

  mutations: {
    saveCurrentUser(state, user){
      sessionStorage.setItem('userLogin', JSON.stringify(user)) 
    
 /*      console.log('currentUser...',state.currentUser.firstName)
      state.firstNameLogged = user.firstName
      state.lastNameLogged = user.lastName */
    
    },


  },

  actions: {
    save({commit}, user){
      console.log(user)
      commit('saveCurrentUser', user)
      router.push('/')
    },

  },


});
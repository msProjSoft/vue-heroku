import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

const Axios = require('axios');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},
    livros: [],
    msg: '',
   

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

    saveLivros(state, playlod) {
      state.livros = playlod
    }


  },

  actions: {
    save({commit}, user){
      const role='Adm'
      commit('saveCurrentUser', user, role)
      router.push('/')
    },

    async getLivros({commit}) {
      const res = await Axios('http://localhost:1337/'+'livros')
      .then(res => {
        console.log('get all books.....',res.data)
        commit('saveLivros', res.data)
        })
        .catch(err =>{ console.log(err) })      
  },

  },



});
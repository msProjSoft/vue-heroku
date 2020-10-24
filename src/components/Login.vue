<template>
  <dir class="container">
      <h1>Login</h1>

            <form @submit.prevent="save({firstName, lastName})">
                <input type="text" class="form-control" v-model="firstName">
                <br>
                <input type="text" class="form-control" v-model="lastName">
            <br>
            <button class="btn btn-info" type="submit" >Save</button>
            </form>

            <br>

            <br>
            <br>
            First Name: {{$userData.firstName}}
            <br>
            Last Name: {{$userData.lastName}}

  </dir>
</template>

<script>
import {mapActions, } from 'vuex';
export default {
    name:'Login',
    data() {
        return {
            firstName: '',
            lastName: '',
        }
    },
    computed: {
   //  ...mapState(['firstNameLogged', 'lastNameLogged'])
    },
    methods: {
        ...mapActions(['save',])
    },

}
</script>



<template>
    <div class="container">
        <h1>Livros</h1>
        <ul>
            <ol v-for="item in livros" :key="item.id">
                {{item.titulo}} --- {{item.autor}}
            </ol>
        </ul>
        <div>
           <button @click="getAllLivros">Get All Books</button>
        </div>

    </div>
</template>

<script>
import { mapState} from 'vuex'
import { constants } from 'crypto';
export default {
    name: 'Livros',

    computed: {
        ...mapState(['livros'])
    },

    methods: {
        getAllLivros() {
            this.$store.dispatch('getLivros')
        },

    }
}
</script>
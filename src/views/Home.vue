<template>
  <div class="home">
    <Hello msg="Vue + Heroku" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from "@/components/Hello.vue";

export default {
  name: "home",
  components: {
    Hello
  }
};
</script>

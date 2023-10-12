<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <GreetingUser /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import GreetingUser from '@/components/GreetingUser.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
    // GreetingUser

  }
}
</script>

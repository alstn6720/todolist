<template>
  <TodoHeader />
  <TodoInput />
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoInput from './components/TodoInput.vue'

  export default {
    components: {
      TodoHeader,TodoInput
    }
  }

</script>
<style>
 @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

  html, body {
    font-family: 'Itim', cursive;
  }
  #app {
    font-family: 'Itim', cursive;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  body {
    text-align: center;
    background-color: #F6F6F6;
  }

  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>

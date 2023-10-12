<template>
    <header>
      <!-- 머스태그 -->
      <h1 v-bind:class="h1">{{title}}</h1> 
      <!-- 단방향 바인딩 : v-bind HTML 태그의 속성 값을 동적으로 수정 -->
    </header>
</template>
<script>
  export default{
      name:'TodoHeader',
      data(){
        return{
          title:'Todo it~',
          h1:'h1'
        }
      }
      //data() > return{ } 에 데이터를 선언 후 html에서 {{ }}(mustach expression)에서 변수를 호출
  }
</script>
<style scoped>

  header{
  
  }
  h1 {
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;

  }
  
</style>

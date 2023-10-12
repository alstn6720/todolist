<!-- 
  <template>
  <div>
      <h2 v-bind:class="h2">{{ todo }}</h2>
      <input type="text" v-model="newTodoItem">
      <button v-on:click="addTodo">add</button>
  </div>
</template>

<script>
export default {
  name:'TodoInput',
  data(){ //함수형태
    return {
      newTodoItem: "",
      todo:'',
      h2:'h2'
    }
  }
  ,
  methods: {
    addTodo: function() {
      console.log(this.newTodoItem); 
      // this는 현재 실행중인 컴포넌트를 의미한다.여기서는 TodoInput.vue
      // 해당 컴포넌트의 데이터 및 메서드에 접근하려면 객체.속성처럼 this를 써야한다

                      
      //저장하는 로직
      localStorage.setItem('할일', this.newTodoItem);
      
      this.newTodoItem=""; //비워주기(초기화)

      TodoItem=newTodoItem;
    }


  }
}
</script>
 -->

<!-- 버튼클릭하면 p에 목록값표시 -->
<!-- <template>
  <div>
      <h2 v-bind:class="h2">{{ todo }}</h2>
      <input type="text" v-model="newTodoItem">
      <button v-on:click="addTodo">add</button>
      <p>{{ TodoItem }}</p>
  </div>
</template>

<script>
export default {
  name:'TodoInput',
  data(){ //함수형태
    return {
      newTodoItem: "",
      todo:'',
      h2:'h2',
      TodoItem: ""
    }
  }
  ,
  methods: {
    addTodo: function() {
      console.log(this.newTodoItem); 
      /* 
      this는 현재 실행중인 컴포넌트를 의미한다.여기서는 TodoInput.vue
      해당 컴포넌트의 데이터 및 메서드에 접근하려면 객체.속성처럼 this를 써야한다
      */
      this.TodoItem=this.newTodoItem;                               
      //저장하는 로직
      //localStorage.setItem('할일', this.newTodoItem);
      this.newTodoItem=""; //비워주기(초기화)
      
    }


  }
}
</script> -->
<!-- 버튼을 span으로 변경,키보드enter이벤트 추가 p에 목록값표시 -->
<!-- <template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
        <i class="far fa-plus-square addBtn"></i>
      </span>
      <p>{{ TodoItem }}</p>
  </div>
</template>

<script>
export default {
  name:'TodoInput',
  data(){ //함수형태
    return {
      newTodoItem: "",
      todo:'',
      h2:'h2',
      TodoItem: ""
    }
  }
  ,
  methods: {
    addTodo: function() {
      console.log(this.newTodoItem); 
      /* 
      this는 현재 실행중인 컴포넌트를 의미한다.여기서는 TodoInput.vue
      해당 컴포넌트의 데이터 및 메서드에 접근하려면 객체.속성처럼 this를 써야한다
      */
      this.TodoItem=this.newTodoItem;                               
      //저장하는 로직
      //localStorage.setItem('할일', this.newTodoItem);
      this.newTodoItem=""; //비워주기(초기화)
      
    }


  }
}
</script> -->
<!-- 할일 목록 추가하기 -->
<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
        <i class="far fa-plus-square addBtn"></i>
      </span>
      <ul class="list">
        <li v-for="(item, index) in todoList" :key="index">
          <i class="ion-compose"></i>{{index}} {{ item }}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name:'TodoInput',
  data(){ //함수형태
    return {
      newTodoItem: "",
      todo:'',
      h2:'h2',
      todoList: [] // 할일 목록을 저장할 배열 추가
    }
  }
  ,
  methods: {
    addTodo: function() {
      console.log(this.newTodoItem); 
      /* 
      this는 현재 실행중인 컴포넌트를 의미한다.여기서는 TodoInput.vue
      해당 컴포넌트의 데이터 및 메서드에 접근하려면 객체.속성처럼 this를 써야한다
      */
      this.TodoItem=this.newTodoItem;    
      // 값을 배열에 추가
      this.todoList.push(this.newTodoItem);                           
      //저장하는 로직
      //localStorage.setItem('할일', this.newTodoItem);
      this.newTodoItem=""; //비워주기(초기화)
      
    }


  }
}
</script>
<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.list li{
  text-align: left;
}
.list li i{
  font-size: 20px;
  margin-right: 14px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  height: 50px;
}
.addContainer {
  /* float: right; */
  background: linear-gradient(to right, #62EAC6, #32CEE6);
  display:inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>

<!-- p목록이 추가되게 하기 -->
<!-- <template>
  <div>
    <h2 v-bind:class="h2">{{ todo }}</h2>
    <input type="text" v-model="newTodoItem">
    <button v-on:click="addTodo">add</button>
    <div v-for="(item, index) in todoList" :key="index">
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      newTodoItem: "",
      todo: '',
      h2: 'h2',
      todoList: [] // 할일 목록을 저장할 배열 추가
    }
  },
  methods: {
    addTodo: function() {
      console.log(this.newTodoItem);

      // 값을 배열에 추가
      this.todoList.push(this.newTodoItem);

      // 저장하는 로직 (localStorage에는 모든 할일 목록을 저장하려면 추가 작업 필요)
      // 이 예제에서는 localStorage에 덮어쓰기로 저장합니다.
      localStorage.setItem('할일', JSON.stringify(this.todoList));

      // 이제 비워줍니다.
      this.newTodoItem = "";
    }
  }
}
</script> -->

<!-- 새로고침되도 p목록들이 표시되게 -->
<!-- 
<template>
  <div>
    <h2 v-bind:class="h2">{{ todo }}</h2>
    <input type="text" v-model="newTodoItem">
    <button v-on:click="addTodo">add</button>
    <div v-for="(item, index) in todoList" :key="index">
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      newTodoItem: "",
      todo: '',
      h2: 'h2',
      todoList: [] // 할일 목록을 저장할 배열 추가
    }
  },
  created() {
    // 페이지 로드 시 localStorage에서 할일 목록을 불러옵니다.
    const storedTodoList = localStorage.getItem('할일');
    if (storedTodoList) {
      this.todoList = JSON.parse(storedTodoList);
    }
  },
  methods: {
    addTodo: function() {
      console.log(this.newTodoItem);

      // 값을 배열에 추가
      this.todoList.push(this.newTodoItem);

      // 저장하는 로직 (localStorage에는 모든 할일 목록을 저장하려면 추가 작업 필요)
      // 이 예제에서는 localStorage에 덮어쓰기로 저장합니다.
      localStorage.setItem('할일', JSON.stringify(this.todoList));

      // 이제 비워줍니다.
      this.newTodoItem = "";
    }
  }
}
</script> -->

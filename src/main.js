import { createApp } from 'vue' // Vue 생성자 함수를 사용하는 대신에, createApp() 함수를 사용하여 vue애플리케이션를 생성하기위해 vue에서 creatApp함수를 가져옴,{}안에는 변수,함수등이 지정됨


import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
/* createApp 함수로 Vue 애플리케이션 인스턴스를 생성, 
 App을 인자로 전달하여 Vue 애플리케이션의 루트 컴포넌트를 설정 */
//mount('#app'): 생성된 Vue 애플리케이션 인스턴스를 지정된 DOM 요소에 마운트
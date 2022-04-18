<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{counterStore.counter}}</h1>
   <h2>{{counterStore.name}}</h2> 
   {{dblcounter}}
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script setup>
import {useCounterStore} from './components/store/counter'
const counterStore=useCounterStore();

counterStore.$state={
  counter: counterStore.counter + 1, //thsuivdhfg
  name: 'Abalam',
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

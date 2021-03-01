<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
let stg = window.sessionStorage;
export default {
  name: 'App',
  created(){

    if(this.$route.path == '/pro'){
      stg.setItem('menu_num',1)
    }
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
#app {
  /* 'Avenir', Helvetica, Arial, sans-serif */
  font-family: 'Karla', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>

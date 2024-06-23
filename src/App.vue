<script setup>
// import FormView from './components/FormView.vue'

</script>
<template>
   <!-- <FormView /> -->

   <router-link class="link" to="/home">Home</router-link>
   <router-link class="link"to="/login">Login</router-link>
   <router-link class="link" to="/register">Register</router-link>

   <router-view></router-view>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.link{
  color:black;
  border:1px solid black;
  padding:7px;
  border-radius:4px;
  text-decoration: none;
  font-weight:500;
  margin:10px;
}

.link:hover{
  color:white;
  background:black;
}
</style>

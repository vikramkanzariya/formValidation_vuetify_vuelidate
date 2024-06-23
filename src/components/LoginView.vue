<script setup>
import { reactive } from 'vue';

import { useRouter } from 'vue-router';
const router = useRouter();

const storedEmail = localStorage.getItem('email');
const storedPasswrod = localStorage.getItem('password');

  const formData = reactive({
    email:"",
    password:"",
    isError:false,
    errorMessage:"",
  });
  

  const login = () => {
    if(formData.email !== storedEmail){
      formData.isError = true;
      formData.errorMessage = "User doesn't exist";
    }
    else if(formData.password !== storedPasswrod){
      formData.isError = true;
      formData.errorMessage = 'Invalid UserName And Password'
    }
    else{
      router.push('/home');
    }
  };



</script>

<template>
  <div>
   <v-sheet class="mx-auto" width="350">

    <v-form ref="form">
      <h2 class="text mt-3 mb-3">Login</h2>
    
      <v-text-field
        name="email"
        v-model="formData.email"
        label="Email..."
        type="email"
      ></v-text-field>
      <!-- <span 
      v-for="error of v$.email.$errors" 
      :key="error.$uid" 
      class="text-red">
      {{ error.$property }} - {{ error.$message }} 
      </span> -->

      <v-text-field
        name="password"
        v-model="formData.password"
        label="Password..."
        type="password"
      ></v-text-field>

      <!-- <span 
      v-for="error of v$.password.$errors" 
      :key="error.$uid" 
      class="text-red">
      {{ error.$property }} - {{ error.$message }} 
      </span> -->


      <div class="d-flex flex-column">
        <v-btn
        class="mt-4"
        color="success"
        block
        @click="login"
      >
        Login
      </v-btn>

      </div>
    </v-form>
   </v-sheet>

  </div>
</template>




<style scoped>

</style>
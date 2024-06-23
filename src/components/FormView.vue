<script setup>
import { computed, reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required , minLength , email , sameAs , helpers } from '@vuelidate/validators';
import { useRouter } from 'vue-router';

const router = useRouter();
  
  const formData = reactive({
    fname:"",
    lname:"",
    email:"",
    password:"",
    cpassword:"",
  });

  const containEmail = (value) => {
    return value.includes('@');
  }

  const rules = computed(() => {
    return {
      fname:{ required , minLength:minLength(4) },
      lname:{ required , minLength:minLength(4) },
      email:{ required, 
              email,
              containEmail:helpers.withMessage('Email must Include @ ' , containEmail),
             },
      password:{ required },
      cpassword:{ required , sameAs:sameAs(formData.password) },
      }
  });

  const v$ = useVuelidate(rules , formData);

  const submitForm = async() => {
    const result = await v$.value.$validate();

    if(result){
      localStorage.setItem('fname' , formData.fname);
      localStorage.setItem('lname' , formData.lname);
      localStorage.setItem('email' , formData.email);
      localStorage.setItem('password' , formData.password);

      router.push('/login');
    }

    console.log("Result: " , result);
  }
 
  const reset = () => {
    formData.fname = ""
    formData.lname = ""
    formData.email = ""
    formData.password = ""
    formData.cpassword = ""
  }
</script>

<template>
  <div>
   <v-sheet class="mx-auto" width="450">
    <v-form ref="form" class="w-100 bg-indigo-lighten-1 ps-5 pe-5  pb-5 rounded-lg">
      <h2 class="text mt-3 mb-3">Register</h2>

      <v-text-field
        name="fname"
        v-model="formData.fname"
        id="id"
        label="FirstName..."
      ></v-text-field>
      <span 
      v-for="error of v$.fname.$errors" 
      :key="error.$uid" 
      class="text-red">
      {{ error.$property }} - {{ error.$message }} 
      </span>
  

      <v-text-field
        name="lname"
        v-model="formData.lname"
        label="LastName..."
      ></v-text-field>
      <span 
      v-for="error of v$.lname.$errors" 
      :key="error.$uid" 
      class="text-red">
      {{ error.$property }} - {{ error.$message }} 
      </span>

    
      <v-text-field
        name="email"
        v-model="formData.email"
        label="Email..."
        type="email"
      ></v-text-field>
      <span 
      v-for="error of v$.email.$errors" 
      :key="error.$uid" 
      class="text-red">
      {{ error.$property }} - {{ error.$message }} 
      </span>

      <v-text-field
        name="password"
        v-model="formData.password"
        label="Password..."
        type="password"
      ></v-text-field>
      <span 
      v-for="error of v$.password.$errors" 
      :key="error.$uid" 
      class="text-red">
      {{ error.$property }} - {{ error.$message }} 
      </span>

      <v-text-field
        name="cpassword"
        v-model="formData.cpassword"
        label="Confirm Password..."
        type="password"
      ></v-text-field>
      <span 
      v-for="error of v$.cpassword.$errors" 
      :key="error.$uid" 
      class="text-red">
      {{ error.$property }} - {{ error.$message }} 
      </span>

      <div class="d-flex flex-column">
        <v-btn
        class="mt-4"
        color="success"
        block
        @click="submitForm"
      >
        SUBMIT
      </v-btn>

      <v-btn 
      color="error"
      class="mt-4"
      block=""
      @click="reset"
      >
        RESET
      </v-btn>
      </div>
    </v-form>
   </v-sheet>

  </div>
</template>


<style scoped>

</style>
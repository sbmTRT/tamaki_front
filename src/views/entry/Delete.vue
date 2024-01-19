<template>
  <div>
    <label for="inputBox">Enter Text:</label>
    <input type="text" id="inputBox" v-model="inputData" />
    <p>You entered: {{ inputData }}</p>
    
    <!-- Submit Button -->
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputData = ref('');

const submitForm = () => {
  // Do something with the entered data
  console.log('Submitted:', inputData.value);
  // You can add additional logic here, such as making an API request.
};
</script>
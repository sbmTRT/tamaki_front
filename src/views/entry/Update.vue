<template>
  <div>
    <h2>Update Page</h2>
    <table id="userDataTable" class="table table-striped table-bordered display">
      <thead>
        <tr>
          <th>User ID</th>
          <th>Role</th>
          <th>User Name</th>
          <th>User Email</th>
          <th>Auth Flag</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userData" :key="user.USERID">
          <td>{{ user.USERID }}</td>
          <td>{{ user.ROLE }}</td>
          <td>{{ user.USER_NAME }}</td>
          <td>{{ user.USER_EMAIL }}</td>
          <td>{{ user.AUTH_FLAG }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const userData = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://bumpy-houses-greet.loca.lt/user_info');
    userData.value = response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
});
</script>

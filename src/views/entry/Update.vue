<template>
  <div>
    <h4>入力編集画面</h4><br>
    <table id="userDataTable" class="table table-striped table-bordered display">
      <thead>
        <tr>
          <th v-for="column in dtColumn" :key="column.data">{{ column.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userData" :key="user.USERID">
          <td v-for="column in dtColumn" :key="column.data">{{ user[column.data] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import 'jquery';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net/js/jquery.dataTables.min.js';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import { dtOption, dtColumn } from './js/dtOption.js';

const userData = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8082/user_info');
    userData.value = response.data;

    $(document).ready(function() {
      $('#userDataTable').DataTable({
        ...dtOption,
        columns: dtColumn,
      });
    });

  } catch (error) {
    console.error('Error fetching user data:', error);
  }
});
</script>

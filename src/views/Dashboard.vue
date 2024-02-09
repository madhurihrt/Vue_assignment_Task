
<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-gradient-to-r from-green-600 to-black text-white p-4">
      <h2 class="text-2xl font-semibold mb-4">Dashboard</h2>
      <ul>
        <li class="mb-2">
          <router-link to="/dashboard" class="block px-2 py-1 hover:bg-green-700 rounded">Home</router-link>
        </li>
        <li class="mb-2">
          <router-link to="/dashboard" class="block px-2 py-1 hover:bg-green-700 rounded">Profile</router-link>
        </li>
        <li class="mb-2">
          <router-link to="/dashboard" class="block px-2 py-1 hover:bg-green-700 rounded">Analytics</router-link>
        </li>
        <!-- Add more navigation items as needed -->
      </ul>
      <button @click="logout" class="flex justify-center items-center bg-green-500 w-24 text-white p-2 rounded">Logout</button>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-4 overflow-hidden">
        <h7 class="font-bold mb-6 text-green-600">Hey! {{ userInfo }} </h7>
      <div class="flex items-center justify-center h-full">
        <div class="w-3/4 mx-auto bg-white rounded shadow-lg p-6">
          
          <h1 class="text-3xl font-bold mb-6 text-green-600"> Welcome to Your Dashboard</h1>
          <!-- Add your main content here -->
        </div>
      </div>
    </main>
  </div>
</template>

  
<script setup>
import { ref } from 'vue';
import { onMounted } from "vue";
import { useSignInStore } from '../stores/login';
const signInStore = useSignInStore();
const userInfo = ref()

const logout = () => {
    signInStore.signOutUser();
};
onMounted(() => {
    userInfo.value = localStorage.getItem('userData')
}
)
</script>
  
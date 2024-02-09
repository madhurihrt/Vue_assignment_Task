<template>
    <div class="h-screen w-screen mx-auto p-4 bg-white rounded shadow-lg">
        <h1 class="text-3xl font-bold mb-6 text-green-600">Welcome to Your Dashboard</h1>
        <button @click="logout" class="flex justify-center items-center bg-green-500  w-24  text-white p-2 rounded">Logout</button>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useSignInStore } from '../stores/signin';
const signInStore = useSignInStore();

const logout = () => {
    signInStore.signOutUser();
};

</script>
  
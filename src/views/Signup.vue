<template>
    <div class="max-w-lg mx-auto p-4 bg-white rounded shadow-lg">
        <h1 class="text-3xl font-bold mb-6 text-green-600">Sign Up</h1>
        <form @submit.prevent="signUp">
            <div class="mb-4">
                <label for="email" class="block text-sm font-semibold">Email:</label>
                <input type="email" id="email" v-model="email" required
                    class="border rounded w-full p-2 focus:outline-none focus:border-green-500">
            </div>
            <div class="mb-4">
                <label for="password" class="block text-sm font-semibold">Password:</label>
                <input type="password" id="password" v-model="password" required
                    class="border rounded w-full p-2 focus:outline-none focus:border-green-500">
            </div>
            <button type="submit" class="bg-green-500 text-white p-2 rounded w-full">Sign Up</button>
        </form>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useSignUpStore } from '../stores/signup';
const email = ref('');
const password = ref('');
const signUpStore = useSignUpStore();

const signUp = async () => {
 await signUpStore.signUp({ email: email.value, password: password.value });

};

</script>

  
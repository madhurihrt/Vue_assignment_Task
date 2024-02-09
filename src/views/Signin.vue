<template>
    <div class="max-w-lg mx-auto p-4 bg-white rounded shadow-lg">
        <h1 class="text-3xl font-bold mb-6 text-green-600">Login</h1>
        <form @submit.prevent="signIn">
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
            <button type="submit" class="bg-green-500 text-white p-2 rounded w-full">Sign In</button>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useSignInStore } from '../stores/signin';
const email = ref('');
const password = ref('');
const signInStore = useSignInStore();

const signIn = async () => {
await signInStore.signIn({ email: email.value, password: password.value });
};
</script>

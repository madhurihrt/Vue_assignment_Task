<template>
    <div class="flex h-screen bg-gradient-to-r from-green-600 to-black">

        <div class="flex-1 p-8 text-white">
            <h1 class="text-4xl font-extrabold mb-4">Fuel buddy</h1>
            <p class="text-lg mb-6">Doorstep
                Fuel Delivery Service
                24/7
                India's Largest Doorstep Diesel Delivery Service</p>
        </div>
        <div class="flex-1 p-8">
            <div class="w-96 bg-white p-6 mt-8 rounded-md shadow-md">
                <h2 class="text-2xl font-extrabold mb-4 text-gray-800">Login to Your Account</h2>
                <form @submit.prevent="signIn" class="space-y-4">
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" v-model="email" class="mt-1 p-2 w-full border rounded-md">
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
                        <input type="password" id="password" v-model="password" class="mt-1 p-2 w-full border rounded-md">
                    </div>
                    <button type="submit"
                        class="bg-green-500 hover:bg-black-600 text-white py-2 px-4 rounded-md w-full">Login</button>
                </form>

                <p class="mt-4 text-gray-600">Don't have an account? <router-link to="/signup"
                        class="text-green-500 hover:underline">Sign up</router-link>.</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useSignInStore } from '../stores/login';
const email = ref('');
const password = ref('');
const signInStore = useSignInStore();

const signIn = async () => {
    await signInStore.signIn({ email: email.value, password: password.value });
};
</script>

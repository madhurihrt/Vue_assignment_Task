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
        <div class="bg-white p-6 mt-8 rounded-md shadow-md w-96">
            <h1 class="text-2xl font-extrabold mb-6 text-gray-800">Create Your Account</h1>
            <form @submit.prevent="signUp" class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" id="email" v-model="email" class="mt-1 p-2 w-full border rounded-md" required>
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
                    <input type="password" id="password" v-model="password" class="mt-1 p-2 w-full border rounded-md"
                        required>
                </div>
                <button type="submit" class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md  w-full">Sign
                    Up</button>
            </form>
        </div>
        </div>
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

  
<template>
  <div class="bg-white-100 h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4 text-green-600">Welcome to Our Website</h1>
      <p class="text-lg text-gray-700 mb-6">Discover amazing features and services.</p>
      <div class="flex items-center justify-evenly ">
      <router-link to="/signup" class="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
        Sign Up 
      </router-link>
      OR
      <router-link to="/signin" class="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
        LogIn 
      </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { RouterLink,useRouter } from 'vue-router';



const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);


const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<template>




<container>

  <div>
    <header class="relative w-full bg-white shadow-md">
      <nav class="container mx-auto flex items-center justify-between px-6 py-4">
        <!-- Logo and Text Container -->
        <div class="flex items-center">
          <!-- Logo -->
          <img src="../assets/images/logo.webp" alt="logo" class="h-14 mr-4"> <
          <!-- Name -->
          <h1 class="text-2xl font-bold"><samp class="text-4xl">DR.</samp><span class="text-blue-600">MD YOUNUS ALI</span> Dermatology</h1>
        </div>

        <!-- Toggle Button for Mobile View -->
        <button @click="toggleMenu" class="md:hidden">
          <span class="sr-only">Toggle Menu</span>
          <svg v-if="!isMenuOpen" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Menu -->
        <ul :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="md:flex md:space-x-8 md:items-center hidden">
          <li><RouterLink to="/" class="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md">Home</RouterLink></li>

          <!-- Dropdown using Tailwind CSS -->
          <li class="relative" @click="toggleDropdown">
            <button class="py-2 px-4 text-gray-700 flex items-center hover:bg-gray-200 rounded-md">
              Services
              <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown Content -->
            <ul v-show="isDropdownOpen" class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
              <li><RouterLink to="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Clinical Dermatology</RouterLink></li>
              <li><RouterLink to="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 ">Aesthetic Dermatology</RouterLink></li>
              <li><RouterLink to="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Dermatologic Surgery</RouterLink></li>
              <li><RouterLink to="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Cosmetic Dermatology</RouterLink></li>
            </ul>
          </li>
          
          <li><RouterLink to="/" class="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md">Shop</RouterLink></li>
          <li><RouterLink to="/about" class="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md">Biography</RouterLink></li>
          <li><RouterLink to="/contact" class="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md">Contact</RouterLink></li>
        </ul>
      </nav>
    </header>
  </div>




</container>
</template>

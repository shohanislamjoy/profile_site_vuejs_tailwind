<script setup>
import { ref } from 'vue';
import Clinical from '../assets/images/Clinical.webp';
import Aesthetic from '@/assets/images/Aesthetic.webp';
import Surgery from '@/assets/images/Surgery.webp';
import Cosmetic from '@/assets/images/Cosmetic.webp';

const services = ref([
  { title: 'Clinical Dermatology', description: 'Comprehensive care for skin diseases, offering effective treatments for various skin conditions.', image: Clinical },
  { title: 'Aesthetic Dermatology', description: 'Enhance your natural beauty with advanced treatments tailored to your skin\'s needs.', image: Aesthetic },
  { title: 'Dermatologic Surgery', description: 'Expert surgical procedures to address skin cancer, growths, and other medical concerns.', image: Surgery },
  { title: 'Cosmetic Dermatology', description: 'Innovative treatments to improve skin texture, reduce wrinkles, and restore youthful appearance.', image: Cosmetic },
]);
</script>


<template>
  <!-- Responsive Services Section -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-6 lg:m-24 text-center">
    <!-- Service Cards -->
    <div v-for="(service, index) in services" :key="index" class="relative transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div class="relative bg-cover bg-center h-64 md:h-80 rounded-lg border border-gray-300 p-6 md:p-8 shadow-lg hover:shadow-2xl" 
           :style="{ backgroundImage: `url(${service.image})` }">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <!-- Text Content -->
        <div class="relative z-10">
          <h4 class="text-lg sm:text-xl font-semibold mt-6 text-white">{{ service.title }}</h4>
          <p class="mt-2 sm:mt-3 text-sm sm:text-base text-white font-medium opacity-80">{{ service.description }}</p>
          <button class="inline-flex items-center px-4 py-2 mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

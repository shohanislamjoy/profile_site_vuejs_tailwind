
<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
/* Custom animations */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1s ease-in-out;
}
</style>





<template>
    <div class="bg-gray-100 text-gray-800">
      <!-- Header -->
      <header class="bg-teal-600 text-white text-center py-8">
        <h1 class="text-4xl font-bold uppercase">Dr. Md Younus Ali</h1>
        <p class="text-lg italic mt-2">Clinical and Aesthetic Dermatologist</p>
      </header>
  
      <!-- Biography Section -->
      <section class="max-w-4xl mx-auto py-10 px-6 space-y-6">
        <div class="flex flex-col md:flex-row items-center">
          <img
            src="../assets/images/img2.webp"
            alt="Dr. Md Younus Ali"
            class="rounded-lg shadow-lg w-64 h-64 md:mr-6 transform hover:scale-105 transition duration-300"
          />
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-teal-600">Biography</h2>
            <p class="leading-relaxed">
              I am Dr. Md Younus Ali, a dermatologist with over 15 years of experience in clinical and aesthetic dermatology. My mission is to provide top-notch skincare solutions tailored to individual needs.
            </p>
          </div>
        </div>
      </section>
  
      <!-- Education and Training Section -->
      <section class="bg-white py-10 shadow-lg">
        <div class="max-w-4xl mx-auto px-6">
          <h2 class="text-2xl font-semibold text-teal-600 mb-6">Education & Training</h2>
          <ul class="space-y-4 list-disc list-inside">
            <li><strong>MBBS:</strong> Dhaka University, Institute: SSMC</li>
            <li><strong>Diploma:</strong> Dermatology & Venereology, BSM Medical University</li>
            <li><strong>Fellowship:</strong> Aesthetic Dermatology</li>
            <li>Advanced Training in Cosmetology</li>
            <li>Advanced Training in Hair Transplant</li>
          </ul>
        </div>
      </section>
  
      <!-- Research Publications -->
      <section class="bg-gray-50 py-10">
        <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 class="text-2xl font-semibold text-teal-600">Research Publications</h2>
          <p>We have numerous research papers published in reputed journals. You can explore them below:</p>
          <div class="space-x-4">
            <button
              class="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300"
            >
              View Publications
            </button>
          </div>
        </div>
      </section>
  
      <!-- Awards Section -->
      <section class="bg-white py-10">
        <div class="max-w-4xl mx-auto px-6">
          <h2 class="text-2xl font-semibold text-teal-600 mb-6">Awards</h2>
          <ul class="space-y-4 list-disc list-inside">
            <li>Top Dermatologist by Dermatology Excellence Association</li>
            <li>Outstanding Contribution to Aesthetic Dermatology Research</li>
          </ul>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-teal-600 text-white text-center py-4">
        <p>© 2024 Dr. Md Younus Ali. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
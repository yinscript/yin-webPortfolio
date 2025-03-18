<script setup>
import About from './pages/About.vue'
import Terminal from './pages/Terminal.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div class="p-10 px-20">
      <nav class="flex flex-col justify-start items-start space-y-2">
        <div class="flex items-center space-x-2">
          <img src="/public/icon.svg" class="h-8" alt="Flowbite Logo" />
          <h1 class="text-2xl text-gray-100">yin.dev</h1>
        </div>
        <ul class="flex flex-col space-y-2 text-gray-100 mt-3">
          <!-- Home Link -->
          <li class="group relative w-max">
            <router-link to="/"><i class="fa-solid fa-folder-open me-1 text-amber-500"></i>
              <span class="text-amber-500">/</span> Home
            </router-link>
            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-amber-500 group-hover:w-full"></span>
          </li>
          <!-- OutsideTech Link -->
          <li class="group relative w-max">
            <router-link to="/about"><i class="fa-solid fa-folder-open me-1 text-amber-500"></i>
              <span class="text-amber-500">/</span> About
            </router-link>
            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-amber-500 group-hover:w-full"></span>
          </li>

        </ul>
      </nav>
    </div>

    <router-view></router-view> <!-- This will display the page content -->

    <footer>
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/public/icon.svg" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl whitespace-nowrap text-gray-300">yin.dev</span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0">
            <li>
              <a href="/about" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="/about#outsideTech" class="me-4 hover:underline">Outside Tech</a>
            </li>
            <li>
              <a href="/terminal" class="me-4 hover:underline">Terminal Portfolio</a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-500 sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-300 sm:text-center"> Developed by Jenny Marinay in Visual Studio Code, built with Vue + Vite + TailwindCSS. &copy; 2025.
          All Rights Reserved.</span>
      </div>
    </footer>
  </div>
</template>


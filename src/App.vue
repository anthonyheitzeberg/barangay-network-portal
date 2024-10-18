<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/shared/Navbar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Navbar />
    </div>
  </header>

  <div class="flex flex-row justify-center">
    <!-- Full height for the layout -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
.wrapper {
  /* Optional: Style your navbar wrapper if needed */
}

.flex {
  display: flex; /* Use flexbox for layout */
}

.flex-row {
  flex-direction: row; /* Ensure children are in a row */
}

.h-screen {
  height: 100vh; /* Set height to full viewport */
}

main {
  /* Prevent overflow of main content */
  overflow: hidden; /* Prevent scrolling */
  display: flex; /* Use flexbox for content alignment */
  flex-direction: column; /* Allow vertical stacking of RouterView content */
  height: 100%; /* Full height of the parent */
}

.main-content {
  padding: 20px; /* Padding for main content */
  width: calc(100% - 250px); /* Adjust width based on sidebar width */
}
</style>

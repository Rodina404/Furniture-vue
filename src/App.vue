<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import './assets/main.css'
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>

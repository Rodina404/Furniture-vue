<template>
  <div>
    <Header title="Cart" breadcrumb="Cart"/>
    <CartItems />
    <Features />
  </div>
</template>

<script setup>
import Features from '../components/layout/Features.vue'
import Header from '../components/layout/Header.vue'
import CartItems from '../components/layout/CartItem.vue'
</script>

<style scoped>
</style>

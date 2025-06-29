<template>
  <Header title="Checkout" breadcrumb="Checkout" />
  <BillingDetails :cartItems="cart" />
  <Features />
</template>
<script setup>
import Header from "../components/layout/Header.vue";
import BillingDetails from "../components/layout/BillingDetails.vue";
import Features from "../components/layout/Features.vue";
import { useCartStore } from '@/stores/useCartStore'
const { cart } = useCartStore()

</script>

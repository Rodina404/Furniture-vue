<script setup>
import Header from '../components/layout/Header.vue'
import Bar from '../components/layout/Bar.vue'
import OurProduct from '../components/home/OurProducts.vue'
import Features from '../components/layout/Features.vue'
import { ref, watch } from 'vue'
import axios from 'axios'

const sortBy = ref('default')
const itemsPerPage = ref(16)
const products = ref([])

const fetchProducts = async () => {
  try {
    const res = await axios.get('https://furniture-api.fly.dev/v1/products', {
      params: {
        limit: itemsPerPage.value,
        sort: sortBy.value,
      },
    })
    console.log(res.data)
    products.value = res.data.data
  } catch (error) {
    console.error('Axios error:', error)
  }
}

watch([sortBy, itemsPerPage], fetchProducts, { immediate: true })
</script>

<template>
  <Header title="Shop" breadcrumb="Shop"/>
  <Bar v-model:sortBy="sortBy" v-model:itemsPerPage="itemsPerPage" />
  <OurProduct :products="products" />
  <Features />
</template>

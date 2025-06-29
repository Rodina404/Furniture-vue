<template>
  <Br />
  <ProductDetails />
  <Description />
  <OurProducts :products="products" :loadMore="loadMore" title="Related Products" />
</template>
<script setup>
import Br from '@/components/single/Br.vue';
import ProductDetails from '@/components/single/ProductDetails.vue';
import Description from '@/components/single/Description.vue';
import OurProducts from '@/components/home/OurProducts.vue';

import { ref, onMounted } from 'vue'

const products = ref([])
let offset = 0
const limit = 10

const fetchProducts = async () => {
  try {
    const res = await fetch(`https://furniture-api.fly.dev/v1/products?limit=${limit}&offset=${offset}`)
    const data = await res.json()
    if (data.success) {
      const enriched = data.data.map(p => ({
        ...p,
        original_price: p.discount_price ? p.price : null,
        discount: p.discount_price
          ? Math.round(((p.discount_price - p.price) / p.discount_price) * 100)
          : null
      }))
      products.value.push(...enriched)
    }
  } catch (err) {
    console.error(err)
  }
}

const loadMore = () => {
  offset += limit
  fetchProducts()
}

onMounted(fetchProducts)
</script>


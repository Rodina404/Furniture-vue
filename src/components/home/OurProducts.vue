<!-- <script setup>
// this for our products setup
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
        discount: p.discount_price ? Math.round(((p.discount_price - p.price) / p.discount_price) * 100) : null
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
</script> -->
<script setup>

import { useCartStore } from '@/stores/useCartStore'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

const props = defineProps({
  products: {
    type: Array,
    default: () => [],
  },
    title: {
    type: String,
    required: true,
    default: ' ' // Default value if no title is provided
    }
});

const handleAddToCart = (product) => {
  cartStore.addToCart(product)
}
const goToProduct = (id) => {
  router.push(`/product/${id}`) // Programmatic fallback if needed
}
</script>

<template>
  <div class="product-grid">
    <h2>{{ title }}</h2>
    <div class="grid">
      <div
        v-for="product in products"
        :key="product.sku"
        class="product-card"
      >
        <div class="image-wrapper">
          <img :src="product.image_path" :alt="product.name" />
          <div v-if="product.discount" class="discount-badge">
            {{ product.discount }}%
          </div>
          <div class="overlay">
            <button class="add-to-cart" @click="handleAddToCart(product)">Add to cart</button>
            <div class="icons">
              <span> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                </svg>
                <RouterLink :to="`/single`" class="view-details-btn">View Details</RouterLink>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
                </svg>
                 Compare
                </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
                 Like
                </span>
            </div>
          </div>
        </div>
        <h3>{{ product.name }}</h3>
        <p class="desc">{{ product.category || 'Stylish cafe chair' }}</p>
        <p class="price">
          Rp {{ product.price.toLocaleString('id-ID') }}
          <span v-if="product.original_price" class="original">
            Rp {{ product.original_price.toLocaleString('id-ID') }}
          </span>
        </p>
      </div>
    </div>
    <button v-if="loadMore" @click="loadMore">Show More</button>
  </div>
</template>
<style scoped>
.product-grid {
  max-width: 2200px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  padding: 4.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}

.product-card {
  background-color: #F4F5F7;
  position: relative;
  overflow: hidden;
  padding: 1rem;
  transition: transform 0.3s ease;
}

.image-wrapper {
  position: relative;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 35vh;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover img {
  transform: scale(1.05);
}

.discount-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #E97171;
  color: white;
  padding: 4px 8px;
  border-radius: 50%;
  font-size: 0.9rem;
  font-weight: bold;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0,0,0,0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-card:hover .overlay {
  opacity: 1;
}

.add-to-cart {
  background-color: white;
  color: #B88E2F;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  margin-bottom: 1.5rem;
  cursor: pointer;
  width:10.5rem;
  height: 3rem;
}

.icons {
  color: white;
  font-size: 0.9rem;
  display: flex;
  gap: 1.5rem;
}

h2 {
  text-align: center;
  margin-bottom: 10px;
  font-size: 2rem;
  color: #333;
  font-weight: bold;
}

h3 {
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0 0;
}

.desc {
  font-size: 0.9rem;
  color: #777;
  margin: 4px 0;
}

.price {
  color: #000;
  font-weight: bold;
}

.original {
  text-decoration: line-through;
  color: gray;
  font-size: 0.9rem;
  margin-left: 10px;
}

button {
  margin: 20px auto;
  display: block;
  padding: 10px 20px;
  border: 2px solid #B88E2F;
  color: #B88E2F;
  width: 15%;
  background: transparent;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

button:hover {
  background: #B88E2F;
  color: white;
}
.view-details-btn {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  padding: 0rem 1rem;
}
</style>

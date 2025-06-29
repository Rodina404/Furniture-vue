<template>
  <div class="product-list">
    <h2>Our Products</h2>
    <div class="products">
      <div v-for="product in products" :key="product.sku" class="product-card">
        <div class="img-wrapper">
          <img :src="product.image_path" :alt="product.name" />
          <div v-if="product.discount_price" class="badge discount">-
            {{ getDiscountPercent(product.price, product.discount_price) }}%
          </div>
          <div v-if="product.is_new" class="badge new">New</div>
        </div>
        <h3>{{ product.name }}</h3>
        <p class="category">{{ product.category }}</p>
        <div class="price">
          <span v-if="product.discount_price" class="new-price">EGP {{ product.discount_price.toFixed(2) }}</span>
          <span :class="{ 'old-price': product.discount_price }">EGP {{ product.price.toFixed(2) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const products = ref([]);

const getDiscountPercent = (original, discount) => {
  return Math.round(((original - discount) / original) * 100);
};

onMounted(async () => {
  try {
    const response = await fetch('https://furniture-api.fly.dev/v1/products?limit=8');
    const data = await response.json();
    if (data.success) {
      products.value = data.data;
    } else {
      console.error('Failed to fetch products:', data.message);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});
</script>

<style scoped>
.product-list {
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  width: 100%;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.product-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  padding: 1rem;
  position: relative;
  height: 50vh;
  transition: box-shadow 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.img-wrapper {
  position: relative;
  width: 100%;
  padding-top: 75%;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.img-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  font-size: 0.75rem;
  color: #fff;
  border-radius: 4px;
}

.badge.discount {
  background-color: #ff4d4f;
}

.badge.new {
  background-color: #52c41a;
  top: 40px;
}

.category {
  color: #888;
  font-size: 0.9rem;
}

.price {
  margin-top: 0.5rem;
  font-size: 1rem;
}

.old-price {
  text-decoration: line-through;
  color: #999;
  margin-left: 10px;
}

.new-price {
  color: #ff4d4f;
  font-weight: bold;
}
</style>

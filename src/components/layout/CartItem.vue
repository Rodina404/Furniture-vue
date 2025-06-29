<script setup>
import { useCartStore } from '@/stores/useCartStore'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const { cart, removeFromCart } = useCartStore()

const subtotal = computed(() =>
  cart.reduce((total, item) => total + item.price * item.quantity, 0)
)
</script>


<template>
  <div class="cart-container">
    <!-- Cart Table -->
    <div class="cart-table">
      <div class="cart-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      <div class="cart-item" v-for="item in cart" :key="item.sku">
        <!-- Product -->
        <div class="product-cell">
          <div class="product-card">
            <img :src="item.image_path" alt="product" />
          </div>
          <div class="product-name">
            {{ item.name }}
          </div>
        </div>

        <!-- Price -->
        <div class="price-cell">
          Rs. {{ item.price.toLocaleString('en-IN') }}
        </div>

        <!-- Quantity -->
        <div class="qty-cell">
          <input
            type="number"
            min="1"
            v-model.number="item.quantity"
          />
        </div>

        <!-- Subtotal -->
        <div class="subtotal-cell">
          Rs. {{ (item.quantity * item.price).toLocaleString('en-IN') }}
        </div>

        <!-- Remove -->
        <div class="delete-cell" @click="removeFromCart(item.sku)">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z" fill="#B88E2F"/>
</svg>

        </div>
      </div>
    </div>

    <!-- Cart Summary -->
    <div class="cart-summary">
      <h2>Cart Totals</h2>
      <div class="summary-line">
        <span>Subtotal</span>
        <span>Rs. {{ subtotal.toLocaleString('en-IN') }}</span>
      </div>
      <div class="summary-line total">
        <span>Total</span>
        <span class="highlight">Rs. {{ subtotal.toLocaleString('en-IN') }}</span>
      </div>
      <RouterLink to="/checkout">
        <button class="checkout">Check Out</button>
      </RouterLink>
    </div>
  </div>
</template>


<style scoped>
.cart-container {
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  gap: 3rem;
  font-family: 'Poppins', sans-serif;
}

/* === Cart Table === */
.cart-table {
  flex: 2;
  width: 100%;
}

.cart-header {
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 1fr;
  background-color: #fdf6ee;
  padding: 1rem;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
}

.cart-item {
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 1fr auto;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

.product-cell {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.product-card {
  background-color: #f4f1ec;
  padding: 10px;
  border-radius: 5px;
}

.product-card img {
  width: 100px;
  height: auto;
  object-fit: cover;
}

.product-name {
  color: #888;
  font-size: 1rem;
}

.price-cell,
.qty-cell,
.subtotal-cell {
  font-size: 1rem;
  color: #333;
}

.qty-cell input {
  width: 50px;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.delete-cell {
  cursor: pointer;
  color: #b88e2f;
  font-size: 1.2rem;
  padding: 0 10px;
  transition: 0.3s ease;
}
.delete-cell:hover {
      transform: translateY(-2px);
}

/* === Cart Summary === */
.cart-summary {
  flex: 1;
  background-color: #fdf6ee;
  padding: 4rem;
  border-radius: 10px;
  max-width: 400px;
  height: fit-content;
  margin-top: 4.5rem;
}

.cart-summary h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.summary-line.total {
  font-weight: bold;
}

.highlight {
  color: #b88e2f;
  font-weight: bold;
}

.checkout {
  width: 60%;
  padding: 12px;
  font-weight: bold;
  border: 2px solid #000;
  border-radius: 10px;
  background-color: transparent;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: 0.3s ease;
  margin-left: 3.8rem;
}

.checkout:hover {
  background-color: #b88e2f;
  color: white;
  border-color: #b88e2f;
}
@media (max-width: 768px) {
  .cart-container {
    flex-direction: column;
    padding: 1.5rem;
  }

  .cart-header {
    display: none; /* Hide table header on mobile */
  }

  .cart-item {
    grid-template-columns: 1fr;
    gap: 1rem;
    border: 1px solid #eee;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  .product-cell {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-card img {
    width: 100%;
    height: auto;
  }

  .price-cell,
  .qty-cell,
  .subtotal-cell,
  .delete-cell {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 0.95rem;
    margin-top: 6px;
  }

  .qty-cell input {
    width: 50px;
   font-size: 1rem;
  }

  .cart-summary {
    width: 60%;
    margin-top: 2rem;
    padding: 1.5rem;
  }

  .checkout {
    font-size: 1rem;
    padding: 10px;
  }
}
</style>

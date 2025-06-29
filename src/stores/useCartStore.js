import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])

  const addToCart = (product) => {
    const existing = cart.value.find(item => item.sku === product.sku)
    if (existing) {
      existing.quantity += 1
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
    alert('Item added to cart!')
  }

  const removeFromCart = (sku) => {
    cart.value = cart.value.filter(item => item.sku !== sku)
      alert('Item removed!')

  }

  return { cart, addToCart, removeFromCart }
})

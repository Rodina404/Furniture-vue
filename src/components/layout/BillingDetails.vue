<template>
  <div class="billing-container">
    <div class="billing-details">
      <h1>Billing details</h1>
      <div class="form-row">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model="form.firstName"  />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" v-model="form.lastName" />
        </div>
      </div>
      <div class="form-group">
        <label for="companyName">Company Name (Optional)</label>
        <input type="text" id="companyName" v-model="form.companyName" />
      </div>
      <div class="form-group">
        <label for="country">Country / Region</label>
        <select id="country" v-model="form.country">
          <option value="Sri Lanka">Sri Lanka</option>
          <!-- Add more countries as needed -->
        </select>
      </div>
      <div class="form-group">
        <label for="streetAddress">Street address</label>
        <input type="text" id="streetAddress" v-model="form.streetAddress"  />
      </div>
      <div class="form-group">
        <label for="townCity">Town / City</label>
        <input type="text" id="townCity" v-model="form.townCity" />
      </div>
      <div class="form-group">
        <label for="province">Province</label>
        <select id="province" v-model="form.province">
          <option value="Western Province">Western Province</option>
          <!-- Add more provinces as needed -->
        </select>
      </div>
      <div class="form-group">
        <label for="zipCode">ZIP Code</label>
        <input type="text" id="zipCode" v-model="form.zipCode"  />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="tel" id="phone" v-model="form.phone"  />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" id="email" v-model="form.email"  />
      </div>
      <div class="form-group">
        <textarea id="additionalInfo" v-model="form.additionalInfo"  placeholder="Additional Information"></textarea>
      </div>
    </div>
    <div class="order-summary">
      <h2>Product</h2>
      <div class="summary-item" v-for="item in cartItems" :key="item.sku">
  <span>{{ item.name }} × {{ item.quantity }}</span>
  <span>Rp {{ (item.price * item.quantity).toLocaleString('id-ID') }}</span>
</div>

<div class="summary-total">
  <span>Subtotal</span>
  <span>Rp {{ cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0).toLocaleString('id-ID') }}</span>
</div>

<div class="summary-total total">
  <span>Total</span>
  <span>Rp {{ cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0).toLocaleString('id-ID') }}</span>
</div>

      <div class="payment-options">
        <label>
          <input type="radio" v-model="paymentMethod" value="bankTransfer" /> Direct Bank Transfer
        </label>
        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
        <label>
          <input type="radio" v-model="paymentMethod" value="cashOnDelivery" /> Cash on Delivery
        </label>
        <p>Your personal data will be used to manage access to your account, and for other purposes described in our privacy policy.</p>
      </div>
      <button @click="placeOrder" class="place-order-btn">Place Order</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  cartItems: {
    type: Array,
    default: () => []
  }
})

const form = ref({
  firstName: '',
  lastName: '',
  companyName: '',
  country: 'Sri Lanka',
  streetAddress: '',
  townCity: '',
  province: 'Western Province',
  zipCode: '',
  phone: '',
  email: '',
  additionalInfo: ''
})

const paymentMethod = ref('bankTransfer')

const placeOrder = () => {
  console.log('Order placed:', {
    form: form.value,
    paymentMethod: paymentMethod.value,
    items: props.cartItems
  })
}
</script>


<style scoped>

.billing-container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
    gap: 6rem;
}

.billing-details{
  width: 52%;
  padding: 2rem;
  border-radius: 10px;
}
.order-summary {
    margin-top: 5.5rem;
  width: 48%;
}
.billing-details {
    margin-top: 4.5rem;
    margin-right: 4rem;
  padding: 1rem;
  border-radius: 10px;
}
.billing-details h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 900;
}
.order-summary h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 900;
  font-family: 'Poppins', sans-serif;
}
.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.2rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 80%;
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-size: 1rem;
  height: 3.5rem;
  font-family: 'Poppins', sans-serif;
  color: rgba(0, 0, 0, 0.4);
}

.form-group textarea {
  height: 100px;
  resize: vertical;
}

.order-summary .summary-item,
.order-summary .summary-total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
}

.order-summary .summary-total {
  font-weight: bold;
  margin-top: 1rem;
}

.order-summary .total {
  color: #f4a261; /* Gold color for total */
  font-size: 1.2rem;
  margin-top: 1rem;
}

.payment-options label {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
    color: rgba(0, 0, 0, 0.4);

}

.payment-options input[type="radio"] {
  margin-right: 0.5rem;
  accent-color: rgba(0, 0, 0, 0.4); 
  
}

.payment-options p {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 0.2rem;
    margin-bottom: 1.5rem;
}

.place-order-btn {
  width: 40%;
  padding: 0.75rem;
  background-color: #fff;
  color: #000;
  border: 3px solid #000;
  border-radius: 1rem;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  margin-top: 1.5rem;
  margin-left: 6.8rem;
    transition:  0.3s ease;
}

.place-order-btn:hover {
  background-color: rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);

}
</style>
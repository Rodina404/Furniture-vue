<script setup>
import { RouterLink } from "vue-router";
import { ref } from 'vue'
const email = ref('')

const submitEmail = () => {
  alert(`Subscribed with ${email.value}`)
  email.value = ''
}
</script>
<template>
  <footer class="footer">
    <div class="upper-part">
      <div class="furniro">
        <h1>Furniro.</h1>
        <p>400 University Drive Suite 200 Coral</p>
        <p>Gables,</p>
        <p>FL 33134 USA</p>
      </div>

      <div class="links">
        <p>Links</p>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/shop">Shop</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>

      <div class="help">
        <p>Help</p>
        <RouterLink to="/paymentOptions">Payment Options</RouterLink>
        <RouterLink to="/returns">Returns</RouterLink>
        <RouterLink to="/privacy">Privacy Policy</RouterLink>
      </div>

      <div class="newsletter">
        <p>Newsletter</p>
  <form class="subscribe-form" @submit.prevent="submitEmail">
    <input
      type="email"
      placeholder="Enter Your Email Address"
      class="email-input"
      v-model="email"
      required
    />
    <button type="submit" class="subscribe-btn">
      SUBSCRIBE
    </button>
  </form>
      </div>
    </div>
    <hr />

    <div class="lower-part">
      <p>2023 furniro. All rights reserved.</p>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  background-color: #fff;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
}
.footer p {
  font-family: 'Poppins', sans-serif;
  
  color: #9F9F9F;
  font-size: 14px;
}
.furniro {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.furniro h1{
    margin-bottom: 40px;
}
.upper-part {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.links,
.help,
.newsletter {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 45px;
}

.links p,
.help p,
.newsletter p {
  font-weight: lighter;
  font-size: 1rem;
}
.links a,
.help a,
.newsletter a {
  text-decoration: none;
  color: #000;
  margin: 5px 0;
  font-weight: 600;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #8f9397;
  }
}

.subscribe-form {
  display: flex;
  align-items: center;
  gap: 20px;
}

.email-input {
  border: none;
  border-bottom: 2px solid #333;
  padding: 8px 0;
  font-size: 16px;
  outline: none;
  flex: 1;
  font-family: 'Poppins', sans-serif;
  color: #333;
  transition: 0.3s ease-in-out;
  &:hover {
    transform:translateY(-2px);
  }
}

.email-input::placeholder {
  color: #aaa;
}

.subscribe-btn {
  border: none;
  background: transparent;
  font-weight: bold;
  border-bottom: 2px solid #333;
  padding: 8px;
  padding-bottom: 10px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  margin-top: 9px;
  font-size: 14px;
   transition: 0.3s ease-in-out;
  &:hover {
    transform:translateY(-2px);
    color: #8f9397;
  }
}

.lower-part {
  margin-top: 40px;
}
.lower-part p{
  font-weight: normal;
  color: #000;
  font-size: 16px;
}
</style>

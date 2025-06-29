<script setup>
import { ref } from 'vue';

</script>
<template>
<div class="hero">
    
    <div class="hero-content">

    <p class="new">N e w   &nbsp; A r r i v a l </p>
    <h1>Discover Our</h1 >
    <h1>New Collection</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut </p>
    <p>elit tellus, luctus nec ullamcorper mattis.</p>
    <button class="cta-button">BUY NOW</button>

    </div>
</div>
</template>

<style scoped>
.hero {
  width: 100%;
  min-height: 90vh;
  background-image: url('@/assets/images/home/banner/hero.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem;
}

.hero-content {
  background-color: #FFF3E3;
  color: #333;
  width: 45%;
  max-width: 600px;
  padding: 3rem;
  border-radius: 5px;
}

.hero-content .new {
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.hero-content h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 3.5rem;
  color: #a17e2b;
  font-weight: bold;
  margin: 0.5rem 0;
}

.hero-content p {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.cta-button {
  margin-top: 2rem;
  padding: 1rem 2.5rem;
  background-color: #B88E2F;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  font-weight: bold;
}

.cta-button:hover {
  background-color: #A77B2D;
}

/* Media Query for Tablets */
@media (max-width: 1024px) {
  .hero {
    justify-content: center;
  }

  .hero-content {
    width: 80%;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }
}

/* Media Query for Mobile */
@media (max-width: 600px) {
  .hero-content {
    width: 100%;
    padding: 1.5rem;
    text-align: center;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content .new {
    font-size: 1.2rem;
  }

  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 0.9rem;
  }
}
</style>
<script setup>
</script>
<template>
    <div class="container">
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div class="range">
            <div class="range-item1">
                <img src="@/assets/images/home/range/dining.png" alt="Sofa">
                <h2>Dining</h2>
            </div>
            <div class="range-item2">
                <img src="@/assets/images/home/range/living.png" alt="Sofa">
                <h2>Living</h2>
            </div>
            <div class="range-item3">
                <img src="@/assets/images/home/range/bedroom.png" alt="Sofa">
                <h2>Bedroom</h2>
            </div>
        </div>
    </div>

</template>
<style scoped>
.container {
  text-align: center;
  padding: 50px 20px;
  font-family: "Poppins", sans-serif;
}

.container h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #333;
}

.container p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
}

.range {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* General item style */
.range-item1,
.range-item2,
.range-item3 {
  width: 32%;
  min-width: 280px;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
  height: auto;
  position: relative;
}

.range-item1 img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  object-position: -5px -10px;
  border-radius: 10px;
}

.range-item2 img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  object-position: -5px -10px;
  border-radius: 10px;
}

.range-item3 img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  border-radius: 10px;
}

.range-item1 h2,
.range-item2 h2,
.range-item3 h2 {
  font-size: 1.5rem;
  margin: 10px 0;
  font-family: "Poppins", sans-serif;
}

/* ==================== RESPONSIVE ==================== */

@media (max-width: 1024px) {
  .range-item1,
  .range-item2,
  .range-item3 {
    width: 45%;
  }

  .range-item1 img,
  .range-item2 img,
  .range-item3 img {
    height: 40vh;
  }
}

@media (max-width: 768px) {
  .range {
    flex-direction: column;
    align-items: center;
  }

  .range-item1,
  .range-item2,
  .range-item3 {
    width: 90%;
  }

  .range-item1 img,
  .range-item2 img,
  .range-item3 img {
    height: 35vh;
  }

  .container h1 {
    font-size: 2rem;
  }

  .container p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .range-item1 img,
  .range-item2 img,
  .range-item3 img {
    height: 30vh;
  }

  .range-item1 h2,
  .range-item2 h2,
  .range-item3 h2 {
    font-size: 1.2rem;
  }

  .container h1 {
    font-size: 1.6rem;
  }

  .container p {
    font-size: 0.95rem;
  }
}
</style>

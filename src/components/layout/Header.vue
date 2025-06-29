<template>
  <header>
    <div class="container">
      <h1>{{ title }}</h1>
      <p>Home > <span>{{ breadcrumb }}</span></p>
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: 'Page Title' // Default value if no title is provided
  },
  breadcrumb: {
    type: String,
    required: true,
    default: 'Current Page' // Default breadcrumb if none provided
  }
})
</script>

<style scoped>
header {
  background-image: url('@/assets/images/head.jpg');
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 45vh;
  background-size: cover;
  background-position: 50% 50%;
   opacity: 0.4 ;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  position: relative; /* Required for pseudo-element positioning */
}

header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/head.jpg');
  background-size: cover;
  background-position: 50% 50%;
  opacity: 0.4; /* Applies opacity to the background image only */
  z-index: -1; /* Places it behind the content */
}

.container p {
  text-align: center;
  font-weight: 700;
}

.container span {
  font-weight: 400;
}
</style>
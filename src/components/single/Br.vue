<template>
    <div class="container">
        <div class="last">
        <p class="hs">Home</p>
        <p>></p>
        <p class="hs">Shop</p>
        <p>></p>
        <p>|</p>
        <p>Asgaard sofa</p>
        </div>

    </div>
</template>
<script setup>
// your code
</script>
<style scoped>
.container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-family: "Poppins", sans-serif;
    font-size: 0.5rem;
    color: rgba(0, 0, 0, 0.8);
    background-color: rgba(249, 241, 231, 1);
    height: 6rem;

}
.last {
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-left: 14rem;
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.8);
}
.hs {
    font-weight: 600;
    color: #00000068;
}
.container p {
    margin-left: .5rem;
}
</style>
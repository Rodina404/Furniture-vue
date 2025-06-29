<template>
    <div class="container">
            <div class="bar">
        <h3>Description</h3>
        <h3 class="np">Additional Information</h3>
        <h3 class="np">Reviews [5]</h3>
    </div>
    <div class="kalam">
        <p>Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <br>
        <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
    </div>
    <div class="imgs">
        <img src="@/assets/images/single/post6.png" alt="Post 6">
        <img src="@/assets/images/single/post7.png" alt="Post 7">
    </div>
    </div>

</template>
<style scoped>
.container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    justify-content: center;
}
.bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    max-width: 1200px;
    margin-bottom: 20px;
        font-size: 1.2rem;
        margin-bottom: 4rem;

}
.np  {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.4);
    font-weight: 600;
}
.kalam {
        margin-bottom: 3rem;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        justify-content: center;
    }
.kalam p {
        margin-bottom: 1.5rem;
        width: 80%;
        color: #0000006d;
    }
    .imgs {
        display: flex;
        gap: 20px;
        justify-content: center;
        width: 40%;
        align-items: center;
        max-width: 1200px;
        margin-bottom: 4rem;
        
    }

    .imgs img {
        width: 100%;
        height: 100%;
        max-width: 2200px;
        background-color: rgba(249, 241, 231, 1);
        border-radius: 10px;
        object-fit: cover;
        padding-bottom: 20px;

    }
</style>
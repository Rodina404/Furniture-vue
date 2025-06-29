<script setup>
import post1 from "@/assets/images/single/post1.png";
import post2 from "@/assets/images/single/post2.png";
import post3 from "@/assets/images/single/post3.png";
import post4 from "@/assets/images/single/post4.png";
import post5 from "@/assets/images/single/post5.png";

import { ref } from "vue";

const sizes = ["L", "XL", "XS"];
const selectedSize = ref("L");

const images = [post1, post2, post3, post4, post5];
</script>
<template>
  <div class="container">
    <div class="small-imgs">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        alt="Image"
        class="grid-image"
      />
    </div>
    <div class="big-img">
      <img :src="post1" alt="Big Image" />
    </div>
    <div class="details">
      <h2>Asgaard sofa</h2>
      <p>Rs. 250,000.00</p>
      <div class="star-line">
        <div class="stars">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z"
              fill="#FFC700"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z"
              fill="#FFC700"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z"
              fill="#FFC700"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z"
              fill="#FFC700"
            />
          </svg>
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.1563 6.0125L0.800049 6.9375L5.40005 11.4188L4.31255 17.75L10 14.7625V0.25L7.1563 6.0125Z"
              fill="#FFC700"
            />
          </svg>
        </div>
        <p>|</p>
        <p>5 Customer Review</p>
      </div>
      <h4>
        Setting the bar as one of the loudest speakers in its class, the Kilburn
        is a compact, stout-hearted hero with a well-balanced audio which boasts
        a clear midrange and extended highs for a sound.
      </h4>
      <div class="size-pagination">
        <p>Size</p>
        <div class="pagination">
        <button
          v-for="size in sizes"
          :key="size"
          :class="['page-btn', { active: size === selectedSize }]"
          @click="selectedSize = size"
        >
          {{ size }}
        </button>
      </div>
        </div>
      <div class="color">
        <p>Color</p>
        <div class="spans">
          <span class="red"></span>
          <span class="green"></span>
          <span class="blue"></span>
        </div>
        <div class="btns">
          <button>&nbsp;&nbsp;- &nbsp;&nbsp;1 &nbsp;&nbsp;+&nbsp;&nbsp;</button>
          <button class="add-to-cart">Add to Cart</button>
          <button class="compare">+ Compare</button>
        </div>
        <div class="info">
            <hr>
          <p>
            SKU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            &nbsp;&nbsp;SS001
          </p>
          <p>Category&nbsp; : &nbsp;&nbsp;Sofas</p>
          <p>
            Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            &nbsp;&nbsp;Furniture, Sofa, Living Room
          </p>
          <p>
            Share&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            &nbsp;&nbsp;
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_117_920)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_117_920">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            &nbsp;
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_117_924)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.833252 2.365C0.833252 1.95877 0.994624 1.56919 1.28187 1.28195C1.56911 0.994702 1.9587 0.83333 2.36492 0.83333H17.6333C17.8346 0.833001 18.034 0.872383 18.22 0.949219C18.4061 1.02606 18.5752 1.13884 18.7176 1.28111C18.8601 1.42338 18.973 1.59235 19.0501 1.77834C19.1271 1.96433 19.1667 2.16368 19.1666 2.365V17.6333C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5753 18.7183 18.7178C18.5759 18.8602 18.4069 18.9731 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.127 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5754 1.02653 18.4065 0.949604 18.2206C0.87268 18.0346 0.833143 17.8354 0.833252 17.6342V2.365ZM8.08992 7.82333H10.5724V9.07C10.9308 8.35333 11.8474 7.70833 13.2249 7.70833C15.8658 7.70833 16.4916 9.13583 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0183 12.5508 10.0183C11.2883 10.0183 10.7633 10.9258 10.7633 12.3517V16.6067H8.08992V7.82333ZM3.50659 16.4925H6.17992V7.70833H3.50659V16.4917V16.4925ZM6.56242 4.84333C6.56746 5.07222 6.52673 5.29982 6.44262 5.51276C6.35851 5.7257 6.23271 5.91969 6.07261 6.08336C5.91251 6.24702 5.72133 6.37706 5.5103 6.46584C5.29926 6.55461 5.07262 6.60035 4.84367 6.60035C4.61472 6.60035 4.38808 6.55461 4.17704 6.46584C3.966 6.37706 3.77483 6.24702 3.61473 6.08336C3.45463 5.91969 3.32883 5.7257 3.24472 5.51276C3.16061 5.29982 3.11988 5.07222 3.12492 4.84333C3.13481 4.39404 3.32024 3.96649 3.64149 3.65224C3.96274 3.33798 4.39427 3.16201 4.84367 3.16201C5.29307 3.16201 5.7246 3.33798 6.04585 3.65224C6.3671 3.96649 6.55253 4.39404 6.56242 4.84333Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_117_924">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            &nbsp;
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 0.5625C5.45996 0.5625 0.5625 5.45996 0.5625 11.5C0.5625 17.54 5.45996 22.4375 11.5 22.4375C17.54 22.4375 22.4375 17.54 22.4375 11.5C22.4375 5.45996 17.54 0.5625 11.5 0.5625ZM16.7563 8.80713C16.7637 8.92188 16.7637 9.0415 16.7637 9.15869C16.7637 12.7427 14.0342 16.8711 9.04639 16.8711C7.5083 16.8711 6.08252 16.4243 4.88135 15.6553C5.10107 15.6797 5.31104 15.6895 5.53565 15.6895C6.80518 15.6895 7.97217 15.2598 8.90234 14.5322C7.71094 14.5078 6.70996 13.7266 6.36816 12.6523C6.78564 12.7134 7.16162 12.7134 7.59131 12.6035C6.97785 12.4789 6.42645 12.1457 6.0308 11.6606C5.63515 11.1755 5.41964 10.5684 5.4209 9.94238V9.9082C5.77979 10.1108 6.20215 10.2354 6.64404 10.2524C6.27256 10.0049 5.96792 9.66946 5.75711 9.27595C5.5463 8.88244 5.43585 8.443 5.43555 7.99658C5.43555 7.49121 5.56738 7.02979 5.8042 6.62939C6.48511 7.46762 7.33479 8.15318 8.29801 8.64152C9.26123 9.12986 10.3164 9.41004 11.395 9.46387C11.0117 7.62061 12.3887 6.12891 14.0439 6.12891C14.8252 6.12891 15.5283 6.45605 16.0239 6.9834C16.6367 6.86865 17.2227 6.63916 17.7451 6.33154C17.5425 6.95898 17.1177 7.48877 16.5537 7.82324C17.1006 7.76465 17.6279 7.61328 18.1162 7.40088C17.7476 7.94287 17.2861 8.42383 16.7563 8.80713Z"
                fill="black"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  font-family: "Poppins", sans-serif;
  padding: 4rem;
  justify-content: center;
  gap: 2rem;
  margin: 0.5rem 3rem 4rem 6rem;
}
.container .small-imgs {
  width: 5%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 40vh;
}
.container .small-imgs img {
  width: 100%;
  height: 15%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
      background-color: rgba(249, 241, 231, 1);
}
.container .big-img {
  width: 50%;
  height: 60vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
      background-color: rgba(249, 241, 231, 1);
}
.container .big-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container .details {
  width: 40%;
  
}
/* Place this in your <style scoped> section */
.size-pagination {
  display: flex;
  gap: 10px;
  margin-top: 30px;
  font-family: poppins, sans-serif;
}

.page-btn {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: #fcf4eb;
  color: #222;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: poppins, sans-serif;
  width: 4rem;
  height: 4rem;
  font-size: 0.9rem;
  margin-right: 0.5rem;
}

.page-btn.active {
  background-color: #b18529;
  color: white;
}

.page-btn:hover:not(.active):not(:disabled) {
  background-color: #f1e5d5;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.details h2 {
  font-size: 3rem;
  margin-bottom: 0.1rem;
}
.details p {
  font-size: 1.5rem;
  margin-bottom: 0.6rem;
  color: rgba(0, 0, 0, 0.5);
}
.details .star-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.details .star-line .stars {
  display: flex;
  gap: 0.3rem;
}
.details .star-line p {
  color: rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  margin-top: 1rem;
}
.details h4 {
    width: 90%;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.7);
}
.details .size-pagination  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
}
.spans span {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: inline-block;
  margin-right: 1.5rem;
  cursor: pointer;
  background-color: #b18529;
}
.spans .red {
  background-color: #a34040;
}
.spans .green {
  background-color: #335033;
}
.spans .blue {
  background-color: #3f3f70;
}
.btns  button {
    margin-right: 2rem;
    margin-top: 30px;
    font-family: poppins, sans-serif;
    width: 25%;
    height: 4rem;
    border: #000 solid 1px;
    border-radius: 0.9rem;
    background-color: #fff;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}
.btns button:hover {
border: #b18529 solid 1px;
transform: translateY(-2px);
}
.info {
  margin-top: 4rem;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.9);
}
.info hr {
  margin: 0.5rem 0;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
}
.info p {
  margin: 0.5rem 0;
}
</style>

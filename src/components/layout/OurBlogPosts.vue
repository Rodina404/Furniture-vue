<template>
  <div class="blog-wrapper">
    <!-- Blog Cards -->
    <div class="posts-container">
      <div v-for="post in paginatedPosts" :key="post.id" class="post-card">
        <img :src="post.image" alt="Post Image" class="post-image" />
        <div class="meta">
          <span
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99977 9.25C7.72977 9.25 7.26977 5.81 7.26977 5.81C6.99977 4.02 7.81977 2 9.96977 2C12.1298 2 12.9498 4.02 12.6798 5.81C12.6798 5.81 12.2698 9.25 9.99977 9.25ZM9.99977 11.82L12.7198 10C15.1098 10 17.2398 12.33 17.2398 14.53V17.02C17.2398 17.02 13.5898 18.15 9.99977 18.15C6.34977 18.15 2.75977 17.02 2.75977 17.02V14.53C2.75977 12.28 4.69977 10.05 7.22977 10.05L9.99977 11.82Z"
                fill="#9F9F9F"
              />
            </svg>
            {{ post.author }}</span
          >
          <span
            ><svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666992 14.8333C0.666992 16.25 1.75033 17.3333 3.16699 17.3333H14.8337C16.2503 17.3333 17.3337 16.25 17.3337 14.8333V8.16666H0.666992V14.8333ZM14.8337 2.33332H13.167V1.49999C13.167 0.99999 12.8337 0.666656 12.3337 0.666656C11.8337 0.666656 11.5003 0.99999 11.5003 1.49999V2.33332H6.50033V1.49999C6.50033 0.99999 6.16699 0.666656 5.66699 0.666656C5.16699 0.666656 4.83366 0.99999 4.83366 1.49999V2.33332H3.16699C1.75033 2.33332 0.666992 3.41666 0.666992 4.83332V6.49999H17.3337V4.83332C17.3337 3.41666 16.2503 2.33332 14.8337 2.33332Z"
                fill="#9F9F9F"
              />
            </svg>
            {{ post.date }}</span
          >
          <span
            ><svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.89664 18.968C9.36664 18.97 8.85664 18.758 8.48264 18.382L0.645639 10.547C0.441312 10.3434 0.283632 10.0978 0.183493 9.82723C0.0833546 9.55668 0.0431437 9.26762 0.0656389 8.98001L0.565639 2.41401C0.600182 1.93599 0.806166 1.48652 1.1457 1.14827C1.48524 0.810017 1.93549 0.60574 2.41364 0.573012L8.97964 0.0730116C9.03164 0.0620116 9.08264 0.0620117 9.13464 0.0620117C9.66464 0.0620117 10.1716 0.272012 10.5446 0.648012L18.3826 8.48201C18.5684 8.66774 18.7158 8.88825 18.8164 9.13096C18.917 9.37366 18.9687 9.6338 18.9687 9.89651C18.9687 10.1592 18.917 10.4194 18.8164 10.6621C18.7158 10.9048 18.5684 11.1253 18.3826 11.311L11.3106 18.382C11.1254 18.5683 10.905 18.716 10.6623 18.8166C10.4196 18.9172 10.1594 18.9687 9.89664 18.968ZM5.65364 3.65401C5.32475 3.65411 5.00096 3.73531 4.71094 3.89042C4.42093 4.04554 4.17364 4.26978 3.99099 4.54329C3.80834 4.8168 3.69596 5.13113 3.6638 5.45845C3.63164 5.78576 3.68069 6.11595 3.80662 6.41978C3.93255 6.72361 4.13146 6.99169 4.38574 7.20029C4.64002 7.40888 4.94181 7.55155 5.26439 7.61565C5.58698 7.67976 5.92039 7.66332 6.2351 7.56779C6.54982 7.47227 6.83611 7.30061 7.06864 7.06801L7.07564 7.06201L7.08264 7.05501L7.07464 7.06201C7.35263 6.78158 7.54138 6.42513 7.61711 6.03759C7.69284 5.65006 7.65216 5.24877 7.5002 4.88432C7.34824 4.51986 7.09179 4.20855 6.76318 3.98961C6.43457 3.77066 6.04851 3.65389 5.65364 3.65401Z"
                fill="#9F9F9F"
              />
            </svg>
            {{ post.category }}</span
          >
        </div>
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
        <a href="#" class="read-more">Read more</a>
      </div>
    </div>
    
     <div class="sidebar">
    <!-- Search Box -->
<div class="search-box">
  <input type="text"  />
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20L15.514 15.506M18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
  </svg>
</div>

    <!-- Categories -->
    <div class="categories">
      <h3>Categories</h3>
      <ul>
        <li v-for="(category, index) in categories" :key="index">
          <span>{{ category.name }}</span>
          <span>{{ category.count }}</span>
        </li>
      </ul>
    </div>

    <!-- Recent Posts -->
    <div class="recent-posts">
      <h3>Recent Posts</h3>
      <div v-for="(post, index) in recentPosts" :key="index" class="post-item">
        <img :src="post.image" alt="Post thumbnail" />
        <div class="post-info">
          <p class="title">{{ post.title }}</p>
          <p class="date">{{ post.date }}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
<!-- Pagination Buttons -->
<div class="pagination">
  <button
    v-for="page in totalPages"
    :key="page"
    :class="['page-btn', { active: page === currentPage }]"
    @click="currentPage = page"
  >
    {{ page }}
  </button>
  <button class="page-btn next-btn" @click="goToNextPage" :disabled="currentPage === totalPages">
    Next
  </button>
</div>
</template>

<script setup>
import { ref, computed } from "vue";
import post1 from "@/assets/images/blog/post1.jpg";
import post2 from "@/assets/images/blog/post2.jpg";
import post3 from "@/assets/images/blog/post3.jpg";
import post4 from "@/assets/images/blog/post4.jpg";
import post5 from "@/assets/images/blog/post5.png";
import post6 from "@/assets/images/blog/post6.png";

const currentPage = ref(1);
const postsPerPage = 3;
const posts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    author: "Admin",
    category: "Wood",
    image: post1,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    id: 2,
    title: "The Rise of Modern Aesthetics",
    date: "15 Oct 2022",
    author: "Admin",
    category: "Interior",
    image: post2,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    id: 3,
    title: "Why Simplicity Wins",
    date: "16 Oct 2022",
    author: "Admin",
    category: "Minimal",
    image: post3,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    id: 4,
    title: "Back to Natural Materials",
    date: "17 Oct 2022",
    author: "Admin",
    category: "Wood",
    image: post4,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    id: 5,
    title: "Color Palettes of 2023",
    date: "18 Oct 2022",
    author: "Admin",
    category: "Trends",
    image: post5,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    id: 6,
    title: "Functional and Fabulous",
    date: "19 Oct 2022",
    author: "Admin",
    category: "Design",
    image: post6,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
];

const totalPages = computed(() => Math.ceil(posts.length / postsPerPage));
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  return posts.slice(start, start + postsPerPage);
});
function goToNextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
}
const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Hands", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Woods", count: 6 },
];

const recentPosts = [
  {
    image: post1,
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
  },
  {
    image: post2,
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
  },
  {
    image: post3,
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
  },
  {
    image: post4,
    title: "Modern home in Milan",
    date: "03 Aug 2022",
  },
  {
    image: post5,
    title: "Colorful office redesign",
    date: "03 Aug 2022",
  },
];
</script>

<style scoped>

.blog-wrapper {
    margin: 3.5rem 0 3.5rem 4.5rem;
    display: flex;
    justify-content: space-around;
  width: 100%;
  font-family: poppins, sans-serif;
}


.posts-container {
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(720px, 1fr));
  gap: 20px;
  width: 70%;
  margin-bottom: 13px;

}
.post-card {
    min-height: 350px;
    margin-bottom: 1.2rem;
 display: flex;
 flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  transition: transform 0.3s ease;
  font-family: poppins, sans-serif;
}

@media (max-width: 600px) {
  .post-card {
    min-height: 220px;
  }
}
.post-card h2, .post-card p {
    width: 70%;
    margin-bottom: 1.5rem;
}
.post-card p {
    color: rgba(0, 0, 0, 0.7);
}
.post-image {
  width: 70%;
  height: 40vh;
  object-fit: cover;
  border-radius: 6px;
}

.meta {
  display: flex;
  font-size: 13px;
  margin-top: 10px;
  color: #666;
  gap: 1.5rem;
  margin-bottom: 1rem;
}
.meta span {
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: poppins, sans-serif;
}
.read-more {
    width: fit-content;
  display: inline-block;
  margin-top: 10px;
  color: black;
  font-weight: 600;
  padding-bottom: 5px;
  text-decoration: none;
  border-bottom: 1px solid black;
  transition: border-bottom 0.3s, color 0.3s ease-out,
    transform 0.3s ease-in-out;
}
.read-more:hover {
  border-bottom: 1px solid #8f9397;
  color: #8f9397;
  transform: translateY(-2px);
}
.pagination {
  display: flex;
  gap: 10px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  font-family: poppins, sans-serif;
}

.page-btn {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: #fcf4eb; /* light beige */
  color: #222;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
    font-family: poppins, sans-serif;
    width: 4rem;
    height: 4rem;
    font-size: 0.9rem;

}

.page-btn.active {
  background-color: #b18529; /* golden brown for active */
  color: white;
}

.page-btn:hover:not(.active):not(:disabled) {
  background-color: #f1e5d5;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* }
.search-box {
  position: relative;
  width: 230px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 10px;
  display: flex;
  align-items: center;
}

.search-box input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
}

.search-box svg {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.categories {
  display: flex;
  margin-top: 20px;
  width:40%;
} */
 .sidebar {
    margin: 2rem 0 0 2rem;
  width: 30%;
  font-family: 'Poppins', sans-serif;
  color: #000;
}
.search-box {
  position: relative;
  margin-bottom: 2rem;
  width: 400px; /* or 100% if you want it responsive */
}

.search-box input {
  width: 100%;
  padding: 10px 40px 10px 10px; /* right padding for icon */
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
}

.search-box svg {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.categories h3,
.recent-posts h3 {
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 3rem;
}

.categories ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 1rem;
}
.categories span{
    margin: 0rem 18.8rem 0 0;
}
.categories li {
  display: flex;
  justify-content: space-around;
  padding: 0.9rem 0;
  color: #555555a5;
  font-size: 0.9rem;
  margin-right: 1rem;
}

.recent-posts .post-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  transition: 0.3ms ease-in-out;
}
.recent-posts .post-item:hover {
  transform: translateY(-2px);
}

.recent-posts img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
}

.post-info .title {
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 2px;
  color: #111;
  width: 60%;
}

.post-info .date {
  font-size: 0.75rem;
  color: #999;
}
</style>

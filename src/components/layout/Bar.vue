<template>
  <div class="filter-bar">
    <div class="filter-section">
      <button @click="toggleFilter" class="filter-btn">
        <svg
        width="21"
        height="18"
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.0238 3.14285H6.92857M4.54762 3.14285H0.976191M20.0238 15.0476H6.92857M4.54762 15.0476H0.976191M14.0714 9.09524H0.976191M20.0238 9.09524H16.4524M5.7381 0.761902C6.05383 0.761902 6.35663 0.887327 6.57989 1.11058C6.80315 1.33384 6.92857 1.63664 6.92857 1.95238V4.33333C6.92857 4.64906 6.80315 4.95187 6.57989 5.17512C6.35663 5.39838 6.05383 5.52381 5.7381 5.52381C5.42236 5.52381 5.11956 5.39838 4.8963 5.17512C4.67304 4.95187 4.54762 4.64906 4.54762 4.33333V1.95238C4.54762 1.63664 4.67304 1.33384 4.8963 1.11058C5.11956 0.887327 5.42236 0.761902 5.7381 0.761902V0.761902ZM5.7381 12.6667C6.05383 12.6667 6.35663 12.7921 6.57989 13.0153C6.80315 13.2386 6.92857 13.5414 6.92857 13.8571V16.2381C6.92857 16.5538 6.80315 16.8566 6.57989 17.0799C6.35663 17.3031 6.05383 17.4286 5.7381 17.4286C5.42236 17.4286 5.11956 17.3031 4.8963 17.0799C4.67304 16.8566 4.54762 16.5538 4.54762 16.2381V13.8571C4.54762 13.5414 4.67304 13.2386 4.8963 13.0153C5.11956 12.7921 5.42236 12.6667 5.7381 12.6667ZM15.2619 6.71428C15.5776 6.71428 15.8804 6.83971 16.1037 7.06297C16.327 7.28622 16.4524 7.58903 16.4524 7.90476V10.2857C16.4524 10.6014 16.327 10.9042 16.1037 11.1275C15.8804 11.3508 15.5776 11.4762 15.2619 11.4762C14.9462 11.4762 14.6434 11.3508 14.4201 11.1275C14.1969 10.9042 14.0714 10.6014 14.0714 10.2857V7.90476C14.0714 7.58903 14.1969 7.28622 14.4201 7.06297C14.6434 6.83971 14.9462 6.71428 15.2619 6.71428V6.71428Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
       <span>Filter</span>
    </button>
      <button @click="toggleGridView" class="grid-btn">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6667 22.1667C17.7384 22.1667 16.8482 21.7979 16.1918 21.1416C15.5354 20.4852 15.1667 19.5949 15.1667 18.6667C15.1667 17.7384 15.5354 16.8482 16.1918 16.1918C16.8482 15.5354 17.7384 15.1667 18.6667 15.1667C19.5949 15.1667 20.4852 15.5354 21.1415 16.1918C21.7979 16.8482 22.1667 17.7384 22.1667 18.6667C22.1667 19.5949 21.7979 20.4852 21.1415 21.1416C20.4852 21.7979 19.5949 22.1667 18.6667 22.1667ZM9.33334 22.1667C8.40508 22.1667 7.51484 21.7979 6.85846 21.1416C6.20208 20.4852 5.83334 19.5949 5.83334 18.6667C5.83334 17.7384 6.20208 16.8482 6.85846 16.1918C7.51484 15.5354 8.40508 15.1667 9.33334 15.1667C10.2616 15.1667 11.1518 15.5354 11.8082 16.1918C12.4646 16.8482 12.8333 17.7384 12.8333 18.6667C12.8333 19.5949 12.4646 20.4852 11.8082 21.1416C11.1518 21.7979 10.2616 22.1667 9.33334 22.1667ZM18.6667 12.8333C17.7384 12.8333 16.8482 12.4646 16.1918 11.8082C15.5354 11.1518 15.1667 10.2616 15.1667 9.33334C15.1667 8.40509 15.5354 7.51485 16.1918 6.85847C16.8482 6.20209 17.7384 5.83334 18.6667 5.83334C19.5949 5.83334 20.4852 6.20209 21.1415 6.85847C21.7979 7.51485 22.1667 8.40509 22.1667 9.33334C22.1667 10.2616 21.7979 11.1518 21.1415 11.8082C20.4852 12.4646 19.5949 12.8333 18.6667 12.8333ZM9.33334 12.8333C8.40508 12.8333 7.51484 12.4646 6.85846 11.8082C6.20208 11.1518 5.83334 10.2616 5.83334 9.33334C5.83334 8.40509 6.20208 7.51485 6.85846 6.85847C7.51484 6.20209 8.40508 5.83334 9.33334 5.83334C10.2616 5.83334 11.1518 6.20209 11.8082 6.85847C12.4646 7.51485 12.8333 8.40509 12.8333 9.33334C12.8333 10.2616 12.4646 11.1518 11.8082 11.8082C11.1518 12.4646 10.2616 12.8333 9.33334 12.8333Z"
            fill="black"
          />
        </svg>
      </button>
      <button @click="toggleListView" class="list-btn">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 6.75H19.5C20.2956 6.75 21.0587 7.06607 21.6213 7.62868C22.1839 8.19129 22.5 8.95435 22.5 9.75V14.25C22.5 15.0456 22.1839 15.8087 21.6213 16.3713C21.0587 16.9339 20.2956 17.25 19.5 17.25H4.5C3.70435 17.25 2.94129 16.9339 2.37868 16.3713C1.81607 15.8087 1.5 15.0456 1.5 14.25V9.75C1.5 8.95435 1.81607 8.19129 2.37868 7.62868C2.94129 7.06607 3.70435 6.75 4.5 6.75ZM4.5 8.25C4.10218 8.25 3.72064 8.40804 3.43934 8.68934C3.15804 8.97064 3 9.35218 3 9.75V14.25C3 14.6478 3.15804 15.0294 3.43934 15.3107C3.72064 15.592 4.10218 15.75 4.5 15.75H19.5C19.8978 15.75 20.2794 15.592 20.5607 15.3107C20.842 15.0294 21 14.6478 21 14.25V9.75C21 9.35218 20.842 8.97064 20.5607 8.68934C20.2794 8.40804 19.8978 8.25 19.5 8.25H4.5ZM1.5 3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H21.75C21.9489 2.25 22.1397 2.32902 22.2803 2.46967C22.421 2.61032 22.5 2.80109 22.5 3C22.5 3.19891 22.421 3.38968 22.2803 3.53033C22.1397 3.67098 21.9489 3.75 21.75 3.75H2.25C2.05109 3.75 1.86032 3.67098 1.71967 3.53033C1.57902 3.38968 1.5 3.19891 1.5 3ZM1.5 21C1.5 20.8011 1.57902 20.6103 1.71967 20.4697C1.86032 20.329 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.329 22.2803 20.4697C22.421 20.6103 22.5 20.8011 22.5 21C22.5 21.1989 22.421 21.3897 22.2803 21.5303C22.1397 21.671 21.9489 21.75 21.75 21.75H2.25C2.05109 21.75 1.86032 21.671 1.71967 21.5303C1.57902 21.3897 1.5 21.1989 1.5 21Z"
            fill="black"
          />
        </svg>
      </button>
      <span class="line"></span>
      <span class="results-info"
        >Showing {{ startIndex + 1 }}-{{ endIndex }} of
        {{ totalProducts }} results</span
      >
    </div>
    <div class="controls-section">
      <div class="s">
        <span class="show-label">Show </span>
        <select
          :value="itemsPerPage"
          @change="updateItemsPerPage"
          class="show-select"
        >
          <option value="16">16</option>
          <option value="32">32</option>
        </select>
      </div>
      <div class="s">
        <span class="sort-label">Sort by </span>
        <select :value="sortBy" @change="updateSort" class="sort-select">
          <option value="default">Default</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['sortBy', 'itemsPerPage']);
const emit = defineEmits(['update:sortBy', 'update:itemsPerPage']);

const updateSort = (e) => emit('update:sortBy', e.target.value);
const updateItemsPerPage = (e) => emit('update:itemsPerPage', +e.target.value);
</script>

<style scoped>
.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f9f1e7;
  margin-bottom: 1rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
}
.filter-section {
  display: flex;
  align-items: center;
  margin-left: 4rem;
    font-family: "Poppins", sans-serif;
    font-size: 0.5rem;
    justify-content: space-between;
}
.filter-section button {
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;
  font-size: 0.8rem;
  display: flex;           /* ✅ Added */
  align-items: center;     /* ✅ Added */
  gap: 0.5rem;             /* ✅ Added */
}

.filter-section svg {
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.5rem;
  vertical-align: middle;
}

button span {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;

}

.results-info {
  margin-left: 1rem;
  font-size: 0.9rem;
  color: #333;
}

.controls-section {
  display: flex;
  align-items: center;
}

.show-select,
.sort-select {
  padding: 0.5rem;
  margin-left: 1rem;
  border: 0px;
  border-radius: 4px;
  font-size: 0.9rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: rgba(0, 0, 0, 0.4);
  appearance: none;
}

.s {
  margin-right: 6.5rem;
  margin-left: -3.8rem;
}
.s span {
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: #000;
}
.line {
  width: 0.08rem;
  height: 2.5rem;
  background-color:rgba(0, 0, 0, 0.5);
  margin: 0 1rem;
}
</style>

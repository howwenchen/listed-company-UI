<template>
  <div class="container-fluid pt-4 px-4">
    <div class="bg-light rounded-top p-4">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <h6 class="mb-0">{{ route.meta.title }}</h6>
        <form class="d-none d-md-flex ms-4">
          <input
            class="form-control border-0"
            type="search"
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  </div>
  <div class="container-fluid pt-4 px-4">
    <div class="row g-4">
      <div class="col-12">
        <div class="bg-light rounded h-100 p-4">
          <h6 class="mb-4">{{ list }}</h6>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th
                    v-for="header in tableHeaders"
                    :key="header.key"
                    scope="col"
                  >
                    {{ header.text }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(monRevenue, index) in paginatedData" :key="index">
                  <th scope="row">{{ monRevenue.companyId }}</th>
                  <td>{{ monRevenue.name }}</td>
                  <td>{{ monRevenue.industry }}</td>
                  <td>{{ monRevenue.revenueCurrentMonth }}</td>
                  <td>{{ monRevenue.revenuePreviousMonth }}</td>
                  <td>{{ monRevenue.revenueChangePreviousMonth }}</td>
                  <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 頁碼 -->
          <div class="d-flex justify-content-center mt-4">
            <button
              @click="prevPage"
              :disabled="currentPage === 0"
              class="btn btn-primary me-2"
            >
              Previous
            </button>
            <button
              v-for="page in totalPages"
              :key="page"
              @click="goToPage(page - 1)"
              :class="[
                'btn',
                'me-2',
                {
                  'btn-primary': currentPage === page - 1,
                  'btn-secondary': currentPage !== page - 1,
                },
              ]"
            >
              {{ page }}
            </button>
            <button
              @click="nextPage"
              :disabled="currentPage >= totalPages - 1"
              class="btn btn-primary"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "../axios";
import { useRoute } from "vue-router";

const list = ref("列表");
const monRevenues = ref([]);
const currentPage = ref(0);
const pageSize = 20;

//表格標頭
const tableHeaders = ref([
  { text: "公司代號", key: "companyId" },
  { text: "公司名稱", key: "name" },
  { text: "產業別", key: "industry" },
  { text: "營業收入-當月營收", key: "revenueCurrentMonth" },
  { text: "營業收入-上月營收", key: "revenuePreviousMonth" },
  { text: "營業收入-上月比較增減(%)", key: "revenueChangePreviousMonth" },
  { text: "更多資訊", key: "Detail" },
]);

//取得表格內容
const fetchInf = async () => {
  try {
    const response = await axios.get("ListedCompany/get");
    monRevenues.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchInf();
});

//取得當前頁面資料
const paginatedData = computed(() => {
  const start = currentPage.value * pageSize;
  return monRevenues.value.slice(start, start + pageSize);
});

//計算總頁面數
const totalPages = computed(() => {
  return Math.ceil(monRevenues.value.length / pageSize);
});

//計算頁碼範圍
const pages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value + 1;
  const range = 10;
  const halfRange = Math.floor(range / 2);
  let start = current - halfRange;
  let end = current + halfRange;

  if (start < 1) {
    start = 1;
    end = Math.min(total, range);
  }

  if (end > total) {
    end = total;
    start = Math.max(1, total - range + 1);
  }

  const pagesArray = [];
  for (let i = start; i <= end; i++) {
    pagesArray.push(i);
  }

  if (start > 1) {
    pagesArray.unshift("...");
    pagesArray.unshift(1);
  }

  if (end < total) {
    pagesArray.push("...");
    pagesArray.push(total);
  }

  return pagesArray;
});
//前一頁
const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};

//下一頁
const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++;
  }
};

//跳轉到指定頁面
const goToPage = (page) => {
  currentPage.value = page;
};

const route = useRoute();
</script>

<style scoped>
/* 添加你的樣式 */
</style>

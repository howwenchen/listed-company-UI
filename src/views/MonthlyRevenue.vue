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
            v-model="companyId"
          />
          <button
            type="button"
            class="btn btn-square btn-outline-primary m-2"
            @click="searchCompanyId"
          >
            <i class="fa fa-home"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
  <div class="container-fluid pt-4 px-4">
    <div class="row g-4">
      <div class="col-12">
        <div class="bg-light rounded h-100 p-4">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <h6 class="mb-4">{{ list }}</h6>
            <router-link
              :to="{ name: 'monthly-revenue-create' }"
              class="btn btn-danger"
            >
              {{ createNew }}
            </router-link>
          </div>
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
                  <td>{{ monRevenue.companyName }}</td>
                  <td>{{ monRevenue.industry }}</td>
                  <td>{{ monRevenue.revenueCurrentMonth }}</td>
                  <td>{{ monRevenue.revenuePreviousMonth }}</td>
                  <td>{{ monRevenue.revenueChangePreviousMonth }}%</td>
                  <td>
                    <a class="btn btn-sm btn-primary" href="">{{ Detail }}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Pagination -->
          <Pagination
            :currentPage="currentPage"
            :pageCount="totalPages"
            :clickHandler="pageClickHandler"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "../axios";
import { useRoute } from "vue-router";
import Pagination from "../components/Pagination.vue";

const list = ref("列表");
const monRevenues = ref([]);
const currentPage = ref(0);
const pageSize = 20;
const companyId = ref("");
const createNew = ref("新增");
const Detail = ref("明細");

//表格標頭
const tableHeaders = ref([
  { text: "公司代號", key: "companyId" },
  { text: "公司名稱", key: "companyName" },
  { text: "產業別", key: "industry" },
  { text: "營業收入-當月營收", key: "revenueCurrentMonth" },
  { text: "營業收入-上月營收", key: "revenuePreviousMonth" },
  { text: "營業收入-上月比較增減(%)", key: "revenueChangePreviousMonth" },
  { text: "更多資訊", key: "Detail" },
]);

//取得表格內容
const fetchInf = async () => {
  try {
    await axios.get("MonthlyRevenue/Get").then((response) => {
      monRevenues.value = response.data;
    });
  } catch (error) {
    console.error(error);
  }
};

// 取得當前頁面資料
const paginatedData = computed(() => {
  const start = currentPage.value * pageSize;
  return monRevenues.value.slice(start, start + pageSize);
});

// 計算總頁面數
const totalPages = computed(() => {
  return Math.ceil(monRevenues.value.length / pageSize);
});

// 處理頁面切換
const pageClickHandler = (page) => {
  currentPage.value = page - 1;
};

// 搜尋
const searchCompanyId = async () => {
  if (companyId.value == "") {
    fetchInf();
  }
  try {
    await axios
      .get("MonthlyRevenue/GetFilter", {
        params: {
          companyId: companyId.value,
        },
      })
      .then((response) => {
        monRevenues.value = response.data;
      });
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchInf();
});

const route = useRoute();
</script>

<style scoped></style>

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
          <h6 class="mb-4">Responsive Table</h6>
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
                <tr>
                  <th scope="row">1</th>
                  <td>John</td>
                  <td>Doe</td>
                  <td>jhon@email.com</td>
                  <td>USA</td>
                  <td>123</td>
                  <td>Member</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>mark@email.com</td>
                  <td>UK</td>
                  <td>456</td>
                  <td>Member</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>jacob@email.com</td>
                  <td>AU</td>
                  <td>789</td>
                  <td>Member</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const users = ref([]);
const currentPage = ref(0);
const pageSize = 20;

const tableHeaders = ref([
  { text: "公司代號", key: "index" },
  { text: "公司名稱", key: "name" },
  { text: "產業別", key: "industry" },
  { text: "營業收入-當月營收", key: "RevenueCurrentMonth" },
  { text: "營業收入-上月營收", key: "RevenuePreviousMonth" },
  { text: "營業收入-上月比較增減(%)", key: "RevenueChangePreviousMonth" },
  { text: "更多資訊", key: "Detail" },
]);
const route = useRoute();
</script>

<style scoped>
/* 添加你的樣式 */
</style>

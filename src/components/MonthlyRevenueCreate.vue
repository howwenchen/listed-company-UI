<template>
  <div class="container-fluid pt-4 px-4">
    <div class="bg-light rounded-top p-4">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <h5 class="mb-0">{{ createForm }}</h5>
      </div>
    </div>
  </div>
  <CreateNew>
    <div class="form-grid">
      <template v-for="field in fields" :key="field.name">
        <div class="form-group">
          <label :for="field.name">{{ field.label }}:</label>
          <input
            class="form-control mb-3"
            aria-label="default input example"
            v-if="field.type !== 'textarea'"
            :type="field.type"
            :id="field.name"
            :name="field.name"
            v-model="revenueViewModel[field.name]"
          />
          <textarea
            v-else
            class="form-control"
            aria-label="With textarea"
            :id="field.name"
            :name="field.name"
            v-model="revenueViewModel[field.name]"
          ></textarea>
        </div>
      </template>
    </div>
  </CreateNew>
</template>

<script setup>
import { ref } from "vue";
import CreateNew from "./CreateNew.vue";

const createForm = ref("新增表單");
const revenueViewModel = ref({
  companyId: "",
  companyName: "",
  industry: "",
  reportDate: "1900-01-01",
  dataYearMonth: "",
  revenueCurrentMonth: 0,
  revenuePreviousMonth: 0,
  revenueSameMonthLastYear: 0,
  revenueChangePreviousMonth: 0,
  revenueChangeSameMonthLastYear: 0,
  cumulativeRevenueCurrentMonth: 0,
  cumulativeRevenueLastYear: 0,
  cumulativeRevenueChangePreviousPeriod: 0,
  notes: "",
});

const fields = ref([
  { name: "companyId", label: "公司代號", type: "text" },
  { name: "companyName", label: "公司名稱", type: "text" },
  { name: "industry", label: "產業別", type: "text" },
  { name: "reportDate", label: "出表日期", type: "date" },
  { name: "dataYearMonth", label: "資料年月", type: "text" },
  { name: "revenueCurrentMonth", label: "營業收入-當月營收", type: "number" },
  { name: "revenuePreviousMonth", label: "營業收入-上月營收", type: "number" },
  {
    name: "revenueSameMonthLastYear",
    label: "營業收入-去年當月營收",
    type: "number",
  },
  {
    name: "revenueChangePreviousMonth",
    label: "營業收入-上月比較增減(%)",
    type: "number",
  },
  {
    name: "revenueChangeSameMonthLastYear",
    label: "營業收入-去年同月增減(%)",
    type: "number",
  },
  {
    name: "cumulativeRevenueCurrentMonth",
    label: "累計營業收入-當月累計營收",
    type: "number",
  },
  {
    name: "cumulativeRevenueLastYear",
    label: "累計營業收入-去年累計營收",
    type: "number",
  },
  {
    name: "cumulativeRevenueChangePreviousPeriod",
    label: "累計營業收入-前期比較增減(%)",
    type: "number",
  },
  { name: "notes", label: "備註", type: "textarea" },
]);
</script>

<style scoped>
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 16px;
  column-gap: 250px;
}

.form-group {
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div
    class="container-fluid pt-4 px-4"
    v-for="child in children"
    :key="child.name"
  >
    <div class="bg-light rounded-top p-4">
      <!-- 抓取SideBar資料 -->
      <div class="d-flex align-items-center justify-content-between mb-2">
        <h6 class="mb-0">{{ child.name }}</h6>
        <a :href="child.link">{{ lookUp }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  children: {
    type: Array,
    required: true,
  },
  lookUp: {
    type: String,
    default: "立即查看",
  },
});
</script>
<style scoped></style>

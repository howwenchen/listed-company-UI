<template>
  <div class="container-fluid pt-4 px-4">
    <div class="bg-light rounded-top p-4">
      <div class="row">
        <div class="col-12 col-sm-6 text-center text-sm-start">
          &copy; <a href="#">{{ title }}</a>
          {{ note }}
        </div>
        <div class="col-12 col-sm-6 text-center text-sm-end">
          Designed By
          <a href="#">{{ author }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("查詢好地方");
const note = ref("投資一定有風險，基金投資有賺有賠");
const author = ref("Wayne Chen");
</script>

<style scoped></style>

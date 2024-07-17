<!-- src/components/Pagination.vue -->
<template>
  <paginate
    :currentPage="currentPage"
    :page-count="pageCount"
    :page-range="5"
    :margin-pages="1"
    :click-handler="clickHandler"
    :prev-text="'Prev'"
    :next-text="'Next'"
  ></paginate>
</template>

<script setup>
import { defineProps } from "vue";
import Paginate from "vuejs-paginate-next";

const props = defineProps({
  currentPage: Number,
  pageCount: Number,
  clickHandler: Function,
});
</script>

<style scoped></style>

<template>
  <!-- Side Bar -->
  <div class="sidebar pe-4 pb-3">
    <Sidebar ref="sidebarRef"></Sidebar>
  </div>

  <div class="content">
    <router-view :children="children"></router-view>

    <!-- Footer-->
    <RecommendFooter></RecommendFooter>

    <!-- Back to Top -->
    <BackToTop></BackToTop>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Sidebar from "../components/SideBar.vue";
import RecommendFooter from "../components/RecommendFooter.vue";
import BackToTop from "../components/BackToTop.vue";

const sidebarRef = ref(null);
const children = ref([]);

onMounted(() => {
  if (sidebarRef.value) {
    children.value = sidebarRef.value
      .getDropdownItems()
      .flatMap((dropdown) => dropdown.children);
  }
});
</script>
<style scoped></style>

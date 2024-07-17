<!-- Sidebar.vue -->
<template>
  <nav class="navbar bg-light navbar-light">
    <a href="#" class="navbar-brand mx-4 mb-3">
      <h3 class="text-primary">
        <i class="fa fa-hashtag me-2"></i>{{ title }}
      </h3>
    </a>
    <div class="d-flex align-items-center ms-4 mb-4">
      <div class="position-relative">
        <img
          class="rounded-circle"
          src="/img/user.jpg"
          alt=""
          style="width: 40px; height: 40px"
        />
        <div
          class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"
        ></div>
      </div>
      <div class="ms-3">
        <h6 class="mb-0">{{ login }}</h6>
      </div>
    </div>

    <div class="navbar-nav w-100">
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.link"
        class="nav-item nav-link"
        :class="{ active: item.active }"
      >
        <i :class="item.icon"></i>{{ item.name }}
      </router-link>
      <div
        v-for="dropdown in dropdownItems"
        :key="dropdown.name"
        class="nav-item dropdown"
      >
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <i :class="dropdown.icon"></i>{{ dropdown.name }}
        </a>
        <div class="dropdown-menu bg-transparent border-0">
          <router-link
            v-for="child in dropdown.children"
            :key="child.name"
            :to="child.link"
            class="dropdown-item"
            :class="{ active: child.active }"
          >
            <i class="fa fa-table me-2"></i>{{ child.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const title = ref("查詢好地方");
const login = ref("未登錄");

const navItems = ref([
  {
    name: "主頁",
    link: { name: "home" },
    icon: "fa fa-tachometer-alt me-2",
    active: true,
  },
]);

const dropdownItems = ref([
  {
    name: "上市公司",
    icon: "fa fa-laptop me-2",
    children: [
      { name: "基本資料", link: { name: "monthly-revenue" } },
      { name: "每月營業收入彙總表", link: { name: "monthly-revenue" } },
      { name: "股利分派情形", link: { name: "monthly-revenue" } },
      { name: "各產業EPS統計資訊", link: { name: "monthly-revenue" } },
    ],
  },
  {
    name: "投資專區",
    icon: "fa fa-th me-2",
    children: [
      { name: "每月國際主要股價指數", link: { name: "monthly-revenue" } },
      { name: "主要國家貨幣每月匯率概況", link: { name: "monthly-revenue" } },
      { name: "國內債券每月發行概況", link: { name: "monthly-revenue" } },
    ],
  },
]);

// 使用 defineExpose 把資料傳到父類別
defineExpose({
  getDropdownItems: () => dropdownItems.value,
});

const route = useRoute();

const isActive = (link) => {
  return route.name === link.name;
};

watch(route, (newRoute) => {
  // 更新 navItems 的 active 狀態
  navItems.value.forEach((item) => {
    item.active = isActive(item.link);
  });

  // 更新 dropdownItems 的 active 狀態
  dropdownItems.value.forEach((dropdown) => {
    dropdown.children.forEach((child) => {
      child.active = isActive(child.link);
    });
  });
});
</script>

<style scoped></style>

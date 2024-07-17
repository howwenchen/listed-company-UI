<template>
  <div class="container-fluid pt-4 px-4">
    <div class="row g-4">
      <div class="col-12">
        <div class="bg-light rounded h-100 p-4">
          <div
            class="d-flex align-items-center justify-content-between mb-2"
          ></div>
          <div>
            <form class="d-none d-md-flex ms-4" @submit.prevent="submitForm">
              <slot></slot>
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <button type="submit" class="btn btn-info m-2">
                  {{ submit }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import axios from "../axios";

const submit = ref("提交");
const { proxy } = getCurrentInstance();
const router = useRouter();

const submitForm = async () => {
  try {
    const formData = getFormData();
    await axios.post("MonthlyRevenue/Post", formData).then((response) => {
      if (response.data == true) {
        proxy.$swal("新增已完成").then(() => {
          router.push({ name: "monthly-revenue" });
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
};

const getFormData = () => {
  const formData = {};
  const inputs = document.querySelectorAll("input, textarea, select");
  inputs.forEach((input) => {
    formData[input.name.charAt(0).toUpperCase() + input.name.slice(1)] =
      input.value;
  });
  return formData;
};
</script>

<style scoped></style>

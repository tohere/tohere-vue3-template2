<template>
  <div>Home</div>

  <h1 class="text-3xl text-red-600 hover:bg-blue-500">----{{ double }}</h1>
  <h2 class="count">{{ count }}</h2>
  <h2>msg: {{ msg }}</h2>
  <el-button class="btn" type="primary" @click="handleIncrement"
    >增加</el-button
  >
  <p class="border-divider-1 bg-divider-1">
    {{ t("home") }}
  </p>
  <el-button type="danger">按钮</el-button>
</template>

<script lang="ts" setup>
import { useUserStore } from "../../store/user";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
defineProps<{
  msg?: string;
}>();

const userStore = useUserStore();
const count = computed(() => userStore.count);
const double = computed(() => userStore.doubleCount);

function handleIncrement() {
  userStore.increment();
}
</script>

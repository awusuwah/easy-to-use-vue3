<template>
  <div>
    <Header title="Dashboard">
      <template #icon>
        <ChartPieIcon class="w-8 h-8" />
      </template>
    </Header>
  </div>
</template>

<script setup lang="ts">
import { ChartPieIcon } from "@heroicons/vue/24/outline";
import Header from "../components/header/Header.vue";
</script>

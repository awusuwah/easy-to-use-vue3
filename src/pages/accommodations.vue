<template>
  <div>
    <Header title="Accommodations" class="gradient-accommodation">
      <template #icon>
        <HomeIcon class="w-8 h-8" />
      </template>
    </Header>
  </div>
</template>

<script setup lang="ts">
import { HomeIcon } from "@heroicons/vue/24/outline";
import Header from "../components/header/Header.vue";
</script>

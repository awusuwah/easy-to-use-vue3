<template>
  <div>
    <Header title="Settings">
      <template #icon>
        <CogIcon class="w-8 h-8" />
      </template>
    </Header>
  </div>
</template>

<script setup lang="ts">
import { CogIcon } from "@heroicons/vue/24/outline";
import Header from "../components/header/Header.vue";
</script>

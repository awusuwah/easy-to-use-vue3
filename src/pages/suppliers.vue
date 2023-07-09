<template>
  <div>
    <Header title="Suppliers" class="gradient-supplier">
      <template #icon>
        <UserGroupIcon class="w-8 h-8" />
      </template>
    </Header>
  </div>
</template>

<script setup lang="ts">
import { UserGroupIcon } from "@heroicons/vue/24/outline";
import Header from "../components/header/Header.vue";
</script>

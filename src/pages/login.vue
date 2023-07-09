<template>
  <div>
    <Header title="Login">
      <template #icon>
        <UserIcon class="w-8 h-8" />
      </template>
    </Header>
  </div>
</template>

<script setup lang="ts">
import { UserIcon } from "@heroicons/vue/24/outline";
import Header from "../components/header/Header.vue";
</script>

<template>
  <div>
    <Header title="Offers" class="gradient-offer">
      <template #icon>
        <DocumentTextIcon class="w-8 h-8" />
      </template>
    </Header>
  </div>
</template>

<script setup lang="ts">
import { DocumentTextIcon } from "@heroicons/vue/24/outline";
import Header from "../components/header/Header.vue";
</script>

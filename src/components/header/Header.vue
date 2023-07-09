<template>
  <header class="flex items-center justify-between gap-x-4 px-6 h-14 bg-thm">
    <h1 class="flex items-center flex-grow space-x-2 overflow-x-hidden text-thm-contrast text-3xl font-thin md:text-3xl xl:text-4xl">
      <slot name="icon" />
      <span v-if="title" class="overflow-hidden leading-normal truncate">
        {{ title }}
      </span>
    </h1>
  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

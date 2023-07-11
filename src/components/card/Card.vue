<template>
  <div class="divide-y divide-bgr-200 overflow-hidden rounded-lg bg-bgr shadow max-w-4xl">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-xl leading-6 font-medium text-txt">{{ heading }}</h3>
    </div>
    <div class="px-4 py-5 sm:p-6 text-txt">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  // The title which is displayed in the header.
  heading: {
    type: String,
    default: "",
  },
});
</script>

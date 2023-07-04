<template>
  <svg :class="iconClasses">
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<IconProps>(), {
  color: "currentColor",
  size: "auto",
});

// Computed
const iconClasses = computed(() => ({
  "h-4 w-4": props.size === "sm",
  "h-6 w-6": props.size === "md",
  "h-8 w-8": props.size === "lg",
}));

export interface IconProps {
  icon: string;
  color?: string;
  size?: "sm" | "md" | "lg" | "auto";
}
</script>

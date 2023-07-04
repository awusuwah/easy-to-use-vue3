<template>
  <li :class="itemClasses"></li>
</template>

<script setup lang="ts">
import { computed } from "vue";

export interface NavigationItemProps {
  section: "dashboard" | "offers" | "suppliers" | "accommodations";
  to: string;

  icon?: string | null;
  text?: string | null;
}

const props = withDefaults(defineProps<NavigationItemProps>(), {
  icon: null,
  text: "Navigation Item Text",
});

const itemClasses = computed(() => ({}));
</script>

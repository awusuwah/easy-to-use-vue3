<template>
  <!-- The main navigation for the application. Is collapsible -->
  <Navigation />

  <!-- The main content for the application. Changes size based on if the navigation is open or not -->
  <div :class="contentClasses">
    <slot />
  </div>

  <!-- Include global components -->
  <AllIcons />
  <ThemeColors />
</template>

<script setup lang="ts">
import { computed } from "vue";

import AllIcons from "../components/icon/AllIcons.vue";
import Navigation from "../components/navigation/Navigation.vue";
import ThemeColors from "../components/themeColors/ThemeColors.vue";
import { useStateStore } from "../store/state.store";

// Computed
const contentClasses = computed(() => ({
  "bg-bgr-100 md:min-h-screen transition-all": true,
  "md:ml-72": useStateStore().getNavOpen,
  "md:ml-16": !useStateStore().getNavOpen,
}));
</script>

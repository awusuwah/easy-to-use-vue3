<template>
  <li :class="itemClasses">
    <NuxtLink :to="to" class="flex items-center h-14 py-3 text-sm font-bold" :aria-label="text">
      <slot />

      <span v-if="stateStore.getNavOpen && text" class="ml-2 whitespace-nowrap">{{ text }}</span>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStateStore } from "../../store/state.store";

export interface NavigationItemProps {
  section: "dashboard" | "offers" | "suppliers" | "accommodations";
  to: string;

  text?: string | null;
}
const props = withDefaults(defineProps<NavigationItemProps>(), {
  text: "Navigation Item Text",
});

const stateStore = useStateStore();
const currentRoute = computed(() => useRouter().currentRoute.value.path);

const itemClasses = computed(() => ({
  "items-center px-4": true,

  // Dashboard
  "bg-thm text-thm-contrast": props.section === "dashboard" && currentRoute.value.includes("/dashboard"),
  "bg-bgr text-txt-400 hover:text-thm hover:bg-bgr-50 hover:shadow-[inset_-2px_0_var(--color-thm)]": props.section === "dashboard" && !currentRoute.value.includes("/dashboard"),

  // Offers
  "bg-offer text-white": props.section === "offers" && currentRoute.value.includes("/offers"),
  "bg-bgr text-txt-400 hover:text-offer hover:bg-bgr-50 hover:shadow-[inset_-2px_0_var(--color-offer)]": props.section === "offers" && !currentRoute.value.includes("/offers"),

  // Suppliers
  "bg-supplier text-white": props.section === "suppliers" && currentRoute.value.includes("/suppliers"),
  "bg-bgr text-txt-400 hover:text-supplier hover:bg-bgr-50 hover:shadow-[inset_-2px_0_var(--color-supplier)]":
    props.section === "suppliers" && !currentRoute.value.includes("/suppliers"),

  // Accommodations
  "bg-accommodation text-white": props.section === "accommodations" && currentRoute.value.includes("/accommodations"),
  "bg-bgr text-txt-400 hover:text-accommodation hover:bg-bgr-50 hover:shadow-[inset_-2px_0_var(--color-accommodation)]":
    props.section === "accommodations" && !currentRoute.value.includes("/accommodations"),
}));
</script>

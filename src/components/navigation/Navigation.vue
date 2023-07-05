<template>
  <aside :class="wrapperClasses">
    <div class="flex flex-wrap items-center justify-between w-full mx-auto px-0 md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
      <!-- Easy to use logo -->
      <NuxtLink to="/" class="block h-20 text-sm font-bold" aria-label="Easy to Use Logo">
        <Icon icon="e2u-logo" :class="logoClasses" />
      </NuxtLink>

      <!-- TODO: Implement the button for the mobile navigation -->

      <!-- Navigation Links -->
      <nav :class="navWrapperClasses">
        <div :class="navClasses">
          <ul class="flex flex-col list-none md:flex-col md:min-w-full md:mt-10">
            <NavigationItem section="dashboard" to="/dashboard" text="Dashboard">
              <ChartPieIcon class="w-8 h-8" />
            </NavigationItem>
            <NavigationItem section="offers" to="/offers" text="Offers">
              <DocumentTextIcon class="w-8 h-8" />
            </NavigationItem>
            <NavigationItem section="suppliers" to="/suppliers" text="Suppliers">
              <UserGroupIcon class="w-8 h-8" />
            </NavigationItem>
            <NavigationItem section="accommodations" to="/accommodations" text="Accommodations">
              <HomeIcon class="w-8 h-8" />
            </NavigationItem>
          </ul>

          <!-- TODO: Implemnent the NavigationContextMenu -->
        </div>

        <!-- The button to toggle between the collapsed and expanded navigation -->
        <Button variant="neutral" class="absolute right-0 bottom-20 px-2 border-r-0 rounded-none rounded-l-lg mx:px-2 md:block" outlined @click="toggleNav">
          <ChevronLeftIcon v-if="stateStore.getNavOpen" class="block w-4 h-4 m-0" />
          <ChevronRightIcon v-else class="block w-4 h-4 m-0" />
        </Button>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ChartPieIcon, ChevronLeftIcon, ChevronRightIcon, DocumentTextIcon, HomeIcon, UserGroupIcon } from "@heroicons/vue/24/outline";
import { Button } from "ui-components-3";

import Icon from "../icon/Icon.vue";
import NavigationItem from "./NavigationItem.vue";
import { useStateStore } from "../../store/state.store";

const stateStore = useStateStore();

// The classes for the wrapper element
const wrapperClasses = computed(() => ({
  "flex justify-between z-0 shadow-xl transition-all bg-bgr md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:flex-row md:flex-nowrap md:overflow-y-visible md:overflow-x-hidden":
    true,

  "md:w-72": stateStore.getNavOpen,
  "md:w-16": !stateStore.getNavOpen,
}));

// The classes for the e2u logo
const logoClasses = computed(() => ({
  "h-14 mx-auto xl:h-16": true,

  "w-14": !stateStore.getNavOpen,
  "w-20 mt-3": stateStore.getNavOpen,
}));

// The classes for the navigation wrapper
const navWrapperClasses = computed(() => ({
  "absolute top-0 left-0 right-0 z-50 items-center flex-1 h-auto overflow-x-hidden overflow-y-auto rounded-b shadow isolate md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none":
    true,
  hidden: !stateStore.getNavMobileOpen,
}));

// The classes for the navigation
const navClasses = computed(() => ({
  "z-10 shadow-2xl md:shadow-none md:contents bg-bgr": true,
  "mobile-open": stateStore.getNavMobileOpen,
}));

/**
 * Handle what happens when the user clicks on the button which toggles the navigation between collapsed and expanded.
 */
const toggleNav = () => {
  if (useStateStore().getNavOpen) {
    stateStore.openNav();
    return;
  }

  stateStore.closeNav();
};
</script>

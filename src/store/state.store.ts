import { defineStore } from "pinia";

/**
 * Global application state which manages the state of the application. This controls what data is loaded, if the main navigation is closed, etc.
 *
 * @author Marko Maric
 */
export const useStateStore = defineStore("state", () => {
  // Desktop navigation
  const navOpen = ref(true);
  const getNavOpen = computed(() => navOpen.value);

  const openNav = () => (navOpen.value = true);
  const closeNav = () => (navOpen.value = false);
  const toggleNav = () => (navOpen.value = !navOpen.value);

  // Mobile navigation
  const navMobileOpen = ref(false);
  const getNavMobileOpen = computed(() => navMobileOpen.value);

  const openNavMobile = () => (navMobileOpen.value = true);
  const closeNavMobile = () => (navMobileOpen.value = false);
  const toggleNavMobile = () => (navMobileOpen.value = !navMobileOpen.value);

  // Darkmode
  const darkMode = ref(true);
  const getDarkMode = computed(() => darkMode.value);
  const setDarkMode = (value: boolean) => (darkMode.value = value);

  return {
    // Navigation
    navOpen,
    getNavOpen,
    openNav,
    closeNav,
    toggleNav,

    // Mobile navigation
    navMobileOpen,
    getNavMobileOpen,
    openNavMobile,
    closeNavMobile,
    toggleNavMobile,

    // Darkmode
    darkMode,
    getDarkMode,
    setDarkMode,
  };
});

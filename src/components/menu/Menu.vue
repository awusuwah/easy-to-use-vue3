<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton as="div">
        <Button variant="neutral">
          <UserCircleIcon class="w-6 h-6" />
        </Button>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="-top-2 transform -translate-y-full absolute left-0 w-56 origin-top-right bg-bgr-100 divide-y divide-bgr-200 rounded-md shadow-lg ring-1 ring-bgr-200 ring-opacity-5 focus:outline-none"
      >
        <div class="px-4 py-3">
          <p class="text-txt-100 text-sm">Signed in as</p>
          <p class="truncate text-sm font-medium text-thm">marko.maric@hotelplan.com</p>
        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <NuxtLink to="/settings" :class="[active ? 'bg-bgr-300 text-txt' : 'text-txt', 'flex items-center gap-x-2 px-4 py-2 text-sm']">
              <CogIcon class="w-5 h-5 inline-block" />
              User & Settings
            </NuxtLink>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button :class="[active ? 'block w-full bg-bgr-300 text-txt' : 'text-txt', 'flex items-center gap-x-2 px-4 py-2 text-sm']" @click="changeTheme">
              <SunIcon v-if="useStateStore().getDarkMode" class="w-5 h-5 inline-block" />
              <MoonIcon v-else class="w-5 h-5 inline-block" />
              Change Theme
            </button>
          </MenuItem>
        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <NuxtLink to="/login" :class="[active ? 'bg-bgr-300 text-txt' : 'text-txt', 'flex items-center gap-x-2 px-4 py-2 text-sm']">
              <ArrowRightOnRectangleIcon class="w-5 h-5 inline-block" />
              Login
            </NuxtLink>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { UserCircleIcon, CogIcon, SunIcon, MoonIcon, ArrowRightOnRectangleIcon } from "@heroicons/vue/24/outline";

import { Button } from "ui-components-3";

import { useStateStore } from "../../store/state.store";

/**
 * Swap the current theme with the other one.
 */
function changeTheme() {
  useStateStore().setDarkMode(!useStateStore().getDarkMode);
}
</script>

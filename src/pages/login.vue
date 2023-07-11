<template>
  <div>
    <Header title="Login">
      <template #icon>
        <UserIcon class="w-8 h-8" />
      </template>
    </Header>

    <main class="p-4">
      <Card heading="Login">
        <div class="space-y-2">
          <TextInput v-model="email" type="email" label="Email Address" placeholder="marko.maric@hotelplan.com" />
          <TextInput v-model="password" type="password" label="Password" placeholder="********" />

          <Button variant="cta" @click="login">Login</Button>
        </div>
      </Card>
    </main>
  </div>
</template>

<script setup lang="ts">
import { UserIcon } from "@heroicons/vue/24/outline";
import { Button, TextInput } from "ui-components-3";

import Card from "../components/card/Card.vue";
import Header from "../components/header/Header.vue";

const email = ref("");
const password = ref("");

/**
 * Validate the form and authenticate the user with the provided credentials.
 */
function login() {
  console.info("Logging in with the following email address: ", email.value);
}
</script>

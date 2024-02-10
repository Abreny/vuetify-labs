<script setup>
import { RouterView } from 'vue-router'
import AppMenu from '@/components/menu/AppMenu.vue'
</script>
<template>
  <v-app>
    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Vuetify Labs</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer>
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Abned Fandresena"
          subtitle="fanabned@gmail.com"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <AppMenu />
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

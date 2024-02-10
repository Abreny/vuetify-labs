<script setup>
const appMenu = [
  {
    icon: 'mdi-gesture-tap-button',
    title: 'Buttons',
    href: 'buttons'
  }
]
</script>

<template>
  <v-list density="compact" nav>
    <v-list-item
      v-for="item of appMenu"
      :key="item.title"
      :prepend-icon="item.icon"
      :title="item.title"
      :to="item.href"
    ></v-list-item>
  </v-list>
</template>

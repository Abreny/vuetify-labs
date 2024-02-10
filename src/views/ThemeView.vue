<script setup>
import { useTheme } from 'vuetify';


const theme = useTheme()

function switchTheme() {
  theme.global.name.value = theme.global.name.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div>
    <div>
      <v-btn @click="switchTheme" color="primary" variant="tonal" rounded prepend-icon="fa:fa-regular fa-moon"></v-btn>
    </div>
    <div>
      <v-theme-provider theme="myCustomLightTheme">
        <v-btn color="primary" variant="tonal" rounded prepend-icon="fa:fa-regular fa-moon"></v-btn>
      </v-theme-provider>
    </div>
  </div>
</template>

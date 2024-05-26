<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-model="drawer"> -->
      <!--  -->
    <!-- </v-navigation-drawer> -->

    <v-app-bar>
      <template v-slot:image>
        <v-img
          gradient="135deg, #730ca8 50%, #61104c 100%"
        ></v-img>
      </template>
        <v-img
          class="mx-2"
          src="@/assets/logo.svg"
          max-height="40"
          max-width="40"
          contain
        ></v-img>
      <v-app-bar-title class="text-h7">BugHunt - CyberSecurity</v-app-bar-title>
      <template v-slot:append>
        <!-- <v-btn icon="mdi-magnify"></v-btn> -->
        <v-switch
          v-model="lightTheme"
          color="#730ca8"
          label="Acender a Luz?!💡"
          value="lightTheme"
          hide-details
          @click="
              $vuetify.theme.global.name = $vuetify.theme.global.current.dark
                ? 'light'
                : 'dark'"
        ></v-switch>
      </template>

    </v-app-bar>

    <v-main>
      <RouterView />
      <!-- <router-view /> -->
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  //const drawer = ref(null)
</script>

<script lang="ts">
  export default {
    components: {
    },
    data() {
      return {
        lightTheme: false
      }
    },
  }
</script>

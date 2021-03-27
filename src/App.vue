<template>
  <!-- App.vue -->
  <v-app>
    <v-app-bar app color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon
        @click.prevent="hideOrShowMenu()"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Bank Application</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-avatar size="100">
              <v-img :src="avatar" width="100" height="100"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title mb-3"
                >Rafael Cruz</v-list-item-title
              >
              <v-list-item-subtitle
                >rafaelcruzdoteste@gmail.com</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title>Abrir Conta</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Fazer Compras</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Extrato de Compra</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { v4 as uuidv4 } from "uuid";

export default Vue.extend({
  name: "App",
  data: () => ({
    drawer: false,
    avatar: `https://robohash.org/${uuidv4()}.png?size=100x100&bgset=any`,
    //
  }),
  methods: {
    hideOrShowMenu: function () {
      this.drawer = !this.drawer;
    },
  },
});
</script>

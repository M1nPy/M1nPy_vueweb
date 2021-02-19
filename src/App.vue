<template>
  <v-app>
    <v-app-bar color="primary" dark app clipped-right>
      <v-toolbar-title>M1nPy</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/Home">Home</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text to="/About">About</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text to="/Graphic">Graphic</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text to="/Links">Links</v-btn>
      </v-toolbar-items>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" right clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Navigation lists
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name">
            <v-list-item-icon>
              <v-icon>{{ nav_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      nav_lists: [
        { name: "Home", icon: "mdi-vuetify" },
        { name: "About", icon: "mdi-cogs" },
        { name: "Graphic", icon: "mdi-palette" },
        { name: "Links", icon: "mdi-view-dashboard" }
      ]
    };
  }
};
</script>

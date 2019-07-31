<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="#3cd1c2">
      <span>Awesome! You added a new project.</span>
      <v-btn text tile @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>

    <v-toolbar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>App</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="grey" text v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>

    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app temporary color="#f83e70">

      <v-layout align-center justify-center column>

        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/256_1.png">
          </v-avatar>
        </v-flex>

        <v-flex class="mt-1">
          <p class="white--text subtitle-1">Mario</p>
        </v-flex>

        <v-flex class="mt-4 mb-3">
          <Popup @projectAdded="snackbar=true"/>
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">

          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>

    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup'

export default {
  components: {
    Popup
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' }
      ],
      snackbar: false
    }
  }
}
</script>

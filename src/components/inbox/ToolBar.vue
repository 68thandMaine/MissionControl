<template>
 <v-toolbar
      class='toolbar'
      color='#3949AB'
      dark
      prominent>
      <v-app-bar-nav-icon @click='showMenu = !showMenu'>
          <ul v-if='showMenu'>
            <li>list 1</li>
            <li>list 2</li>
          </ul>
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Inbox</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
export default {
  name: 'ToolBar',
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {

  }
}
</script>

<style>

</style>

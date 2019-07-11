<template>
	<header class='sidebar' data-cy='sidebar'>
    <nav class='sidebarNavigation'>
      <div class='sidebarMenuItems' data-cy='sidebarMenu'>
        <component @click='handelToggleSidebar' :menuToShow='this.sidebarActiveMenuOption' :is='this.sidebarMenu' />
      </div>
    </nav>
	</header>
</template>

<script>
import InboxMenu from './menu/InboxMenu';

export default {
  name: 'Sidebar',
  props: {
    activeMenu: String,
    activeMenuOption: String
  },
  components: {
    InboxMenu,
  },
  data() {
    return {
      // activeMenuOption: ''
    }
  },
  computed: {
    sidebarMenu() {
      return this.activeMenu
    },
    sidebarActiveMenuOption() {
      return this.activeMenuOption
    },
  },
  methods: {
    handelToggleSidebar(activeMenuOption) {
      console.log(activeMenuOption)
      this.$emit('setActiveMenuOption', activeMenuOption)
      // this.activeMenuOption = activeMenu;
    }
  }
};
</script>

<style>
/* @media screen and (max-width: 700p) */

ul {
  width: 100%;
}
.sidebar {
  background-color: #34424D ;
  width: 15%;
  height: 100vh;
  left: 0;
  top:0;
}
.sidebarMenuItems {
display: flex;
align-items: center;
padding-top: 30%;
}

</style>

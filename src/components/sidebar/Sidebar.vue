<template>
	<header class='sidebar' data-cy='sidebar'>
    <nav class='sidebarNavigation'>
      <div class='sidebarMenuItems' data-cy='sidebarMenu'>
        <component :is='this.sidebarMenu' />
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
  },
  components: {
    InboxMenu,
  },
  data() {
    return {

    }
  },
  computed: {
    sidebarMenu() {
      return this.activeMenu
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
  background-color: #34424D;
  width: 15%;
  position:fixed;
  height: 100%;
  left: 0;
  top:0;
}
.sidebarMenuItems {
display: flex;
align-items: center;
padding-top: 30%;
}

</style>

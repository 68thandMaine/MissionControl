<template>
	<header class='sidebar'>
    <nav class='sidebarNavigation'>
      <div class='toolbarNavigationItems'>
        <component :is='this.activeMenu' />
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
.toolbarNavigationItems {
display: flex;
align-items: center;
padding-top: 30%;
}

</style>

<template>
	<header class='sidebar'>
    <nav class='sidebarNavigation'>
      <div class='toolbarNavigationItems'>
        <ul >
          <li>
            <div class='iconSpacer'>
              <font-awesome-icon icon='plus-circle' />
              <span>Add Art</span>
            </div>
          </li>
          <li>
            <div class='iconSpacer'>
              <font-awesome-icon icon='cat' />
              <span>Elenor</span>
            </div>
          </li>
          <li>
            <div class='iconSpacer' @click='viewInbox'>
              <font-awesome-icon icon='envelope' />
              <span>Emails</span>
            </div>
          </li>
          <li>
            <div class='iconSpacer'>
              <font-awesome-icon icon='portrait' />
              <span>Profile</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
	</header>
</template>

<script>
	export default {
    name: 'Sidebar',
    methods: {
      viewInbox() {
        this.$router.push({ path: '/inbox' });
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
.sidebarNavigation {

}
.toolbarNavigationItems {
display: flex;
align-items: center;
padding-top: 30%;
}

.sidebar li {
  padding: 5%;
  text-decoration: none;
  color: #EEE;
}
.iconSpacer {
  width: 100%;
  margin: 20% auto;
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
}
.iconSpacer span {
  font-size: 1.5rem;
}
.iconSpacer:hover, .iconSpacer:active {
  color: orange;
  cursor: pointer;
}
</style>

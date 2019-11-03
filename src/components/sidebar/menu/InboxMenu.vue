<template>

  <ul class='inbox_menu' data-cy='inbox_menu'>
    <li :class="{active: activeMenu === 'all'}" @click="viewAllMessages">All</li>
    <li :class="{active: activeMenu === 'unread'}" @click='viewUnreadMessages'>Unread</li>
    <li :class="{active: activeMenu === 'replied'}" @click='viewRepliedMessages'>Replied</li>
  </ul>

</template>

<script>
export default {
  name: 'InboxMenu',
  props: {
    menuToShow: String,
  },
  computed: {
    activeMenu() {
      return this.menuToShow;
    },
  },
  methods: {
    viewAllMessages() {
      this.$emit('click', 'all');
    },
    viewUnreadMessages() {
      this.$emit('click', 'unread');
    },
    viewRepliedMessages() {
      this.$emit('click', 'replied');
    },
  },
};
</script>

<style>
.inbox_menu {
  position: relative;
  top: 10vh;
  margin: 0 auto;
  top: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 0
}

.inbox_menu li{
  color: #eee;
  margin: 1rem 1.5rem;
  cursor: pointer;
  font-size: 1.5vw;
}
.active {
  border-bottom: yellow 1px solid;
}
</style>

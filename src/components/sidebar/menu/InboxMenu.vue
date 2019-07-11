<template>
<div class='inbox_menu' data-cy='inbox_menu'>
  <ul>
    <li :class="{active: activeMenu === 'all'}" @click="viewAllMessages">All</li>
    <li :class="{active: activeMenu === 'unread'}" @click='viewUnreadMessages'>Unread</li>
    <li :class="{active: activeMenu === 'replied'}" @click='viewRepliedMessages'>Replied</li>
  </ul>
</div>
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
    }
  },
  methods: {
    viewAllMessages() {
      this.$emit('click', 'all');

    },
    viewUnreadMessages() {
      this.$emit('click','unread');
    },
    viewRepliedMessages() {
      this.$emit('click', 'replied');
    },
  },
}
</script>

<style>
.inbox_menu {
  border: solid 1px #eee;
  position: relative;
  top: 10px;
}
.inbox_menu li{
  color: #eee;
  margin: 0.5rem 1.5rem;
  cursor: pointer;
}
.active {
  border-bottom: yellow 1px solid;
}
</style>

<template>
<div class='inbox_menu' data-cy='inbox_menu'>
  <ul>
    <li>All</li>
    <li>Unread</li>
    <li>Replied</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'InboxMenu',

}
</script>

<style>
.inbox_menu li{
  border-bottom: solid 1px white;
  color: #eee;
  margin: 0.5rem 1.5rem;
}
</style>

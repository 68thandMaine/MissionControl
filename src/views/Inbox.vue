<template>
  <div class='inbox_view' data-cy='inbox_view'>
    <MessageList
    :messages= 'messages'
    :filteredMessages = 'filteredMessages' />
    <Message />
  </div>
</template>

<script>

// Components
import MessageList from '../components/inbox/MessageList.vue';
import Message from '../components/inbox/Message.vue';

export default {
  name: 'MessageBox',
  props: {
    messages: Array,
    filteredMessages: String,
  },
  components: {
    MessageList,
    Message,
  },
};
</script>

<style>
.inbox_view{
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  z-index: 1;
}
</style>

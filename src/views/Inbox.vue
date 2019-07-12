<template>
  <div class='inbox_view' data-cy='inbox_view'>
    <MessageList
    :messages= 'messages'
    :filteredMessages = 'filteredMessages'
    @message='handleViewMessage'/>
    <Message />
  </div>
</template>

<script>

// Components
import MessageList from '../components/inbox/MessageList';
import Message from '../components/inbox/Message';

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
  // data() {
  //   return {

  //   };
  // },
  methods: {
    handleViewMessage(id) {
      console.log(id);
    // This method will dispatch a method to the store
    // to set the state for the message that should be displayed.
    },
  },
  mounted() {
    console.log('messagebox props', this.$route.params)
    console.log('message box props messages', this.messages)
  }
};
</script>

<style>
.inbox_view{
  border: solid 3px yellow;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
}
</style>

<template>
  <div class='inbox_view' data-cy='inbox_view'>
    <MessageList
    :messages='inbox'
    @message='handleViewMessage'/>
    <Message />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../../store/store';
// Components
import MessageList from '../components/inbox/MessageList';
import Message from '../components/inbox/Message';

export default {
  name: 'MessageBox',
  props: {
    inbox: Array,
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
    console.log('message box props inbox', this.inbox)
  }
};
</script>

<style>
.inbox_view {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>

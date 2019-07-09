<template>
  <div class='messagebox_view' data-cy='messagebox_view'>
    <Inbox
    :messages='inbox'
    @message='handleViewMessage'/>
    <Message />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../../store/store';
// Components
import Inbox from '../components/message_box/Inbox';
import Message from '../components/message_box/Message';

export default {
  name: 'MessageBox',
  props: {
    inbox: Array,
  },
  components: {
    Inbox,
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
.messagebox_view {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>

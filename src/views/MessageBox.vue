<template>
  <div>
    <Inbox
    :messages='messages'
    @message='handleViewMessage'/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../../store/store';
import Inbox from '../components/message_box/Inbox';

export default {
  name: 'MessageBox',
  components: {
    Inbox,
  },
  // data() {
  //   return {

  //   };
  // },
  mounted() {
    console.log(this.$store.state);
    console.log(this.messages);
    // this.$store.dispatch('loadMessages')
  },
  computed: {
    ...mapState({
      messages: state => state.message.messagesArray,
    }),
  },
  methods: {
    handleViewMessage(id) {
      console.log(id);
    // This method will dispatch a method to the store
    // to set the state for the message that should be displayed.
    },
  },

};
</script>

<style>

</style>

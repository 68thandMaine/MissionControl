<template>
  <div>
    <Inbox
    :messages='inbox'
    @message='handleViewMessage'/>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../../store/store';
import Inbox from '../components/message_box/Inbox';

export default {
  name: 'MessageBox',
  props: {
    inbox: Array,
  },
  components: {
    Inbox,
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

</style>

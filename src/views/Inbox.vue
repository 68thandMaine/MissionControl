<template>
  <div class='inbox_view' data-cy='inbox_view'>
    <MessageList
    v-if='!selectedMessage'
    :messages= 'messages'
    :filteredMessages = 'filteredMessages'
    @click='handleViewMessage' />
    <Message v-if='selectedMessage' />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../../store/store';
// Components
import MessageList from '../components/inbox/MessageList.vue';
import Message from '../components/inbox/Message.vue';

export default {
  name: 'MessageBox',
  props: {
    messages: Array,
    filteredMessages: String,
  },
  computed: {
    ...mapState({
      selectedMessage: state => state.message.message,
    }),
  },
  components: {
    MessageList,
    Message,
  },
  methods: {
    handleViewMessage(id) {
      store.dispatch('selectMessage', id);
    },
  },
};
</script>

<style>
.inbox_view {
  /* display: flex;
  flex-flow: row nowrap;
  position: relative;
  z-index: 1; */
}
</style>

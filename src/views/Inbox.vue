<template>
  <div class='inbox_view' data-cy='inbox_view'>
    <Toolbar />

    <MessageList
    :messages= 'messages'
    :filteredMessages = 'filteredMessages'
    @click='handleViewMessage'
     />

    <Modal :visible='showModal' @close='showModal=false'>
      <Message
        v-if='selectedMessage'
        :message='selectedMessage'
        :handleDeleteMessage = 'handleDeleteMessage'
        :handleSendMessage = 'handleSendMessage' />
    </Modal>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../../store/store';
// Components
import MessageList from '../components/inbox/MessageList.vue';
import Message from '../components/inbox/Message.vue';
import Modal from '../components/modal/Modal.vue';
import Toolbar from '../components/inbox/ToolBar';

export default {
  name: 'MessageBox',
  props: {
    messages: Array,
    filteredMessages: String,
    },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    ...mapState({
      selectedMessage: state => state.message.message,
    }),
  },
  components: {
    MessageList,
    Message,
    Modal,
    Toolbar
  },
  methods: {
    handleViewMessage(id) {
      store.dispatch('selectMessage', id);
      this.showModal=true;
    },
    handleDeleteMessage(id) {
      store.dispatch('removeMessage', id);
    },
    handleSendMessage(message) {
      store.dispatch('sendMessage', message);
      this.showModal=false;
    }
  },
};
</script>

<style scoped>
.inbox_view {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
</style>

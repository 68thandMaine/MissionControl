<template>
  <div class='inbox_view' data-cy='inbox_view'>
    <MessageList
    :messages= 'messages'
    :filteredMessages = 'filteredMessages'
    @click='handleViewMessage'
     />

    <Modal :visible='showModal' @close='showModal=false'>
      <Message
        v-if='selectedMessage'
        :message='selectedMessage'
        :handleDeleteMessage = 'handleDeleteMessage' />
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
  },
  methods: {
    handleViewMessage(id) {
      store.dispatch('selectMessage', id);
      this.showModal=true;
    },
    handleDeleteMessage(id) {
      store.dispatch('removeMessage', id);
    }
  },
};
</script>

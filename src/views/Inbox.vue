<template>
  <div class='inbox_view' data-cy='inbox_view'>
    <MessageList
    :messages= 'messages'
    :filteredMessages = 'filteredMessages'
    @click='handleViewMessage' />

    <Modal :openModal='modalOpen' >
      <Message v-if='selectedMessage' />
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
      modalOpen: false,
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
      this.modalOpen = true;
      store.dispatch('selectMessage', id);
    },
  },
};
</script>

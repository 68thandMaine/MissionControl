<template>
  <div class='inbox_view' data-cy='inbox_view'>
    <MessageList
    :messages= 'messages'
    :filteredMessages = 'filteredMessages'
    @click='handleViewMessage' />
    <v-dialog v-model='dialog' >
      <Message v-if='selectedMessage' />
    </v-dialog>
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
  data() {
    return {
      dialog: false,
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
  },
  methods: {
    handleViewMessage(id) {
      this.dialog = true;
      store.dispatch('selectMessage', id);
    },
  },
};
</script>

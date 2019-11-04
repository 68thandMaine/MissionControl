<template>
  <v-card class='mx-auto email'>
    <v-card-text>
      <div>{{message.createdAt}}</div>
      <p class="display-1 text--primary">{{message.subject}}</p>
      <p class='body-1 text--primary'>{{message.note}}</p>
      <v-spacer></v-spacer>
      <p>This message was sent from {{message.firstName}} {{message.lastName}}</p>
    </v-card-text>
    <v-card-actions class='emailOptions'>
      <Button>Reply </Button>
      <button @click='handleDeleteMessage(message.id)'>Delete</button>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import store from '../../../store/store';

import Button from '../button/Button.vue';

export default {
  name: 'Message',
  components: {
    Button,
  },
  computed: {
    ...mapState({
      message: state => state.message.message,
    }),
  },
  methods: {
    handleDeleteMessage(messageId) {
      store.dispatch('removeMessage', messageId);
    },
  },
};
</script>

<style>
.email {
  border: solid 1px red !important;
  height: 100vh;
}
.emailOptions {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
}
</style>

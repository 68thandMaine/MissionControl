<template>
  <div class='message_wrapper' data-cy='message_wrapper'>
    <div class='no_message_selected' v-if='this.message === null' data-cy='no_message_selected'>
      No message
    </div>

    <div v-else class='message' data-cy='message'>
      <div class='card'>
        <div class='card_header'>
          <p class='card_header-subject'>{{this.message.subject}}</p>
          <h4 class='card_header-date'>{{this.message.createdAt}}</h4>
          <p class='card_header-email'>{{this.message.email}}</p>
        </div>
        <div class='card_body'>
          <p>{{this.message.message}}</p>
          <p>Sincerely,</p>
          <p>{{this.message.firstName}} {{this.message.lastName}}</p>
        </div>
      </div>
      <div class='button_wrapper'>
        <button>Reply </button>
        <button @click='handleDeleteMessage(message.id)'>Delete</button>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../../../store/store';

export default {
  name: 'Message',
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
.message_wrapper {
  background: white;
  margin-top: 1vw;
  width: 75vw;
  height: 75vh;
}
.message {
  margin-top: 2vw;
}
.card {
  margin: auto;
  width: 75%;
}
.card_header {
  flex-flow: flex-start;
}
.card_header-subject {
  display: inline-block;
  margin: 0;
  font-size: 3vw;
}
.card_header-date {
  margin: auto;
  float: right;
  bottom: 0;
}
.card_header-email {
  margin: 0;
  font-size: 1.5vw
}
.card_body {
  border-top: solid 1px black;
  margin-top: 2vw;
}
.button_wrapper {
  display: flex;
  justify-content: center;
}
</style>

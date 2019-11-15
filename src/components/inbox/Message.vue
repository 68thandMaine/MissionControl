<template>
  <v-card class='mx-auto email'>
    <v-card-text>
      <div class='font-weight-black'>{{message.createdAt}}</div>
      <p class="display-4 text--primary">{{message.subject}}</p>
      <p class='display-2'>{{message.note}}</p>
      <v-spacer></v-spacer>
      <p>This message was sent from {{message.firstName}} {{message.lastName}}</p>
    </v-card-text>
    <v-card-actions class='emailOptions'>
      <Button
      buttonShape='mail'
      buttonText='Reply'
      cy='replyToMessage'
      @click='showReply=true'/>
      <Button
      buttonShape='mail'
      buttonText='Delete'
      cy='deleteMessage'
      @click='deleteMessage(message.id)' />
    </v-card-actions>
    <v-card-text class='replyWrapper' v-if='showReply' >
      <textarea
        v-model='replyResponse'
        lazy
        rows='10'
      />
      <Button
        buttonShape='mail'
        buttonText='Send'
        cy='sendMessage'
        @click='sendMessage(message)' />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import store from '../../../store/store';

import Button from '../button/Button.vue';

export default {
  name: 'Message',
  props: {
    handleDeleteMessage: Function,
    handleSendMessage: Function,
    message: Object,
  },
  data() {
    return {
    showReply: false,
    replyResponse: ''
  };
},
  components: {
    Button,
  },
  methods: {
    deleteMessage(messageId) {
      this.handleDeleteMessage(messageId)
    },
    sendMessage(message) {
      let reply = Object.assign({}, message, {
        replied: true,
        repliedMessage: this.replyResponse
      });
      this.handleSendMessage(reply);
    }
  },
};
</script>

<style>
.email {
  height: 90vh;
  padding-top: 2vw;
}
.emailOptions {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.replyWrapper {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.replyWrapper textarea{
  background: #e7e7e7;
  outline: none;
  width: 100%;
  height: auto;
  padding: 2vw;
  margin-bottom: 2vh;
}

</style>

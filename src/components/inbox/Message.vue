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
      <Button
      buttonShape='mail'
      buttonText='Reply'
      cy='replyToMessage'/>
      <Button
      buttonShape='mail'
      buttonText='Delete'
      cy='deleteMessage'
      @click='deleteMessage(message.id)' />
    </v-card-actions>
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
    message: Object,
  },
  components: {
    Button,
  },
  created() {
    console.log('message created')
  },

  methods: {
    deleteMessage(messageId) {
      this.handleDeleteMessage(messageId)
    },
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
.but {
  border: solid 1px red;
}

</style>

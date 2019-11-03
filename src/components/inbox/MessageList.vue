<template>
<div id='messageListWrapper' data-cy='messageList'>
  <div v-if="messages != '' ">
    <div id='message'
        data-cy='messages'
        v-for="(message, index) in messages"
        :key='index'
        :class="{currentMessage:index == currentMessage}"
        @click='selectMessage(index, message.id)'>
      <div class='message_details'>
        <p>{{message.subject}}</p>
        <p>{{message.createdAt}}</p>
        <!-- <div class='delete_wrapper'>
          <font-awesome-icon icon='trash' />
          <input type='checkbox'/>
        </div> -->
      </div>
      <div class='message_email'>
        <p>{{message.email}}</p>
      </div>
    </div>
  </div>
  <div v-else data-cy='noMessages'>
    <!-- <h1>Th</h1> -->
  </div>
</div>
</template>

<script>
// import store from '../../../store/store';

export default {
  name: 'MessageList',
  props: {
    messages: {
      type: Array,
      required: true,
    },
    filteredMessages: String,
    value: String,
  },
  data() {
    return {
      currentMessage: null,
    };
  },
  methods: {
    // selectMessage(index, id) {
    //   (this.currentMessage === index) ? this.currentMessage = null : this.currentMessage = index;
    //   store.dispatch('selectMessage', id);
    // },
  },
};
</script>

<style >

#messageListWrapper {
border: solid 1px red;
}
#message {

}
#message p {
  margin: 0;
}
.message_details {
  /* width: 100vw; */
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.message_email {
  width: 100vw;
}
.currentMessage {
  border-right: 2px solid goldenrod;

}

.delete_wrapper {
  z-index: 10;
}
</style>

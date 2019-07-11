<template>
<div id='messageListWrapper' data-cy='messageList'>
  <div class='currentList'>{{filteredMessages}}</div>
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
    <h1>HELP</h1>
  </div>
</div>
</template>

<script>
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
  methods:{
      selectMessage(index, id) {
        (this.currentMessage == index) ? this.currentMessage = null : this.currentMessage = index;
      }
    },
  computed: {
    // currentListTitle() {
    //   if(this.)
    // }
  },
  mounted() {
    console.log('inbox messagearray', this.messages);
  },
};
</script>

<style >

#messageListWrapper {
float: left;
/* height: 90vh; */
border: solid 3px pink;
/* position: relative; */
width: 25%;
overflow: scroll;
}
#message {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2%;
  z-index: 0;
}
#message:hover {
  cursor: pointer;
}
#message p {
  margin: 0;
  color: white;
}
.message_details {
  width:100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.message_email {
  width:100%;
}
.currentMessage {
  border-right: 2px solid goldenrod;

}

.delete_wrapper {
  z-index: 10;
}
</style>

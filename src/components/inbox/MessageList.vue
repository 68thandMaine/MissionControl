<template>
<div id='messageListWrapper' >
<div v-if="messages != '' ">
  <div id='messageList'
  data-cy='messagelist'
      v-for="(message, index) in messages"
      :key='index'>
    <div class='message_details'>
      <p>{{message.subject}}</p>
      <p>{{message.createdAt}}</p>
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
  },
  data() {
    return {

    };
  },
  computed: {
    // formattedDate() {
    // const
    // },
  },
  mounted() {
    console.log('inbox messagearray', this.messages);
  },
};
</script>

<style >

#messageListWrapper {
float: left;
position: relative;
width:20%;
}
#messageList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2%;
  border-bottom: solid 1px whitesmoke;
}
#messageList p {
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

</style>

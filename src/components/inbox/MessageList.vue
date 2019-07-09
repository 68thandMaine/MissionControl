<template>
<div id='messageListWrapper' data-cy='messagelist'>
  <div id='messageList'
      v-for="(message, index) in messages"
      :key='index'>
    <div class=''>
      <p>{{message.subject}}</p>
      <p>{{message.email}}</p>
    </div>
    <div class=''>
      <p>{{message.createdAt}}</p>
    </div>
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

<style>
#messageListWrapper {
float: left;
position: relative;
}
#messageList {
  border: 1px solid yellow;
  display: flex;
}

</style>

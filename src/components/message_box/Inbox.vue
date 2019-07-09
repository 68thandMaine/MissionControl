<template>
<div id='messageListWrapper'>
  <div id='messageList'
      v-for="(message, index) in messages"
      :key='index'>
    <h1>{{message.subject}}</h1>
    <h2>{{message.createdAt}}</h2>
  </div>
  <div id='messageWrapper'>
    hie
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inbox',
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

/* width: 100%; */
}
#messageList {

}
#messageWrapper {
  border: dashed 3px black;
  width: 85%;
}

</style>

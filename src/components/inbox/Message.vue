<template>
  <div class='message_wrapper' data-cy='message_wrapper'>
    <div class='no_message_selected' v-if='this.message === null' data-cy='no_message_selected'>
      No message
      </div>
      <div v-else>
        <div class='message' data-cy='message'>
       <h2>{{this.message.subject}}</h2>
       <h3>{{this.message.email}}</h3>
       <h4>{{this.message.createdAt}}</h4>
       <p>{{this.message.message}}</p>

        </div>
        </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../../../store/store';

export default {
name: 'Message',
  data(){
   return {

    }
  },
  computed: {
    ...mapState({
     message: state => state.message.message,
    }),
  },
  methods:{

  },
}
</script>

<style>
.message_wrapper {
  border: solid 1px maroon;
  background: white;
  width: 96%;
  height: 100%;
  margin: 0 2%;
}
</style>

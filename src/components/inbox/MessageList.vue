<template>
  <v-card
    class="mx-auto" >
    <v-list two-line class='emailList'>
      <v-list-item-group
        multiple
        active-class="#7986CB">
      <template v-for="(message, index) in messages">
        <v-list-item :key="index" @click='viewMessage(message.id)'>
          <template v-slot:default="{ active, toggle }">
            <v-list-item-content>
              <v-list-item-title
                v-text="message.firstName + ' ' + message.lastName"></v-list-item-title>
              <v-list-item-subtitle
              class="text--primary"
              v-text="message.subject"></v-list-item-subtitle>
              <v-list-item-subtitle v-text="message.note"/>
              </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text v-text="message.createdAt"></v-list-item-action-text>
            </v-list-item-action>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
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
  methods: {
    viewMessage(id) {
      this.$emit('click', id);
    },
  },
};
</script>

<style >
  .toolbar {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
  }
  .emailList {
    margin-top: 6vh;
  }
</style>

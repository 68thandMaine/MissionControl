<template>
  <v-dialog v-model='this.openModal'>
    <slot />
  </v-dialog>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    openModal: Boolean,
  }
};
</script>

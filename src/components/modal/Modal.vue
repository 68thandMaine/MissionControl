<template>
  <v-dialog  v-model='show' >
    <!-- <div @click.stop='show=false'> -->
      <slot />
    <!-- </div> -->
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import store from '../../../store/store';

export default {
  name: 'Modal',
  props: {
    visible: Boolean
  },
  computed: {
   show: {
     get () {
       return this.visible
     },
     set (value) {
       if(!value) {
         this.$emit('close');
       }
     }
   },
  }
};
</script>




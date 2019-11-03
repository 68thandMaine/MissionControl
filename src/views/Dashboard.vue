<template>
  <NavBar />
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/navigation/NavBar.vue';

export default {
  name: 'Dashboard',
  components: {
    NavBar,
  },
  methods: {
    openSidebar() {
      this.$emit('click');
    },
  },
};
</script>

<style>
h1 {
  color: white;
}
</style>

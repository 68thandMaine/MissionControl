<template>
  <div id='dashboard_wrapper'>
    <h1>It's me im the dashboard</h1>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Dashboard',
  components: {

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

<template>
  <div class="callback"></div>
</template>

<script>
export default {
  name: 'callback',
  mounted() {
    this.$auth.handleAuthentication().then((data) => {
      this.$router.push({ name: 'home' });
    });
  },
};
</script>

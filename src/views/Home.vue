<template>
  <div id='dashboardWrapper'>
    <Sidebar />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/navigation/Sidebar';

export default {
  name: 'home',
  components: {
  Sidebar
  },
  created() {
    console.log(process.env.VUE_APP_AUTH0_DOMAIN);
  },
};
</script>

<style>
  #dashboardWrapper {
    height: 100vh;
  }
</style>

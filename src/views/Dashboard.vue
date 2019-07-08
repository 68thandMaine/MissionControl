<template>
  <div>
    <SidebarButton @click='openSidebar' />
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarButton from '@/components/navigation/SidebarToggleButton';

export default {
  name: 'Dashboard',
  components: {
    SidebarButton,
  },
  methods: {
    openSidebar() {
      this.$emit('click')
    },
    },
};
</script>

<style>
  #contentWrapper{
    width: 100%;
  }
</style>

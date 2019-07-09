<template>
  <button class='toggleButton' @click='handleClick' data-cy='sidebar_button'>
    hi
    <div class='toggleButtonLine'/>
    <div class='toggleButtonLine'/>
    <div class='toggleButtonLine'/>
  </button>
</template>

<script>
export default {
  name: 'SidebarToggleButton',
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style>
.toggleButton {
  /* position: absolute; */
  background: transparent;
  border: none;
  cursor: pointer;
}
.toggleButtonLine {

}
</style>

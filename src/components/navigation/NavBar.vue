<template>
    <nav class='moblieNavBar'>
      <div class='row'>
        <Button
          buttonShape='circle'
          navTo = 'inbox'
          :icon="true"
          iconName='envelope'
          @click='viewInbox'
         />
        <Button
          buttonShape='circle'
          navTo = ''
          :icon="true"
          iconName='plus-circle'
         />
      </div>
      <div class='row'>
        <Button
          buttonShape='circle'
          navTo = '/'
          :icon="true"
          iconName='home'
          @click='handleClick'
         />
      </div>
      <div class='row'>
        <Button
          buttonShape='circle'
          navTo = 'elenor'
          :icon="true"
          iconName='cat'
         />
        <Button
          buttonShape='circle'
          navTo = 'profile'
          :icon="true"
          iconName='portrait'
         />
      </div>
      </nav>
</template>

<script>
import Button from '../button/Button.vue';

export default {
  name: 'NavBar',
  components: {
    Button,
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
    viewHome() {
      this.$router.push({ path: '/' });
      this.$emit('click');
    },
    viewInbox() {
      this.$router.push({ path: '/inbox' });
    },
    viewElenor() {
    // this.$router.push({ path:'/inbox' });
      this.$emit('click');
    },
    viewProfile() {
    // this.$router.push({ path:'/inbox' });
      this.$emit('click');
    },
    viewNewContent() {
    // this.$router.push({ path:'/inbox' });
      this.$emit('click');
    },
  },
};
</script>

<style>
@media screen and (min-width: 320px) {
  .moblieNavBar {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    height: 50vh;
  }
  .row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
}
</style>

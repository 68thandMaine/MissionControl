<template>
<b-container id='container'>
  <b-row>
    Hello
  </b-row>
  <b-row>
  <form @submit.prevent='handleSubmit' autocomplete='off' class='profileForm_Container'>
    <Input
      type='text'
      id='firstName'
      name='firstName'
      v-model='firstName.value'
      data-cy='firstName'>
      First Name
      </Input>
    <Input
      type='text'
      id='lastName'
      name='lastName'
      v-model='lastName.value'
      data-cy='lastName'>
      Last Name
      </Input>
    <Input
      type='text'
      id='displayName'
      name='displayName'
      v-model='displayName.value'
      data-cy='displayName'>
      Display Name
      </Input>
   <Input
      type='text'
      id='email'
      name='email'
      v-model='email.value'
      data-cy='email'>
      Email
      </Input>
    <Input
      type='text'
      id='greeting'
      name='greeting'
      v-model='greeting.value'
      data-cy='greeting'>
      How will you greet people
      </Input>
    <Input
      type='textarea'
      id='biography'
      name='biography'
      v-model='biography.value'
      data-cy='biography'>
      Write something about yourself
      </Input>
    <Input
      type='file'
      id='picture'
      name='picture'
      data-cy='picture'>
      Choose a picture of yourself
      </Input>
    <Input
      type='text'
      id='website'
      name='website'
      v-model='websites.value'
      data-cy='website'>
      List a website
      </Input>
      <button type='submit'>Submit</button>
  </form>
  </b-row>
</b-container>
</template>

<script>
import { setTimeout } from 'timers';
import Input from '../../components/Input';

export default {
  name: 'NewProfile',
  components: {
    Input,
  },
  data() {
    return {
      displayName: '',
      firstName: '',
      lastName: '',
      email: '',
      greeting: '',
      biography: '',
      picture: '',
      websites: [{
        value: ''
      }],

      successMessage: false
    };
  },
  methods: {
    handleSubmit(){
      let file = document.querySelector('#picture')
      const newProfile = {
        displayName: this.displayName,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        greeting: this.greeting,
        biography: this.biography,
        // picture: file.files[0],
        websites: this.websites
      };
      // this.$store.dispatch('addProfile', newProfile).then((response) => {
        // console.log(response);
      // })
      this.cleanUp()
    },
    cleanUp(){
      // this.showMessage()
      this.clearInput()
    },
    clearInput() {
     this.displayName = '',
     this.firstName = '',
     this.lastName = '',
     this.email = '',
     this.greeting = '',
     this.biography = '',
    //  this.picture = '',
     this.websites = [{value: ''}]
    },
    // showMessage() {
      // This function will be used to show a modal that comes and goes
      // and reroutes to the home page
      // this.successMessage = true;
      // setTimeout(() => {
        // this.goBackHome();
      // }, 3000)
    // },
    // goBackHome() {
    //   this.$router.push({
    //     path: '/dashboard'
    //   });
    // },
  },
}
</script>

<style>
#container {
  border: solid 1px black;
  height: 100vh;
}

.profileForm_Container {
  border: dashed 3px orange;

}
</style>

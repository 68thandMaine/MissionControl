<template>

  <button
    :class="['btn', buttonStyle]"
    :data-cy="testingId"
    @click='handleClickEvent'>
      <!-- <font-awesome-icon
        v-if="iconButton"
        :icon='iconName' /> -->
    {{text}}
  </button>

</template>

<script>
export default {
  Name: 'Button',
  props: {
    buttonShape: String,
    buttonText: String,
    cy: String,
    icon: Boolean,
    iconName: String,
  },
  data() {
    return {
      buttonStyle: this.buttonShape,
      iconButton: this.icon,
      iconType: this.iconName,
      text: this.buttonText,
      testingId: this.cy,
    };
  },
  methods: {
    handleClickEvent() {
      this.$emit('click');
    },
  },
};
</script>

<style>
.btn {
    outline:none;
    background-image: -webkit-linear-gradient(#e8e8e8 0%, #d6d6d6 100%);
    background-image: linear-gradient(#e8e8e8 0%, #d6d6d6 100%);
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.66);
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
    transition: .4s;
}
.circle {
  width: 122px;
  font-size: 20px;
  height: 120px;
  line-height: 120px;
  border-radius: 50%;
  border-bottom: solid 3px #549fa9;
  box-shadow: inset 0px 3px 0 rgba(255,255,255,0.3), 0 3px 3px rgba(0, 0, 0, 0.3);
  color: rgba(3, 169, 244, 0.54);
}
.mail {
  width: 33%;
  font-size: 1.5rem;
}

</style>

<template>

  <button
    :class="['btn', buttonStyle]"
    :data-cy="testingId"
    @click='handleClickEvent'>
      <font-awesome-icon
        v-if="iconButton"
        :icon='iconName' />
    {{view}}
  </button>
  <!-- <router-link
    v-if='iconButton'
    :to="view"
    class='btn'
    >
    <font-awesome-icon class='fa' @click="handleClickEvent" :icon="iconType" />
  </router-link> -->


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
    navTo: String,
  },
  data() {
    return {
      buttonStyle: this.buttonShape,
      iconButton: this.icon,
      iconType: this.iconName,
      text: this.buttonText,
      testingId: this.cy,
      view: this.navTo,
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
    text-decoration: none;
    background-image: -webkit-linear-gradient(#e8e8e8 0%, #d6d6d6 100%);
    background-image: linear-gradient(#e8e8e8 0%, #d6d6d6 100%);
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.66);
    width: 122px;
    font-size: 20px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
    box-shadow: inset 0px 3px 0 rgba(255,255,255,0.3), 0 3px 3px rgba(0, 0, 0, 0.3);
    border-bottom: solid 3px #549fa9;
    transition: .4s;
    color: rgba(3, 169, 244, 0.54);
}
.circle {
 border-radius: 50%;
}

</style>

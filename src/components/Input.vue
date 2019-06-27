<template>
    <div class='user-input'>
        <label class='labelslot' :for="name">
            <slot class="labelslot"></slot>
        </label>
        <input
            :class="type"
            :id='id'
            :data-cy="this['dataCy']"
            :type="type"
            :placeholder="placeholder"
            :required="required"
            :name="name"
            :value="value"
            @input="this.$emit('input', event.target.value)"
        >
    </div>
</template>

<script>

export default {
  name: 'UserInput',
  props: ['name', 'id', 'value', 'type', 'placeholder', 'required', 'data-cy'],
  computed: {
    convertDataCy() {
      return this['data-cy'];
    },
  },
  methods: {
    handleInput(event) {
      if (this.type === 'checkbox') {
        this.$emit('input', event.target.checked);
      } else {
        this.$emit('input', event.target.value);
      }
    },
  },
};

</script>

<style scoped>
    /* .text {
        width: 100%;
        font-size:15px;
        margin: 2px 0 0;
        -webkit-box-sizing: border-box;
        background:white;
        box-sizing: border-box;
        border-radius: 5px;
        border: 2px solid #666666;
        transition: background .4s ease-in-out;
        -moz-transition: background .4s ease-in-out;
        -webkit-transition: background .4s ease-in-out;
        padding: 10px 44px 10px 10px;
    }
    .text:focus {
        background: #fff;
        border: 2px solid #f60;
        outline: none;
    }
    .checkbox {
        text-align: center;
    }
    .labelslot {
        font-size: 13px;
        font-weight: 700;
        color: #555555;
        text-transform: uppercase;
    }
    .user-input {
        margin-top: 20px;
    } */
</style>

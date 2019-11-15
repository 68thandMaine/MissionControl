# Lessons From The Grind

## Table of Contents

### [Creating The Modal Component](#modal-component)

___

## Modal Component

- **Issue:** The issue I encountered came from wrapping the Vuerify `<v-dialog>` component from Vuetify inside of a component.

- **Behavior:** The normal behavior of the Vuetify component is to hide the modal when clicking outside of it's child component. If a click outside the child occurs, a property of the local data object is set to false, and the modal will close. The issue I encounter issue I encouter stems from the location of the state determining whether or not the modal will be displayed. By creating a resusable component to hold the dialog I need a container component to hold the state of the `<v-dialog>`. My solution sets the value to `null` rather than `false`.

- **Solution:** 
> Found from [StackOverflow, Dal'Pizzol, 2018](https://stackoverflow.com/questions/48035310/open-a-vuetify-dialog-from-a-component-template-in-vuejs)

1. The first step was to create a `data()` property to `false` that will determine if the Modal is shown or not.

```javascript
data() {
  return {
    showModal: false
  };
},
```
2. Then pass the Modal component two props:
    - `visible` - This is bound to the `showModal` data property and is a bool value that sets the visibility of the Modal.
    - `@close` -  This is the event name that will be triggered insdie of the Modal component that sets the state in the container to false, thus hiding the Modal.

3. In the Modal Component create a computed property with a getter and a setter.
    - The getter will  return the `visibl` prop value. This defaults to false.
    - The setter is passed a value (false). If no value is passed then an event is emitted to the parent. In this case it is the `@close` event which closes the Modal.

```javascript
Modal.vue

 computed: {
   show: {
     get () {
       return this.visible
     },
     set (value) {
       if(!value) {
         this.$emit('close');
       }
     }
   },
   ```

```javascript
Inbox.vue
<Modal :visible='showModal' @close='showModal=false'>
      <Message
        v-if='selectedMessage'
        :message='selectedMessage'
        :handleDeleteMessage = 'handleDeleteMessage' />
    </Modal>
  </div>
</template>

<script>
// ...Import statements;
export default {
  name: 'MessageBox',
  props: {//...props},
  data() {
    return {
      showModal: false,
    };
  },
  ```

- **Reusability:**
If I want to use the Modal component anywhere, all I need to do is have a property in the container component called `showModal` that will be set with a `:visibility` name. A possible error might be if multiple modals appear in the DOM.

> Nov 12, 2019
___


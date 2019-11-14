# Lessons From The Grind

## Table of Contents

### [Creating The Modal Component](#modal-component)

___

## Modal Component

- **Issue:** The issue I encountered came from wrapping the Vuerify `<v-dialog>` component from Vuetify inside of a component. 

- **Behavior:** The normal behavior of the Vuetify component is to hide the modal when clicking outside of it's child component. If a click outside the child occurs, a property of the local data object is set to false, and the modal will close. The issue I encounter issue I encouter stems from the location of the state determining whether or not the modal will be displayed. By creating a resusable component to hold the dialog I need a container component to hold the state of the `<v-dialog>`. My solution sets the value to `null` rather than `false`.

- **Solution:** 
> Found from [StackOverflow, Dal'Pizzol, 2018](https://stackoverflow.com/questions/48035310/open-a-vuetify-dialog-from-a-component-template-in-vuejs)


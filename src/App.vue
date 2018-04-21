<template>
  <div id="app">
    <se-input type="text" placeholder-text="Search..." />
    <se-input v-model="inputData" focus type="text" placeholder-text="Search..." />
    <se-input v-model="inputData" loading icon="search" type="text" placeholder-text="Search..." />
    <se-input v-model="inputData" loading icon="search" icon-position="left" type="text" placeholder-text="Search..." />
    <se-input v-model="inputData" disabled type="text" placeholder-text="search..." />
    <se-input v-model="inputData" disabled icon="search" type="text" placeholder-text="search..." />
    <se-input v-model="inputData" error type="text" placeholder-text="Search..." />
    <se-input v-model="inputData" icon="search" type="text" placeholder-text="Search..." />
    <se-input v-model="inputData" icon="users" icon-position="left" type="text" placeholder-text="Search..." />
    <se-input v-model="inputData" label-position="left" type="text" placeholder-text="mysite.com">
      <se-label slot="left-label">http://</se-label>
    </se-input>
    <se-input v-model="inputData" label-position="right" type="text" placeholder-text="http://mysite">
        <se-label tag>.com</se-label>
    </se-input>
    <se-input v-model="inputData" label-position="left corner" type="text" placeholder-text="Search..">
      <se-label corner="left" slot="left-label">
        <i class="asterisk icon"></i>
      </se-label>
    </se-input>
    <se-input v-model="inputData" type="text" action action-position="right" placeholder-text="Search...">
      <se-button slot="right-action">Search</se-button>
    </se-input>
    <se-input v-model="inputData" type="text" action action-position="left" placeholder-text="Checkout...">
      <se-button slot="left-action" color="teal" icon="cart" label="Checkout" />
    </se-input>
    <se-input v-model="inputData" type="text" action action-position="right" placeholder-text="Search">
      <se-button slot="right-action" color="teal" icon="cart" label="Done" label-position="right" />
    </se-input>
    <se-input v-model="inputData" type="text" placeholder-text="Amount" label-position="right">
      <se-label slot="left-label">$</se-label>
      <se-label slot="right-label" basic>0.00</se-label>
    </se-input>
    <se-input v-model="inputData" type="text" placeholder-text="testing" />
    {{inputData}}
  </div>
</template>

<script>
import SeInput from './elements/Input/SeInput.vue'
import SeLabel from './elements/Label/SeLabel.vue'
import SeButton from './elements/Button/SeButton.vue'

export default {
  name: 'App',
  data () {
    return {
      inputData: ''
    }
  },
  components: {
    SeInput,
    SeLabel,
    SeButton
  }
}

</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>

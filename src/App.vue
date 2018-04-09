<template>
  <div id="app">
    <se-header as="h1">Hello World</se-header>
    <se-header as="h2" in-class="icon" icon="circular users">Friends</se-header>
    <se-header as="h2" subheader>Price</se-header>
    <se-header as="h2" icon="plug" content="Uptime Guartentee" />
    <se-header as="h2" icon="settings" content="Account Settings">
      <se-sub-header slot="subheader">Manage your prefs</se-sub-header>
    </se-header>
    <se-header as="h2">
      Account settings
      <se-sub-header slot="subheader">Manage your account settings</se-sub-header>
    </se-header>
    <se-header as="h1" disabled>Disabled header</se-header>
    <se-header as="h2" block>Block Header</se-header>
    <se-header as="h3" color="red" justified>This should take up the full width even if only one line</se-header>
    <div class="ui inverted segment">
      <se-header as="h4" inverted>Inverted heading</se-header>
    </div>
  </div>
</template>

<script>
import SeHeader from './elements/Header/SeHeader.jsx'
import SeSubHeader from './elements/Header/SeSubHeader.jsx'

export default {
  name: 'App',
  components: {
    SeHeader,
    SeSubHeader
  }
}

</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>

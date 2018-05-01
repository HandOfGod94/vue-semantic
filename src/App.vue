<template>
  <div id="app">
    <se-header as="h2">First Header</se-header>
    <se-header
      as="h2"
      icon-header
      icon="settings"
      content="Account settings"
      subheader="Manage your account settings and e-mail prefs"
    />
    <se-header as="h2" icon-header icon="settings">
      <template slot="content">Account Settings</template>
      <template slot="subheader">Manage your account settings and email prefs</template>
    </se-header>
    <se-header as="h2" icon="circular users" icon-header align="center">Friends</se-header>
    <se-header as="h2" sub> Price </se-header>
    <span>$10.99</span>
    <se-header as="h2">
      <se-image src="static/user.png" />
      <template slot="content">Plugins</template>
      <template slot="subheader">Check out our plugins</template>
    </se-header>
    <se-header as="h2" content="Plugins" subheader="Checkout our plugins">
      <se-image src="static/user.png" />
    </se-header>
    <se-header as="h2" block>Block header</se-header>
    <se-header float="right" as="h2" block>Block header</se-header>
  </div>
</template>

<script>
import SeHeader from './elements/Header/SeHeader'
import SeImage from './elements/Image/SeImage.vue'

export default {
  name: 'App',
  components: {
    SeHeader,
    SeImage
  }
}

</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>

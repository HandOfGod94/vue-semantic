<template>
  <div id="app">
    <se-label>
      <i class="mail icon"></i>Hello
    </se-label>
    <se-label as='a' image>
      <img :src="imageSrc">
      VueJs
      <se-label-detail>A javascript Framework</se-label-detail>
    </se-label>
    <form class="ui field form">
      <input type="text" placeholder="First name">
      <se-label pointing="left" basic color="red">Please Enter a value</se-label>
    </form>
    <se-image as="div">
      <se-label as="a" corner="right">
        <i class="heart icon"></i>
      </se-label>
      <img :src="imageSrc">
    </se-image>
    <se-label tag>New</se-label>
    <se-label tag color="red">Upcoming</se-label>
    <se-image as="div">
      <se-label ribbon color="black">
        <i class="hotel icon"></i>VueJS
      </se-label>
      <img :src="imageSrc" alt="">
    </se-image>
    <se-label horizontal color="orange">Fruit</se-label> Orange
    <div class="ui compact menu">
      <a class="item">
        <i class="icon mail"></i> Messages
        <se-label floating color="red">22</se-label>
      </a>
    </div>
    <se-label size="huge">Huge Label</se-label>
  </div>
</template>

<script>
import SeLabel from './elements/Label/SeLabel'
import SeLabelDetail from './elements/Label/SeLabelDetail'
import SeImage from './elements/Image/SeImage'
import logo from '@/assets/logo.png'

export default {
  name: 'App',
  data () {
    return {
      imageSrc: logo
    }
  },
  components: {
    SeLabel,
    SeLabelDetail,
    SeImage
  }
}

</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>

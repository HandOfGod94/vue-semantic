<template>
  <div id="app">
    <se-item-group>
      <se-item :item="item"  />
      <se-item :item="item"  />
      <se-item :item="item"  />
    </se-item-group>
    <div class="ui list">
      <se-item :item="listItem" />
      <se-item :item="listItem" />
      <se-item :item="listItem" />
    </div>
  </div>
</template>

<script>
import SeItemGroup from './views/Item/SeItemGroup.vue'
import SeItem from './views/Item/SeItem.vue'
import { Item } from './utils/ItemType'

export default {
  name: 'App',
  data () {
    return {
      // item: {
      //   image: {
      //     as: 'div',
      //     src: 'static/user.png',
      //     size: 'small'
      //   },
      //   content: 'Hello World'
      // },
      item: {
        image: {
          as: 'div',
          src: 'static/user.png',
          size: 'small'
        },
        content: {
          verticalAlign: 'middle',
          header: { as: 'a', content: '12 years a slave' }
        }
      },
      listItem: new Item({
        icon: 'user',
        content: 'Semantic UI'
      })
    }
  },
  components: {
    SeItemGroup,
    SeItem
  }
}
</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>

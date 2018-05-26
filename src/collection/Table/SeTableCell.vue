<template>
  <td :class="classObject">
    <component :is="currentComponent"
      type="text"
      v-model="currentData"
      @click="toggleEditable">
      {{content}}
    </component>
  </td>
</template>

<script>
import SeInput from '../../elements/Input/SeInput'

export default {
  name: 'se-table-cell',
  data () {
    return {
      currentComponent: 'span',
      currentData: this.content
    }
  },

  props: {
    content: [String, Number, Object],
    positive: Boolean,
    negative: Boolean,
    error: Boolean,
    warning: Boolean,
    active: Boolean,
    disabled: Boolean,
    editable: Boolean
  },

  methods: {
    toggleEditable () {
      if (this.editable) {
        this.currentComponent = 'se-input'
      }
    }
  },

  computed: {
    classObject () {
      return {
        positive: this.positive,
        negative: this.negative,
        error: this.error,
        warning: this.warning,
        active: this.active,
        disabled: this.disabled,
        editable: this.editable
      }
    }
  },

  components: {
    SeInput
  }
}

</script>

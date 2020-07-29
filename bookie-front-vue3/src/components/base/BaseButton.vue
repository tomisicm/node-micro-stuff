<template>
  <button
    :type="type"
    :class="className"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <div class="with-icon" v-if="this.$slots.icon">
      <slot name="icon"></slot>
    </div>
    <slot />
  </button>
</template>

<script  lang="ts">
import { BUTTON_TYPES, BUTTON_VARIATIONS } from './constants'

export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },

    type: {
      type: String,
      required: false,
      default: 'button',
      validator(value) {
        return BUTTON_TYPES.indexOf(value) !== -1
      }
    },

    variation: {
      type: String,
      required: false,
      default: 'primary',
      validator(value) {
        return BUTTON_VARIATIONS.indexOf(value) !== -1
      }
    },

    fullWidth: {
      type: Boolean,
      required: false,
      default: false
    },

    buttonClasses: {
      type: String,
      required: false,
      default: ''
    }
  },

  computed: {
    className() {
      return `
        ${this.type}
        ${this.fullWidth ? 'btn--full' : ''}
        ${this.buttonClasses}
      `
    }
  }
}
</script>

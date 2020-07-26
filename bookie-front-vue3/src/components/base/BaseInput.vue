<template>
  <div :class="wrapperClasses">
    <div class="input__ctn">
      <input
        :tabindex="tabindex"
        :name="name"
        :class="inputClasses"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :autofocus="autofocus"
        :disabled="disabled"
        :value="modelValue"
        :autocomplete="autocomplete"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="$emit('blur', $event.target.value)"
        @focus="$emit('focus', $event.target.value)"
      />
      <span v-if="requiredAsterisk" class="input__required">*</span>
    </div>
    <div v-if="$slots['error-list']" class="input__error_ctn">
      <slot name="error-list" />
    </div>
  </div>
</template>

<script>
import { INPUT_TYPES } from './constants'

export default {
  name: 'base-input',

  computed: {
    wrapperClasses() {
      let classes = this.wrapperBaseClasses

      if (this.errorMessage) {
        classes += ' has-error'
      }

      if (this.modelValue) {
        classes += ' has-text'
      }

      return classes
    }
  },

  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
      validator(value) {
        return INPUT_TYPES.indexOf(value) !== -1
      }
    },

    name: {
      type: String,
      required: false,
      default: ''
    },

    autocomplete: {
      type: String,
      required: false,
      default: 'off'
    },

    placeholder: {
      type: String,
      required: false,
      default: 'PLEASE_SPECIFY'
    },

    required: {
      type: Boolean,
      required: false,
      default: false
    },

    autofocus: {
      type: Boolean,
      required: false,
      default: false
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false
    },

    modelValue: {
      type: [String, Number],
      required: false,
      default: ''
    },

    errorMessage: {
      type: String,
      required: false,
      default: ''
    },

    tabindex: {
      type: Number,
      required: false,
      default: 0
    },

    wrapperBaseClasses: {
      type: String,
      required: false,
      default: ''
    },

    inputClasses: {
      type: String,
      required: false,
      default: ''
    },

    requiredAsterisk: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

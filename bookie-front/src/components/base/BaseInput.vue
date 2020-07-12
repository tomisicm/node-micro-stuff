<template>
  <div :class="wrapperClasses">
    <div class="cf-c-input__ctn">
      <input
        :tabindex="tabindex"
        :name="name"
        :class="'cf-c-input__field ' + inputClasses"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :autofocus="autofocus"
        :disabled="disabled"
        :value="value"
        :autocomplete="autocomplete"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur', $event.target.value)"
        @focus="$emit('focus', $event.target.value)"
      />
      <span v-if="requiredAsterisk" class="cf-c-input__required">*</span>
    </div>
    <span v-if="!!errorMessage" class="cf-c-input__error">{{
      errorMessage
    }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { INPUT_TYPES } from './constants'
export default Vue.extend({
  name: 'base-input',
  computed: {
    wrapperClasses() {
      let classes = this.wrapperBaseClasses

      if (this.errorMessage) {
        classes += ' cf-has-error'
      }

      // if (this.hasAbsolutePositionError) {
      //   classes += ' cf-has-absolute-errors'
      // }

      if (this.value) {
        classes += ' cf-has-text'
      }

      // if (this.isWithinText) {
      //   classes += ' cf-c-input--within-text'
      // }

      // if (this.heightSm) {
      //   classes += ' cf-c-input--h-sm'
      // }

      // if (this.heightXs) {
      //   classes += ' cf-c-input--h-xs'
      // }

      // if (this.heightAuto) {
      //   classes += ' cf-c-input--h-auto'
      // }

      // if (this.widthXs) {
      //   classes += ' cf-c-input--w-xs'
      // }

      // if (this.widthSm) {
      //   classes += ' cf-c-input--w-sm'
      // }

      // if (this.width60) {
      //   classes += ' cf-c-input--w-60'
      // }

      // if (this.fullWidth) {
      //   classes += ' cf-c-input--full-width'
      // }

      if (this.noBorders) {
        classes += ' cf-c-input--no-borders'
      }

      if (this.borderRadius) {
        classes += ' cf-c-input--border-radius'
      }

      if (this.textCenter) {
        classes += ' cf-c-input--text-center'
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

    value: {
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

    // hasAbsolutePositionError: {
    //   type: Boolean,
    //   required: false,
    //   default: false
    // },

    // isWithinText: {
    //   type: Boolean,
    //   required: false,
    //   default: false
    // },

    // heightSm: {
    //   type: Boolean,
    //   required: false,
    //   default: false
    // },

    // heightXs: {
    //   type: Boolean,
    //   required: false,
    //   default: false
    // },

    // heightAuto: {
    //   type: Boolean,
    //   required: false,
    //   default: false
    // },

    // widthXs: {
    //   type: Boolean,
    //   required: false,
    //   default: false
    // },

    // widthSm: {
    //   type: Boolean,
    //   required: false,
    //   default: false
    // },

    // width60: {
    //   type: Boolean,
    //   required: false,
    //   default: false
    // },

    // fullWidth: {
    //   type: Boolean,
    //   required: false,
    //   default: false
    // },

    wrapperBaseClasses: {
      type: String,
      required: false,
      default: ''
    },

    noBorders: {
      type: Boolean,
      required: false,
      default: false
    },

    inputClasses: {
      type: String,
      required: false,
      default: ''
    },

    borderRadius: {
      type: Boolean,
      required: false,
      default: false
    },

    requiredAsterisk: {
      type: Boolean,
      required: false,
      default: false
    },

    textCenter: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>

<template>
  <div>
    <div :class="checkboxWrapperClasses">
      <div :class="checkboxTitleClasses">
        <slot name="title" />
      </div>
      <input
        :checked="value"
        :disabled="disabled"
        type="checkbox"
        :class="'form-check-input ' + checkboxInputClasses"
        @change="$emit('input', $event.target.checked)"
      />
    </div>

    <label :class="'form-check-label ' + checkboxLabelClasses">
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },

    value: {
      type: Boolean,
      required: true
    },

    checkboxInputClasses: {
      type: String,
      required: false,
      default: ''
    },

    checkboxLabelClasses: {
      type: String,
      required: false,
      default: ''
    },

    checkboxWrapperClasses: {
      type: String,
      required: false,
      default: ''
    },

    checkboxTitleClasses: {
      type: String,
      required: false,
      default: ''
    }
  }
})
</script>

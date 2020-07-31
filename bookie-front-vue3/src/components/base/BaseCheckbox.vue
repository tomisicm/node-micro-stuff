<template>
  <div>
    <div :class="checkboxWrapperClasses">
      <div :class="checkboxTitleClasses">
        <slot name="title" />
      </div>
      <input
        :checked="modelValue"
        :disabled="disabled"
        type="checkbox"
        :class="'form-check-input ' + checkboxInputClasses"
        @change="$emit('update:modelValue', $event.target.checked)"
      />
    </div>

    <label :class="'form-check-label ' + checkboxLabelClasses">
      <slot />
    </label>
  </div>
</template>

<script  lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },

    modelValue: {
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

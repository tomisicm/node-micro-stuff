<template>
  <div :class="wrapperClasses">
    <label :class="labelWrapperClasses">
      <input
        :disabled="disabled"
        :class="inputClasses"
        type="radio"
        :value="radioValue"
        :name="name"
        :checked="checked || value === radioValue"
        @change="$emit('input', $event.target.value)"
      />

      <span :class="labelClasses">
        <slot>{{ label }}</slot>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    },

    label: {
      type: String,
      required: false,
      default: ''
    },

    radioValue: {
      type: [String, Boolean, Number],
      required: true
    },

    value: {
      type: [String, Boolean, Number],
      required: true
    },

    checked: {
      type: Boolean,
      required: false,
      default: false
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false
    },

    wrapperClasses: {
      type: String,
      required: false,
      default: ''
    },

    labelWrapperClasses: {
      type: String,
      required: false,
      default: ''
    },

    inputClasses: {
      type: String,
      required: false,
      default: ''
    },

    labelClasses: {
      type: String,
      required: false,
      default: ''
    }
  }
})
</script>

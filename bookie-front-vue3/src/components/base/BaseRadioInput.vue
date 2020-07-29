<template>
  <div :class="wrapperClasses">
    <label :class="labelWrapperClasses">
      <input
        :disabled="disabled"
        :class="inputClasses"
        type="radio"
        :value="modelValue"
        :name="name"
        :checked="checked || modelValue === radioValue"
        @change="$emit('update:modelValue', $event.target.value)"
      />

      <span :class="labelClasses">
        <slot>{{ label }}</slot>
      </span>
    </label>
  </div>
</template>

<script  lang="ts">
export default {
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

    modelValue: {
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
}
</script>

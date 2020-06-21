<template>
  <div>
    <div>my account details</div>
    <div>{{ JSON.stringify(currentUser) }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import useUser from '@/hooks/useUser'

export default Vue.extend({
  name: 'MyAccount',
  setup() {
    const {
      currentUser
    } = useUser()

    return { currentUser }
  }
})
</script>

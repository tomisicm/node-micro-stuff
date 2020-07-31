<template>
  <div>
    <div>my account details</div>
    <div>{{ JSON.stringify(currentUser) }}</div>
  </div>
</template>

<script  lang="ts">
import { defineComponent } from 'vue'
import useUser from '@/hooks/useUser.ts'

export default defineComponent({
  name: 'MyAccount',
  setup() {
    const {
      currentUser
    } = useUser()

    return { currentUser }
  }
})
</script>

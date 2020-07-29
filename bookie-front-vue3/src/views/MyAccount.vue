<template>
  <div>
    <div>my account details</div>
    <div>{{ JSON.stringify(currentUser) }}</div>
  </div>
</template>

<script  lang="ts">
import useUser from '@/hooks/useUser.ts'

export default {
  name: 'MyAccount',
  setup() {
    const {
      currentUser
    } = useUser()

    return { currentUser }
  }
}
</script>

<template>
  <div>
    <div>my account details</div>
    <div>{{ JSON.stringify(currentUser) }}</div>
  </div>
</template>

<script>
import useUser from '@/hooks/useUser.js'

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

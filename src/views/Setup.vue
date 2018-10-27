<template>
  <div v-if="checkSetup">
    <div v-if="needSetup">
      <h1>Hello World</h1>
    </div>
    <div v-else>
      <h1>You need not any setup</h1>
    </div>
  </div>
</template>

<script>
import Service from '@/models/Service'

export default {
  data () {
    return {
      checkSetup: false,
      needSetup: false
    }
  },

  created () {
    Service.isSetup()
      .then(({ needSetup }) => {
        this.checkSetup = true
        this.needSetup = needSetup
      })
  }
}
</script>

<style>
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Auth from '@/models/Auth'
import Service from '@/models/Service'

export default {
  mounted () {
    if (this.$route.meta.needAuth) {
      this.checkAuthenticated()
    }
  },
  methods: {
    ...mapActions(['setUser', 'setService']),
    async checkAuthenticated () {
      try {
        const promiseBasicInfomations = [Auth.getMe(), Service.find()]
        const result = await Promise.all(promiseBasicInfomations)
        const { user } = result[0]
        const service = result[1]
        this.setUser(user)
        this.setService(service)
      } catch (error) {
        this.$router.replace('login')
      }
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic");

html,
body {
  font-family: "Nanum Gothic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

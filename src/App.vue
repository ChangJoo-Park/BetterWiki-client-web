<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Auth from '@/models/Auth'

export default {
  created () {
    this.checkAuthenticated()
  },
  methods: {
    checkAuthenticated () {
      return Auth.getMe()
        .then(response => {
          console.error(response)
        })
        .catch(error => {
          console.error(error)
          this.$router.replace('login')
        })
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

<template>
  <div
    v-if="checkSetup"
    class="container">
    <div v-if="needSetup">
      <h1 class="title">Hello BetterWiki!</h1>
      <p>
        Before use, you need to setup for administrator and basic service infomation
      </p>
      <b-button @click="goToSetup">
        Bring me to setup page!
      </b-button>
    </div>
    <b-form
      v-else
      @submit="onSubmit">
      <b-form-group
        id="emailInputGroup"
        label="Email address:"
        label-for="emailInput"
        description="We'll never share your email with anyone else.">

        <b-form-input
          id="emailInput"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"/>

      </b-form-group>

      <b-form-group
        id="passwordInputGroup"
        label="Email address:"
        label-for="passwordInput"
        description="">

        <b-form-input
          id="passwordInput"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"/>

      </b-form-group>

      <b-button
        type="submit"
        variant="primary">Login</b-button>
      &nbsp;
    </b-form>
  </div>
</template>

<script>
import Auth from '@/models/Auth'
import Service from '@/models/Service'

import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
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
  },
  methods: {
    ...mapActions(['setUser', 'setService']),
    async onSubmit (evt) {
      evt.preventDefault()
      const { user, service } = await Auth.login(this.form)
      this.setUser(user)
      this.setService(service)
      this.$router.push({ name: 'home' })
    },
    goToSetup () {
      this.$router.push({ name: 'setup' })
    }
  }
}
</script>

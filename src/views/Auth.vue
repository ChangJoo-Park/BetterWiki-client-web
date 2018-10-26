<template>
  <div class="container">
    <b-form
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

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit (evt) {
      evt.preventDefault()
      await Auth.login(this.form)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<!-- b-form-1.vue -->

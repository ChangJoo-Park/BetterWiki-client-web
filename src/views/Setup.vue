<template>
  <div v-if="checkSetup">
    <div
      v-if="needSetup"
      class="container">
      <h1>Setup Wiki</h1>
      <b-form
        @submit="onSubmit"
      >
        <legend>Administrator</legend>
        <b-form-group
          id="emailInputGroup"
          label="Email address:"
          label-for="emailInput"
          description="We'll never share your email with anyone else.">
          <b-form-input
            id="emailInput"
            v-model="form.admin.email"
            type="email"
            required
            placeholder="Enter email"/>
        </b-form-group>
        <b-form-group
          id="usernameInputGroup"
          label="Your Name:"
          label-for="usernameInput">
          <b-form-input
            id="usernameInput"
            v-model="form.admin.username"
            type="text"
            required
            placeholder="Enter name"/>
        </b-form-group>
        <b-form-group
          id="passwordInputGroup"
          label="Password :"
          label-for="passwordInput">
          <b-form-input
            id="passwordInput"
            v-model="form.admin.password"
            type="text"
            required
            placeholder=""/>
        </b-form-group>

        <!-- Service -->
        <legend>Service</legend>
        <b-form-group
          id="serviceNameGroup"
          label="Wiki Name:"
          label-for="wikiNameInput"
        >
          <b-form-input
            id="wikiNameInput"
            v-model="form.service.name"
            type="text"
            required
            placeholder=""/>
        </b-form-group>
        <b-form-group
          id="wikiDescriptionGroup"
          label="Your Name:"
          label-for="wikiDescriptionInput">
          <b-form-input
            id="wikiDescriptionInput"
            v-model="form.service.description"
            type="text"
            required
            placeholder=""/>
        </b-form-group>
        <b-button
          type="submit"
          variant="primary">Submit</b-button>
      </b-form>
    </div>
    <div
      v-else
      class="container">
      <h1>Your team is already set up</h1>
      <b-button @click="goToHome">Go To Home</b-button>
    </div>
  </div>
</template>

<script>
import Service from '@/models/Service'

export default {
  data () {
    return {
      checkSetup: false,
      needSetup: false,
      form: {
        admin: {
          email: 'admin@example.com',
          username: 'Administrator',
          password: ''
        },
        service: {
          name: 'BetterWiki',
          description: 'Wiki for our Team'
        }
      }
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
    goToHome () {
      this.$router.push({ name: 'home' })
    },
    onSubmit (evt) {
      evt.preventDefault()

      const { admin, service } = this.form
      Service.setup({ admin, service })
        .then(response => {
          this.$router.push({ name: 'home' })
        })
        .catch(error => {
          window.alert('Error')
          console.log(error)
        })
    }
  }
}
</script>

<style>
</style>

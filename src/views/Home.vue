<template>
  <b-container
    v-if="isLoaded"
    class="home container">
    <div>
      <b-navbar
        type="dark"
        variant="primary"
        toggleable>
        <b-navbar-toggle target="nav_dropdown_collapse"/>
        <b-navbar-brand href="/">{{ service.name }}</b-navbar-brand>
        <b-collapse
          id="nav_dropdown_collapse"
          is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{ name: 'article-new' }">New Article</b-nav-item>
            <b-nav-item-dropdown
              :text="user.username"
              right>
              <b-dropdown-item href="#">Account</b-dropdown-item>
              <b-dropdown-item href="#">Settings</b-dropdown-item>
              <b-dropdown-item href="#">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <br>
    <router-view/>
    <br>
    <p class="text-center">Powered by BetterWiki</p>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['user', 'service']),
    isLoaded () {
      return this.user && this.service
    }
  }
}
</script>

<style lang="scss">
.home .list-group-item {
  border: none;
}
</style>

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
        <b-navbar-brand>{{ service.name }}</b-navbar-brand>
        <b-collapse
          id="nav_dropdown_collapse"
          is-nav>
          <b-navbar-nav class="ml-auto">
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
    <b-row>
      <b-col cols="3">
        <b-list-group>
          <b-list-group-item href="#">Cras justo odio</b-list-group-item>
          <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col class="article-listing">
        <div class="article-item">
          <h1>Hello World</h1>
          <p>Lorem Ipsum</p>
        </div>
        <div class="article-item">
          <h1>Hello World</h1>
          <p>Lorem Ipsum</p>
        </div>
        <div class="article-item">
          <h1>Hello World</h1>
          <p>Lorem Ipsum</p>
        </div>
        <div class="article-item">
          <h1>Hello World</h1>
          <p>Lorem Ipsum</p>
        </div>
        <div class="article-item">
          <h1>Hello World</h1>
          <p>Lorem Ipsum</p>
        </div>
        <div class="article-item">
          <h1>Hello World</h1>
          <p>Lorem Ipsum</p>
        </div>
        <div class="article-item">
          <h1>Hello World</h1>
          <p>Lorem Ipsum</p>
        </div>
      </b-col>
    </b-row>
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
.article-listing {
  padding: 1rem;
}
.article-item {
  padding: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
}
</style>

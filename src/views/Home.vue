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
          <b-list-group-item
            v-for="topic in topics"
            :key="topic.id">
            {{ topic.name }}
            <p>{{ topic.dscription }}</p>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col class="article-listing">
        <div
          v-for="article in articles"
          :key="article.id"
          class="article-item">
          <h4>{{ article.title }} <small> by {{ article.user.username }}</small></h4>
          <p>Last updated on {{ article.updatedAt }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Topic from '@/models/Topic'
import Article from '@/models/Article'

export default {
  name: 'Home',
  data () {
    return {
      topics: [],
      articles: []
    }
  },
  computed: {
    ...mapGetters(['user', 'service']),
    isLoaded () {
      return this.user && this.service
    }
  },
  async mounted () {
    this.topics = await Topic.find()
    this.articles = await Article.find({ topic: this.topics[0].id })
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

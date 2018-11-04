<template>
  <b-row>
    <b-col cols="3">
      <b-list-group>
        <b-list-group-item
          v-for="topic in topics"
          :key="topic.id"
          :class="{ active: topic.id === currentTopic }"
          @click="loadTopic(topic.id)"
        >
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
        <router-link
          :to="{ name: 'article', params: { articleId: article.id } }"
          tag="h4"
        >
          {{ article.title }} <small> by {{ article.user.username }}</small>

        </router-link>
        <p>Last updated on {{ article.updatedAt }}</p>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import Topic from '@/models/Topic'
import Article from '@/models/Article'

export default {
  data() {
    return {
      topics: [],
      currentTopic: null,
      articles: []
    }
  },
  async mounted() {
    this.topics = await Topic.find()
    // FIXME: Need handling when topics are empty
    this.currentTopic = this.$route.query.topic || this.topics[ 0 ].id
    this.loadTopic(this.currentTopic)
  },
  methods: {
    async loadTopic(id) {
      this.articles = await Article.find({ topic: id })
      this.currentTopic = id
      this.$router.push({ name: 'home', query: { topic: id } })
    }
  }
}
</script>

<style>
.article-listing {
  padding: 1rem;
}
.article-item {
  padding: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
}
</style>

<template>
  <div v-if="isLoaded">
    <b-row>
      <b-col cols="9">
        <h1>{{ article.title }}</h1>

        <div>
          {{ article.body }}
        </div>
      </b-col>
      <b-col>
        <h5>Topic on</h5>
        <p>
          {{ article.topic.name }}
        </p>
        <h5>Created by</h5>
        <p>
          {{ article.user.username }}
        </p>
        <h5>Created at</h5>
        <p>
          {{ article.createdAt }}
        </p>
        <h5>Updated at</h5>
        <p>
          {{ article.updatedAt }}
        </p>
        <b-button
          block
          size="lg">Edit</b-button>
        <b-button
          block
          size="lg">History</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Article from '@/models/Article'

export default {
  data () {
    return {
      isLoaded: false,
      article: null
    }
  },
  async created () {
    this.article = await Article.findOne(this.$route.params.articleId)
    this.isLoaded = true
  }
}
</script>

<style>
</style>

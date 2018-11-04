<template>
  <div v-if="isLoaded">
    <h1>Update Article</h1>
    <ArticleForm
      :source="article"
      @submit="submit"
    />
  </div>
</template>

<script>
import Article from '@/models/Article'
import ArticleForm from '@/components/ArticleForm'

export default {
  components: {
    ArticleForm
  },
  data() {
    return {
      isLoaded: false,
      article: null
    }
  },
  async created() {
    console.log('article edit ')
    const source = await Article.findOne(this.$route.params.articleId)
    this.article = Object.assign({}, source)
    this.isLoaded = true
  },
  methods: {
    submit(updated) {
      console.log('updated => ', updated)
    }
  }
}
</script>

<style>
</style>

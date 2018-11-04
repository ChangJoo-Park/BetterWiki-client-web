<template>
  <div>
    <h1>New Article</h1>
    <ArticleForm
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
  methods: {
    async submit(newArticle) {
      console.log(newArticle)
      // const savedArticle = await Article.save(Object.assign({}, newArticle))
      // this.$router.push({ name: 'article', params: { articleId: savedArticle.id } })
    }
  }
}
</script>

<style>
</style>

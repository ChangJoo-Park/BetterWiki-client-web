<template>
  <div>
    <h1>New Article</h1>
    <div class="form-group">
      <input
        v-model.trim="newArticle.title"
        type="text"
        class="form-control"
        placeholder="Awesome infomation"
        @keydown.tab.prevent.stop="focusEditor"
      >
    </div>
    <editor
      ref="editor"
      v-model="newArticle.body"
      height="500px"/>
    <br>
    <div class="form-group">
      <input
        v-model.trim="newArticle.topic"
        type="text"
        class="form-control"
        placeholder="Topic"
      >
    </div>
    <input
      type="button"
      class="btn btn-primary"
      value="Submit"
      @click="submit">
  </div>
</template>

<script>
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'codemirror/lib/codemirror.css'
import { Editor } from '@toast-ui/vue-editor'
import Article from '@/models/Article'

export default {
  components: {
    Editor
  },
  data() {
    return {
      newArticle: {
        title: '',
        body: '',
        topic: ''
      }
    }
  },
  methods: {
    async submit() {
      const savedArticle = await Article.save(Object.assign({}, this.newArticle))
      this.$router.push({ name: 'article', params: { articleId: savedArticle.id } })
    },
    focusEditor() {
      try {
        this.$refs[ 'editor' ].editor.mdEditor.cm.focus()
        this.$refs[ 'editor' ].$el.querySelector('.te-editor-section').focus()
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style>
</style>

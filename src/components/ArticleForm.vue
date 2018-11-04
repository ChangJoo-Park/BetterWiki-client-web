<template>
  <div v-if="article">
    <div class="form-group">
      <input
        v-model.trim="article.title"
        type="text"
        class="form-control"
        placeholder="Awesome infomation"
        autofocus
        @keydown.tab.prevent.stop="focusEditor"
      >
    </div>
    <editor
      ref="editor"
      v-model="article.body"
      height="500px"/>
    <br>
    <div class="form-group">
      <input
        v-model.trim="article.topic"
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

export default {
  name: 'ArticleForm',
  components: {
    Editor
  },
  props: {
    source: {
      type: Object,
      default: () => {
        return {
          title: '',
          body: '',
          topic: ''
        }
      }
    }
  },
  data() {
    return {
      article: null
    }
  },
  mounted() {
    this.article = Object.assign({}, this.source)
    if (this.source.topic) {
      this.article.topic = this.source.topic.name
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.article)
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

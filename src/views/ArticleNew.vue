<template>
  <div>
    <h1>New Article</h1>
    <div class="form-group">
      <input
        v-model="title"
        type="text"
        class="form-control"
        placeholder="Awesome infomation"
      >
    </div>
    <editor 
      v-model="body" 
      height="500px"/>
    <br>
    <div class="form-group">
      <input
        v-model="whatChanged"
        type="text"
        placeholder="Tell me what changed."
        class="form-control">
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
import { Editor, Viewer } from '@toast-ui/vue-editor'

export default {
  components: {
    Editor,
    Viewer
  },
  data () {
    return {
      whatChanged: '',
      title: '',
      body: ''
    }
  },
  methods: {
    submit () {
      console.log( 'hello world' )
    }
  }
}
</script>

<style>
</style>

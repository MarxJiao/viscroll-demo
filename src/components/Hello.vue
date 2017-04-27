<template>
  <div class="hello">
    <div v-iscroll id="scroll">
    <div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
      <div>text</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#scroll {
  height: 100px;
  overflow: hidden;
}
</style>

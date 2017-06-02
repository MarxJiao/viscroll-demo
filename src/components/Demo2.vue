<template>
  <div class="demo2">
    Demo2 这里给指令传递一个函数，能够获取到iscroll实例
    <div v-iscroll=getIscroll class="demo2-scroll">
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
  },
  methods: {
      getIscroll(iscroll) {
          console.log(iscroll);
          iscroll.on('scrollStart', function() {
              console.log('scrollStart')
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo2-scroll {
  height: 100px;
  overflow: hidden;
}
.demo2 {
    margin: 20px 0 0 0;
}
</style>

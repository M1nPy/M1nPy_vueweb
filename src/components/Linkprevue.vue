<template>
  <div class="wrap">
    <span v-if="Explain_flag">リンクにカーソルをホバーさせると概要が表示されます。</span>
    <link-prevue v-bind:url="ReceiveUrl"></link-prevue>
  </div>
</template>
<style scoped>
.wrap{
  position:fixed;
}
</style>
<script>
import bus from '../models/Bus.js'
import LinkPrevue from 'link-prevue'
export default {
  name: 'Linkprevue',
  data () {
    return {
      ReceiveUrl: '',
      Explain_flag: true
    }
  },
  components: {
    LinkPrevue
  },
  mounted: function () {
    bus.$on('hovered', this.changeMethod)
  },
  methods: {
    changeMethod (x) {
      this.Explain_flag = false
      this.ReceiveUrl = x
    }
  }
}
</script>

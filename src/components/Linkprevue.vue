<template>
  <div class="wrap">
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
      ReceiveUrl: ''
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
      this.ReceiveUrl = x
    }
  }
}
</script>

<template>
  <div @mouseenter="HovPrevue(linkdata.link)" class="wrap">
    <div class="link-border">
      <a
        v-bind:href="linkdata.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="link-wrap">
          <span class="link-title">
            {{ linkdata.name }}
          </span>
          <small class="outline">
            {{ linkdata.text }}
          </small>
        </div>
      </a>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  box-shadow: rgba(100, 100, 100, 0.8);
}
a {
  text-decoration: none;
  display: block;
  color: black;
}
.link-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
}
.link-title {
  font-size: 30px;
}
.outline {
  color: black;
}
.link-border {
}
</style>
<script>
import bus from '../models/Bus.js'
export default {
  name: 'LinkBox',
  props: {
    linkdata: {
      type: Object,
      require: true,
      default: () => ({ name: 'none', link: 'none', text: 'none' })
    }
  },
  methods: {
    HovPrevue (x) {
      bus.$emit('hovered', x)
    }
  }
}
</script>

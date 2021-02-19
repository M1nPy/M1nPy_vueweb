<template>
    <div class="links">
        <h2>リンク集</h2>
        <Linkslist class="linklist"/>
    </div>
</template>
<style scoped>
</style>
<script>
import Linkslist from '@/components/Linkslist.vue'

export default {
  name: 'Links',
  components: {
    Linkslist
  }
}
</script>

<template>
    <div class="links">
        <Linkslist class="linklist"/>
    </div>
</template>
<style scoped>
.links{
  margin-top:30px;
}
.linklist{
  padding:20px
}
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

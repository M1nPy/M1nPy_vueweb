<template>
  <div class="links">
    <v-app>
      <v-row align="center">
        <v-col cols="8">
          <Linkslist class="linklist" />
        </v-col>
        <v-col cols="4">
          <Linkprevue class="linkprevue" />
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>
<style scoped>
.links {
  margin-top: 30px;
}
.linklist {
  padding: 20px;
}
</style>
<script>
import Linkslist from '@/components/Linkslist.vue'
import Linkprevue from '@/components/Linkprevue.vue'

export default {
  name: 'Links',
  components: {
    Linkslist,
    Linkprevue
  }
}
</script>

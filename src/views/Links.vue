<template>
  <div class="links">
    <v-app>
      <v-row dense align="start">
        <v-col cols="12" lg="5" class="mx-md-auto">
          <Linkslist class="linklist" />
        </v-col>
        <v-divider vertical></v-divider>
        <v-col class="hidden-md-and-down mx-md-auto" cols="0" lg="4">
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

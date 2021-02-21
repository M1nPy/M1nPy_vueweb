<template>
  <div>
    <v-app id="inspire">
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="15"
          :total-visible="7"
          @input="getNumber"
        ></v-pagination>
      </div>
    </v-app>
  </div>
</template>
<style></style>
<script>
export default {
  name: 'LinkPageNation',
  data () {
    return {
      page: 1
    }
  },
  methods: {
    getNumber: function (number) {
      this.$emit('Cpage', number)
    }
  }
}
</script>

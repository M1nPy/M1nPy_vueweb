<template>
  <div>
    <v-app id="inspire">
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="PageLength"
          :total-visible="5"
          @input="getNumber"
        ></v-pagination>
      </div>
    </v-app>
  </div>
</template>
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
      this.$emit('Cpage', this.page)
    }
  },
  props: {
    PageLength: {
      type: Number,
      default: 1
    }
  }
}
</script>

<template>
  <div>
    <v-app id="inspire">
      <div class="text-center">
        <v-pagination
          :value="Page"
          :length="PageLength"
          :total-visible="5"
          @input="$emit('update:Page',$event)"
        ></v-pagination>
      </div>
    </v-app>
  </div>
</template>
<style></style>
<script>
export default {
  name: 'LinkPageNation',
  props: {
    PageLength: {
      type: Number,
      default: 1
    },
    Page: {
      type: Number,
      default: 1
    }
  }
}
</script>

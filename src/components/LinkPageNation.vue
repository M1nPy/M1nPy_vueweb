<template>
  <div>
      <div class="text-center">
        <v-pagination
          circle
          :value="Page"
          :length="PageLength > 0 ? PageLength : 1"
          :total-visible="5"
          @input="$emit('update:page', $event)"
        ></v-pagination>
      </div>
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

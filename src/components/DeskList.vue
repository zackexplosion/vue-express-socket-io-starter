<template>
  <div class="desk-list selectable-box">
    <a-avatar
      v-for="(desk, index) in desks"
      :key="index"
      :class="(selectedID == desk ? 'selected' : '')"
      :size="100"
      @click="select(desk)"
    >
      {{ desk }}
    </a-avatar>
  </div>
</template>

<script>
const desks = [1, 2, 3, 4, 5, 6, 7]
export default {
  components: {

  },
  data() {
    return {
      selectedID: -1,
      desks,
    }
  },
  methods: {
    select(desk) {
      this.selectedID = desk
    },
  },
}
</script>
<style scoped>
</style>

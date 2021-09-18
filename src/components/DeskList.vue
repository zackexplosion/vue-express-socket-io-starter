<template>
  <div class="desk-list selectable-box">
    <a-avatar
      v-for="(desk, index) in desks"
      :key="index"
      :class="(selected == desk ? 'selected' : '')"
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
      selected: this.$store.state.take.desk_number,
      desks,
    }
  },
  methods: {
    select(desk) {
      this.selected = desk
      this.$store.commit('setTakeDeskNumber', desk)
    },
  },
}
</script>
<style scoped>
</style>

<template>
  <div class="desk-list">
    <a-avatar
      v-for="(desk, index) in desks"
      :key="index"
      :size="100"
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
      desks,
    }
  },
  methods: {

  },
}
</script>
<style scoped>
.desk-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
</style>

<template>
  <div class="pr-list selectable-box">
    <a-avatar
      v-for="(user, index) in users"
      :key="index"
      class="users"
      :class="(selectedID == user.id ? 'selected' : '')"
      :size="100"
      @click="select(user)"
    >
      {{ user.name }}
    </a-avatar>
  </div>
</template>

<script>
const list = [
  '小任', '阿哲', 'Jason',
  '小安', 'Adam',
  '鬍子', 'Debby', '陳董',
  '水水', '羅羅', '小澤',
  'Eric', 'Jerry', '阿蒼',
  'Robert',
]
export default {
  components: {

  },
  data() {
    return {
      selectedID: -1,
      users: list.map((_, index) => ({
        name: _,
        id: index,
      })),
    }
  },
  methods: {
    select(user) {
      this.selectedID = user.id
      console.log('user', user)
    },
  },
}
</script>
<style scoped>

</style>

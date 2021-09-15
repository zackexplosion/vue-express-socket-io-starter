<template>
  <div class="pr-list">
    <a-avatar
      v-for="(user, index) in users"
      :key="index"
      class="users"
      :size="100"
    >
      {{ user.name }}
    </a-avatar>
  </div>
</template>

<script>
const list = [
  '小任', '阿哲', 'Jason',
  'Jsaon', '小安', 'Adam',
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
      users: list.map((_, index) => ({
        name: _,
        id: index,
      })),
    }
  },
  methods: {

  },
}
</script>
<style scoped>
.pr-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
</style>

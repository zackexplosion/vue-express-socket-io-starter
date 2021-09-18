<template>
  <div>
    <h2>確認資料</h2>

    <pre>
    要取的酒款是..
    服務人員是 {{ form.pr_name }}
    桌號是 {{ form.desk_number }}
    </pre>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      form: this.$store.state.take,
    }
  },
  methods: {

  },
}
</script>

<template>
  <h1>dafa - {{abc}} <button @click="up">++</button></h1>
</template>

<script>
  export default {
    name: "test",
    props: {
      abc: String
    },
    methods: {
      up() {
        this.$store.test.commit('test.text', 'dskajfhdsihfsadhkfhaskhfka');
      }
    }
  }
</script>

<style scoped>

</style>
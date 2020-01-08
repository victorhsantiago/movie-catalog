<template>
  <button class="button" @click="skip">
    Pular
  </button>
</template>

<script>
export default {
  methods: {
    skip() {
      this.$emit('skip')
    },
  },
}
</script>

<style lang="stylus" scoped>
.button
  border: none
  background-color: #fff
  width: 150px
  display: flex
  align-items: center
  justify-content: center
  padding: 0.5rem
  border-radius: 2rem
  cursor pointer
</style>

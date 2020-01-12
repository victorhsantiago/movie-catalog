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
  font-size .8rem
  font-weight 600
  width 6rem
  height 3rem
  display flex
  align-items center
  justify-content center
  border-radius: 2rem
  cursor pointer
  text-transform uppercase
</style>

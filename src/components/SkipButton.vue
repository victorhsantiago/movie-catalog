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
  font-weight $bold
  color dark-gray
  width 100px
  height 50px
  display flex
  align-items center
  justify-content center
  border-radius: 2rem
  cursor pointer
  text-transform uppercase
  @media only screen and (min-width 321px)
    height 60px
</style>

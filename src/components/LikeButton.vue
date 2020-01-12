<template>
  <button class="button" @click="likeMovie">
    <img src="@/assets/curti.png" alt="Curti!" />
    <span class="button__text">Curti!</span>
  </button>
</template>

<script>
export default {
  methods: {
    likeMovie() {
      this.$emit('likeMovie')
    },
  },
}
</script>

<style lang="stylus" scoped>
.button
  border none
  background-color #fff
  width 4rem
  height 4rem
  display flex
  align-items center
  justify-content center
  font-weight 600
  text-transform uppercase
  border-radius 2rem
  cursor pointer

.button__text
  display none
</style>

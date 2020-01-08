<template>
  <button class="button" @click="dislikeMovie">
    <img src="@/assets/n-curti.png" alt="Não curti!" />
    Não curti!
  </button>
</template>

<script>
export default {
  methods: {
    dislikeMovie() {
      this.$emit('dislikeMovie')
    },
  },
}
</script>

<style lang="stylus" scoped>
.button
  border none
  background-color #fff
  width 150px
  display flex
  align-items center
  justify-content center
  padding 0.5rem
  margin 0.5rem
  border-radius 2rem
  cursor pointer
</style>

<template>
  <button class="button" @click="likeMovie">
    <img class="button__icon" src="@/assets/curti.png" alt="Curti!" />
    <span class="button__text hidden_mobile">Curti!</span>
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
  width 70px
  height 70px
  display flex
  align-items center
  justify-content center
  font-weight $bold
  text-transform uppercase
  border-radius 35px
  cursor pointer
  outline none
  @media only screen and (min-width 321px)
    width 200px
    padding 0 1rem
    color viva-red
    margin 0 100px

.button__icon
  @media only screen and (min-width 321px)
    transform translateY(-.5rem)

.button__text
    margin-left 1rem
</style>

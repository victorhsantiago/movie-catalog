<template>
  <button class="button" @click="likeMovie">
    <img src="@/assets/curti.png" alt="Curti!" />
    Curti!
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

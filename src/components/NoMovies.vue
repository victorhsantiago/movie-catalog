<template>
  <div class="no_movie">
    <img
      class="no_movie__camera"
      src="@/assets/video-camera-vazio.png"
      alt=""
    />
    <p class="no_movie__paragraph">Nenhum filme</p>
  </div>
</template>

<style lang="stylus" scoped>
.no_movie
  background-color light-gray
  padding 1rem

.no_movie__camera
  display block
  margin auto
  margin-bottom 2rem

.no_movie__paragraph
  text-align center
  text-transform uppercase
  font-size 1.5rem
  font-weight $bold
  color dark-gray
</style>

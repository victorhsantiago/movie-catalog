<template>
  <div class="loader">
    <div class="box"></div>
    <div class="hill"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.loader
	position absolute
	top 50%
	left 50%
	margin-top -2.7rem
	margin-left -2.7rem
	width 5.4rem
	height 5.4rem

.hill
	position absolute
	width 7.1rem
	height 7.1rem
	top 1.7rem
	left 1.7rem
	background-color transparent
	border-left 0.25rem solid #ff1c1c
	transform rotate(45deg)
	&:after
		content ''
		position absolute
		width 7.1rem
		height 7.1rem
		left 0

.box
	position absolute
	left 0
	bottom -0.1rem
	width 1rem
	height 1rem
	background-color transparent
	border 0.25rem solid #ff1c1c
	border-radius 15%
	transform translate(0, -1rem) rotate(-45deg)
	animation push 1.5s cubic-bezier(0.79, 0, 0.47, 0.97) infinite

@keyframes push {
  0% {
    transform translate(0, -1rem) rotate(-45deg)
  }
  5% {
    transform translate(0, -1rem) rotate(-50deg)
  }
  20% {
    transform translate(1rem, -2rem) rotate(47deg)
  }
  25% {
    transform translate(1rem, -2rem) rotate(45deg)
  }
  30% {
    transform translate(1rem, -2rem) rotate(40deg)
  }
  45% {
    transform translate(2rem, -3rem) rotate(137deg)
  }
  50% {
    transform translate(2rem, -3rem) rotate(135deg)
  }
  55% {
    transform translate(2rem, -3rem) rotate(130deg)
  }
  70% {
    transform translate(3rem, -4rem) rotate(217deg)
  }
  75% {
    transform translate(3rem, -4rem) rotate(220deg)
  }
  100% {
    transform translate(0, -1rem) rotate(-225deg)
  }
}
</style>

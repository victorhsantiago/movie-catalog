<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Filmes não curados</router-link> |
      <router-link to="/liked-movies">Filmes curtidos</router-link> |
      <router-link to="/disliked-movies">Filmes não curtidos</router-link>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

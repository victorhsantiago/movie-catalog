export default {
  setMoviesList(state, moviesList) {
    state.moviesList = moviesList
  },
  addLikedMovie(state, movie) {
    state.likedMovies.push(movie)
  },
  addDislikedMovie(state, movie) {
    state.dislikedMovies.push(movie)
  },
  removeCuratedMovie(state) {
    state.moviesList.splice(0, 1)
  },
  skipMovie(state) {
    const movie = state.moviesList.shift()
    state.moviesList.push(movie)
  },
}

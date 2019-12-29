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
  removeCuratedMovie(state, index) {
    state.moviesList.splice(index, 1)
  },
}

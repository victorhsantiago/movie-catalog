export default {
  setLoadingMovies(state) {
    state.loadingMovies = !state.loadingMovies
  },
  setMoviesList(state, moviesList) {
    state.moviesList = moviesList
  },
  setGenresList(state, genresList) {
    state.genresList = genresList
  },
  addLikedMovie(state, movie) {
    state.likedMovies.unshift(movie)
  },
  addDislikedMovie(state, movie) {
    state.dislikedMovies.unshift(movie)
  },
  removeCuratedMovie(state) {
    state.moviesList.splice(0, 1)
  },
  skipMovie(state) {
    const movie = state.moviesList.shift()
    state.moviesList.push(movie)
  },
  toggleMenu(state) {
    state.isMenuOpen = !state.isMenuOpen
  },
  toggleModal(state) {
    state.isModalOpen = !state.isModalOpen
  },
}

export default {
  getCurrentMovie(state) {
    return state.moviesList[0]
  },
  getMovieGenre(state) {
    return id => state.genresList.find(genre => genre.id === id)
  },
}

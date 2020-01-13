import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/4'
const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGRjYjBlYzBhMjc5Y2RmYWNlMzE0ZDljZGZiNjYxOSIsInN1YiI6IjVlMDdiYTEzMjZkYWMxMDAxMjcxNjMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wQx1XhTToOCSr97qn5wmsEPZg0IXckfGdko0-B8-trY'

axios.defaults.headers.common.Authorization = API_KEY

export default {
  getMoviesList({ commit }) {
    commit('setLoadingMovies')
    axios
      .get(`${API_URL}/list/1`)
      .then(({ data: { results } }) => commit('setMoviesList', results))
      .finally(() => commit('setLoadingMovies'))
  },
  getGenresList({ commit }) {
    axios
      .get('https://api.themoviedb.org/3/genre/movie/list')
      .then(({ data: { genres } }) => commit('setGenresList', genres))
  },
  prepareModal({ commit }, movie) {
    commit('toggleModal')
    commit('setSelectedMovie', movie)
  },
}

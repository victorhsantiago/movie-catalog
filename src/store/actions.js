import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/4/list/1'
const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGRjYjBlYzBhMjc5Y2RmYWNlMzE0ZDljZGZiNjYxOSIsInN1YiI6IjVlMDdiYTEzMjZkYWMxMDAxMjcxNjMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wQx1XhTToOCSr97qn5wmsEPZg0IXckfGdko0-B8-trY'

axios.defaults.headers.common.Authorization = API_KEY

export default {
  getMoviesList({ commit }) {
    axios
      .get(API_URL)
      .then(({ data: { results } }) => commit('setMoviesList', results))
  },
}

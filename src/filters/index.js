import Vue from 'vue'
import moment from 'moment'

Vue.filter('onlyYear', date => {
  if (!date) return ''
  return moment(date, 'YYYY-MM-DD').format('YYYY')
})

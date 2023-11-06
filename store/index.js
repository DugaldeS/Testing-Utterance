import STATUS_TYPES from './config/statusTypes'
import { parsesJSON } from './utils'

const state = () => ({
  loteries: {
    status: STATUS_TYPES.INIT,
    error: null,
    data: []
  },
  lotery: {
    status: STATUS_TYPES.INIT,
    error: null,
    data: {}
  },
  prevNext: {
    status: STATUS_TYPES.INIT,
    error: null,
    data: {}
  },
  readMore: {
    status: STATUS_TYPES.INIT,
    error: null,
    data: []
  }
});
/* All states mutations */
const mutations = {
  GET_LOTERIES(state, payload) {
    state.loteries.data = payload
    state.loteries.status = STATUS_TYPES.SUCCESS
  },
  GET_LOTERY(state, payload) {
    state.lotery.data = payload
    state.lotery.status = STATUS_TYPES.SUCCESS
  },
  GET_READ_MORE(state, payload) {
     state.readMore.data = payload
     state.readMore.status = STATUS_TYPES.SUCCESS
  },
  GET_PREV_NEXT(state, payload) {
     state.prevNext.data = payload
     state.prevNext.status = STATUS_TYPES.SUCCESS
  }
};
/* All states getters */
const getters = {
  getLoteries: (state) => parsesJSON(state.loteries),
  getLotery: (state) => parsesJSON(state.lotery),
  getPrevNext: (state) => parsesJSON(state.prevNext),
  getReadMore: (state) => parsesJSON(state.readMore)
};
/* All states actions */
const actions = {
  async getLoteries({ commit }, params, callback) {
    const storeLoteries = await this.$content('lotery')
      .limit(12)
      .fetch()
    commit('GET_LOTERIES', storeLoteries)
  },
  async getLotery({ commit }, params, callback) {
    const storeLotery = await this.$content('lotery', params.slug).fetch()
    commit('GET_LOTERY', storeLotery)
  },
  async getPrevNext({ commit }, params, callback) {
    const [prev, next] = await this.$content('lotery')
      .surround(params.slug)
      .fetch()
    commit('GET_PREV_NEXT', { prev, next })
  },
  async getReadMore({ commit }, params, callback) {	
     const storeReadMore = await this.$content('lotery')
       .where({
         slug: { $ne: params.slug },
       })
       .limit(3)
       .fetch()
     commit('GET_READ_MORE', storeReadMore)
  }
};
/* Export all stores */
export default {
  state,
  mutations,
  getters,
  actions
}
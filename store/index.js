import STATUS_TYPES from './config/statusTypes'
import { parsesJSON } from './utils'

const state = () => ({
  lotteries: {
    status: STATUS_TYPES.INIT,
    error: null,
    data: []
  },
  lottery: {
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
  GET_LOTTERIES(state, payload) {
    state.lotteries.data = payload
    state.lotteries.status = STATUS_TYPES.SUCCESS
  },
  GET_LOTTERY(state, payload) {
    state.lottery.data = payload
    state.lottery.status = STATUS_TYPES.SUCCESS
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
  getLotteries: (state) => parsesJSON(state.lotteries),
  getLottery: (state) => parsesJSON(state.lottery),
  getPrevNext: (state) => parsesJSON(state.prevNext),
  getReadMore: (state) => parsesJSON(state.readMore)
};
/* All states actions */
const actions = {
  async getLotteries({ commit }, params, callback) {
    const storeLotteries = await this.$content('lottery')
      .limit(12)
      .fetch()
    commit('GET_LOTTERIES', storeLotteries)
  },
  async getLottery({ commit }, params, callback) {
    const storeLottery = await this.$content('lottery', params.slug).fetch()
    commit('GET_LOTTERY', storeLottery)
  },
  async getPrevNext({ commit }, params, callback) {
    const [prev, next] = await this.$content('lottery')
      .surround(params.slug)
      .fetch()
    commit('GET_PREV_NEXT', { prev, next })
  },
  async getReadMore({ commit }, params, callback) {	
     const storeReadMore = await this.$content('lottery')
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
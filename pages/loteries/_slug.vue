<script>
import { mapState } from 'vuex'

export default {
  async fetch({ i18n, context, params, store, store: { dispatch, getters } }) {
    await dispatch('getLottery', params)
    await dispatch('getReadMore', {
          slug: params.slug,
          tags: Object.keys(store.state.lotteries.data)
   })
   await dispatch('getPrevNext', params)
  },
  computed: {
    ...mapState({
      lottery: (state) => state.lottery.data,
      readMore: (state) => state.readMore.data,
      prevNext: (state) => state.prevNext.data,
    })
  }
}
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
     </div>
     <div class="six columns">
       <h4>Numero de loteria: {{ lotery.num }}</h4>
       Multiplicador {{ lotery.multiplier }} <br/>
       Mega Ball: {{ lotery.megaball }} <br/>
       Numbers: {{ lotery.WinningNumbers }} <br/>
       Dia de lanzanmiento: {{ lotery.Drawdate }}
	 </div>
   <utteranc/>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>
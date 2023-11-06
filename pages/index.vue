<script>
	import { mapState } from 'vuex'

	export default {
	  async fetch({ params, store: { dispatch, getters } }) {
	    await dispatch('getLotteries')
	  },
	  computed: {
	    ...mapState({
	      lotteries: (state) => state.lotteries.data,
	    })
	  }
	}
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Lista de números ganadores de loteria </h3>
     <p> Contiene la lista de numeros ganadores de loteria del Super ball</p>
   <ul>
     <li v-for="lotery in loteries" :key="lotery.slug">
      
       <NuxtLink :to="{ name: 'loteries-slug', params: { slug: lotery.slug } }">{{lotery.id}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>
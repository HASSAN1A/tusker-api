<template>
  <div class="content -mb-6">
    
    <h1 class="text-white font-thin text-lg capitalize -mb-16">{{ title }}</h1>    
    <div class="row">
      <div class="row__inner">
        <!-- movies -->
        <router-link
          v-for='(media, key) in medias'
          v-if='media.type == "movie"'
          class="tile"
          :class='{"first_movie_padd": key == 0}'
          :to="'/detail/movie/' + media.imdbId"
        >
          <div class="tile__media">
            <img class="tile__img z-50" :src="media.netflixImg" alt=""/>
          </div>
          <div class="tile__details text-white">
            <div class="tile__title text-white title">
              {{ media.netflixTitle }}
            </div>
          </div>
        </router-link>
        
        <!-- series with episode and season modal -->
        <div
          v-else
          v-for='(media, key) in medias'
          class="tile"
          :class='{"first_movie_padd": key == 0}'
          @click='openModal(media)'
        >
          <div class="tile__media">
            <img class="tile__img z-50" :src="media.netflixImg" alt=""/>
          </div>
          <div class="tile__details text-white">
            <div class="tile__title text-white title">
              {{ media.netflixTitle }}
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Modal for choice season and episode -->
    <vue-modaltor
      :visible="open"
      @hide="open = false"
      :default-width="'30%'"
      :close-scroll="false"
      :animation-panel="'modal-slide-top'"
      :bg-overlay="'#131c25'"
    >
    <img class="w-full" :src="opennedMedia.netflixImg">
    <div class="px-6 py-4">
      <span
        v-for='genre in opennedMedia.genre'
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 mr-2"
      >
        #{{ genre }}
      </span>
    </div>

    <div v-if='typeof opennedMedia.seasons != "undefined"' class="px-6 py-4 inline-flex flex-col w-full items-center">
      <div class="w-full">
        <span class="mr-1">Select Season : </span>
        <select v-model='selected_season'>
          <option disabled=""></option>
          <option v-for='s_e in opennedMedia.seasons' :value='s_e.season'>{{ s_e.season }}</option>
        </select>
      </div>
      <div class="w-full mb-8" v-if='selected_season'>
        <span class="mr-1">Select Episode : </span>
        <select v-model='selected_episode'>
          <option v-for='ep in opennedMedia.seasons.filter(s => s.season === selected_season)[0].episodes'>{{ ep }}</option>
        </select>
      </div>
      <div class="w-full text-center" v-if='selected_season && selected_episode'>
        <router-link
          :to="'/detail/serie/' + opennedMedia.imdbId + '/' + selected_season + '/' + selected_episode" 
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded text-center"
        >
          Watch
        </router-link>
      </div>
    </div>
    
    <div v-show='loaded' class="px-6 py-4 w-full inline-flex flex-col items-center">
      <img class="w-16 h-auto" src="/img/spinner.gif">
    </div>
    
    </vue-modaltor>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Item',
  props: {
    title: String,
    medias: Array,
  },
  computed: {
    ...mapState(['apiUrl']),
  },
  data: function() {
   return  {
    movies: [],
    series: [],
    open: false,
    selected_season: null,
    selected_episode: null,
    loaded: false,
    opennedMedia: {
      netflixImg: null,
      seasons: []
    }
   }
  },
  mounted() {
  },
  methods: {
    hideModal() {
      this.open = false
      this.loaded = false
      this.opennedMedia = {
        netflixImg: null,
        seasons: []
      }
      this.selected_season = null
      this.selected_episode = null
    },
    openModal(media) {
      this.opennedMedia = media
      this.open = true
      this.loaded = true
      this.$http.get(this.apiUrl + 'serie/' + media.imdbId).then(response => {
        this.opennedMedia.seasons = response.body;
        this.loaded = false
      }, response => {});
    }
  },
};
</script>
<template>
  <div class="content h-screen w-full bg-tro-dark inline-flex flex-col">
    <!--Top/-->
    <div class="p-16 overflow-scroll">
      <Item title='Series' :medias='series' />
      <Item title='Movies' :medias='movies' />
    </div>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Item from '@/components/Item.vue'
import { mapState } from 'vuex'

export default {
  name: 'Content',
  components: {
    Top,
    Item
  },
  props: {
    selected: String
  },
  data: function() {
   return  {
    movies: [],
    series: [],
   }
  },
  computed: {
    ...mapState(['apiUrl']),
  },
  mounted() {
    this.$http.get(this.apiUrl + 'series?page=3').then(response => {
      this.series = response.body;
    }, response => {});

    this.$http.get(this.apiUrl + 'movies').then(response => {
      this.movies = response.body;
    }, response => {});
  }
};
</script>
<template>
    <!--Top/-->
	<div class="flex items-center justify-center h-screen">
		<iframe
		 class="w-full h-full bg-white rounded-lg shadow-lg"
		 :src="apiUrl + 'tv/' + $route.params.id + '/' +  $route.params.season + '/' +  $route.params.ep"
		>
		</iframe>
	</div>

    <!--Nav selected='discover'/-->
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Content from '@/components/Content.vue'
import { mapState } from 'vuex'

export default {
  name: 'detailSerie',
  components: {
    Nav,
    Content
  },
  computed: {
    ...mapState(['apiUrl']),
  }
}
</script>

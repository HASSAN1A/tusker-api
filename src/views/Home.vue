<template>
  <div class="home flex overflow-hidden">
    <!--Nav selected='discover'/-->
    <Content select='discover'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'home',
  components: {
    Nav,
    Content
  }
}
</script>

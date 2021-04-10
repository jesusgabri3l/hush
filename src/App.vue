<template>
  <div id="app">
      <Header />
      <ProductoPage />
  </div>
</template>
<script>
import Header from './components/layouts/header/Header.vue'
import ProductoPage from './views/ProductPage.vue'
export default {
  name: 'App',
  components: { Header, ProductoPage },

  data () {
    return {

    }
  }
}
</script>

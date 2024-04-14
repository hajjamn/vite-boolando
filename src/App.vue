<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import { store } from './store.js'

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  methods: {
    getProducts() {
      axios.get('http://localhost:3000/products').then((res) => {
        console.log(res.data)
        store.products = res.data
      })
    }
  },
  created() {
    this.getProducts()
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use './style/general';
</style>

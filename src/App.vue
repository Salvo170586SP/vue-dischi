<template>
  <div id="app">
   <Header />
    <main class="container">
      <BoxCard />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import BoxCard from './components/BoxCard.vue';

export default {
  name: 'App',
  components: {
    Header,
    BoxCard,
  },
 
}
</script>

<style lang="scss">
@import './assets/sass/style.scss';

</style>

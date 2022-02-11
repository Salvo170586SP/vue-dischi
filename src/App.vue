<template>
  <div id="app">
   <Header @selectded="mioMetodo" />
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
  methods: {
    mioMetodo(){
      console.log('ho selezionato');
    }
    
  }
 
}
</script>

<style lang="scss">
@import './assets/sass/style.scss';

main{
  position: relative;
}

</style>

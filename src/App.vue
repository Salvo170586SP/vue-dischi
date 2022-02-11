<template>
  <div id="app">

    <Header @genere="setGenere" :genere="setGenere"/>

    <main class="container box-card d-flex justify-content-center flex-wrap my-3">
      <div  v-for="(album, index) in albums"
      :key="index"
      class="album-card col-6 col-md-3 col-lg-2 text-center shadow p-2"> 
        <BoxCard :image="album.poster" :title="album.title" :author="album.author" :year="album.year" />
      </div>
    </main>
  </div>
</template>


<script>
import axios from "axios";

import Header from "./components/Header.vue";
import BoxCard from "./components/BoxCard.vue";

export default {
  name: "App",
  components: {
    Header,
    BoxCard,
  },

  data() {
    return {
      albums: [],
      genere: '',
    };
  },

  methods:{
    getAlbums(url){
      axios
      .get(url)
      .then((res) => {
        this.albums = res.data.response;
      }); 
    },
    setGenere(value){
      this.genere = value;
    }

  

  },
  mounted(){
    this.getAlbums("https://flynn.boolean.careers/exercises/api/array/music")
  }
};
</script>




<style lang="scss">
@import "./assets/sass/style.scss";

main {
  position: relative;
}

.album-card {
  background-color: #2e3a46;
  margin: 20px;
}
</style>

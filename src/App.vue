<template>
  <div id="app">
    <Header :albums="albums" @filter-genre="testFilter" />

    <main class="container box-card">
      <BoxCard :albums="albums" :filter-genre="filterChange" />
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
      filterChange: "",
    };
  },
  methods: {
    getAlbums() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((res) => {
          this.albums = res.data.response;
          console.log(this.albums);
        });
    },
    testFilter(key) {
      this.filterChange = key;
    },
  },
  mounted() {
    this.getAlbums();
  },
};
</script>

<style lang="scss">
@import "./assets/sass/style.scss";

main {
  position: relative;
}
</style>

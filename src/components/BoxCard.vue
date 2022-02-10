<template>
  <section class="box-card d-flex justify-content-center flex-wrap my-5">
    <div
      v-for="(album, index) in albums"
      :key="index"
      class="album-card text-center m-4"
    >
      <figure>
        <img class="img-fluid p-3" :src="album.poster" :alt="album.title" />
      </figure>
      <h5>{{ album.title }}</h5>

      <span>{{ album.author }}</span
      ><br />
      <date>{{ album.year }}</date>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "BoxCard",
  data() {
    return {
      albums: [],
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => {
        this.albums = res.data.response;
      });
  },
};
</script>

<style lang="scss" scoped>
.album-card {
  width: calc(100% / 7);
  background-color: #2e3a46;
  
  h5 {
    color: white;
  }

  span, 
  date{
    color: #6E777D;  
    font-weight: bold ;  
  }
}
</style>
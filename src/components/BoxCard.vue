<template>
  <section class="box-card d-flex justify-content-center flex-wrap my-3">
      <div class="loader  d-flex justify-content-center align-items-center" v-if="isLoading">Loading...</div>
    <div v-else
      v-for="(album, index) in albums"
      :key="index"
      class="album-card col-6 col-md-3 col-lg-2 text-center shadow p-2"
    >
      <figure>
        <img class="img-fluid p-3" :src="album.poster" :alt="album.title" />
      </figure>
      <h5>{{ album.title }}</h5>

      <span>{{ album.author }}</span
      ><br />
      <data>{{ album.year }}</data>
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
      isLoading: false,
    };
  },
  mounted() {
      this.isLoading = true;
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => {
        this.albums = res.data.response;
        this.isLoading = false;
      });
  },
};
</script>

<style lang="scss" scoped>
.loader{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    background-color: rgba(0, 0, 0, 0.664); 
}

.album-card {
  background-color: #2e3a46;
  margin: 20px;

  h5 {
    color: white;
  }

  span,
  data {
    color: #6e777d;
    font-weight: bold;
  }
}
</style>
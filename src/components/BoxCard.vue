<template>
  <section class="box-card d-flex justify-content-center flex-wrap my-3">
    <div
      v-for="(album, index) in albums"
      :key="index"
      class="album-card col-6 col-md-3 col-lg-2 text-center p-2"
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
  background-color: #2e3a46;
  margin: 20px;

  h5 {
    color: white;
  }

  span,
  date {
    color: #6e777d;
    font-weight: bold;
  }
}
</style>
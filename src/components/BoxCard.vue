<template>
  <section class="box-card d-flex justify-content-center align-items-center flex-wrap my-5">
    <div v-for="(album, index) in albums" :key="index" class="album-card py-5 m-4">
        <img class="img-fluid p-3" :src="album.poster" alt="">
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
.album-card{
/*     width: calc(100% / 5);
 */    height: 350px;
    background-color: #2E3A46;

    img{
        width: 170px;
    }
}
</style>
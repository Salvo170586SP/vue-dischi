<template>
  <section class="box-card py-2">
    <div class="album-card"></div>
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
</style>
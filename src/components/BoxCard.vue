<template>
  <section class="d-flex flex-wrap">
    <div v-for="(album, index) in filteredAlbumsByGenre" :key="index" class="my-3
      shadow
      p-2
      album-card
      text-center">
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
export default {
  name: "BoxCard",
  props: ['albums','filterGenre'],

  computed: {
    filteredAlbumsByGenre() {
      const filter = this.filterGenre;
      return this.albums.filter((album) => {
        if (album.genre == filter ||  filter == "")
          return true;
      });
    },
  },
};
</script>




<style lang="scss" scoped>
.album-card {
  width: 15% ;
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
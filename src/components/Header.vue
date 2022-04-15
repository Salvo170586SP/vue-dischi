<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center">
      <figure>
        <img
          class="h-100 p-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png"
          alt="Spotify Logo"
        />
      </figure>
      <select name="genre" id="genre" v-model="search" @change="$emit('filter-genre', search)"
>
        <option value="">All</option>
        <option v-for="(album, index) in filteredGenre" :key="index"> {{ album }}</option>
      </select>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ['albums'],
  data(){
    return {
      search: '',
    }
  }, 
  computed: {
    filteredGenre() {
      const genres = [];
      this.albums.forEach((album) => {
        if (!genres.includes(album.genre)) genres.push(album.genre);
      });
      return genres;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 100px;
  background-color: #2e3a46;
  figure {
    height: 100px;
  }
}
</style>



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
      <div>
        <label class="text-white mx-2" for="gender">Scegli il tuo genere preferito</label>
        <select v-model="selectGenre" @change="selectAlbum" name="gender" id="gender">
          <option value="All" selected> All </option>        
          <option value="Rock">Rock</option>        
          <option value="Pop">Pop</option>        
          <option value="Jazz">Jazz</option>        
          <option value="Metal">Metal</option>        
        </select>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      selectGenre: '',
    }
  },
  methods:{
    selectAlbum(){
      this.$emit('genere', this.selectGenre);
    },
    
  }
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



<template>
  <header>
    <div class="container">
      <figure>
        <img class="h-100 p-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png"
          alt="Spotify Logo"
        />
      </figure>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
header {
    height: 100px;
    background-color: #2e3a46;
    figure{
      height: 100px;
    }
}
</style>
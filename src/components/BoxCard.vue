<template>
  <div>
    <figure>
      <img class="img-fluid p-3" :src="image" :alt="title" />
    </figure>
    <h5>{{ title }}</h5>

    <span>{{ author }}</span
    ><br />
    <data>{{ year }}</data>
  </div>
</template>




<script>
export default {
  name: "BoxCard",
  props: ["image", "title", "author", "year"],
};
</script>




<style lang="scss" scoped>
h5 {
  color: white;
}

span,
data {
  color: #6e777d;
  font-weight: bold;
}
</style>
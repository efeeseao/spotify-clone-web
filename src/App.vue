<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
  // eslint-disable-next-line semi
};
</script>

<style>
a {
  color: inherit !important;
  text-decoration: none !important;
}

.albumCard,
.artistCard,
.genreCard {
  border-radius: 5px !important;
  cursor: pointer;
}
</style>

<template>
  <div>
    <song-list-item-two v-for="item in five" :key="item"></song-list-item-two>
  </div>
</template>

<script>
export default {
  name: 'SongListTwo',

  components: {
    SongListItemTwo: () => import('./SongListItemTwo.vue')
  }
  // eslint-disable-next-line semi
};
</script>

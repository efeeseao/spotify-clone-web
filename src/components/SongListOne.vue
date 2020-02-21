<template>
  <div>
    <song-list-item v-for="item of total" :key="item" dense></song-list-item>
  </div>
</template>

<script>
export default {
  name: 'SongListOne',

  props: {
    total: {
      type: Number,
      default: 5
    }
  },

  components: {
    SongListItem: () => import('../components/SongListItemOne.vue')
  }
  // eslint-disable-next-line semi
};
</script>

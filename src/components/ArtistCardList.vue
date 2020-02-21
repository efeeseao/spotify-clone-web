<template>
  <v-row>
    <v-col cols="6" sm="3" v-for="item of 4" :key="item">
      <artist-card></artist-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ArtisCardList',

  components: {
    ArtistCard: () => import('./ArtistCard.vue')
  }
  // eslint-disable-next-line semi
};
</script>

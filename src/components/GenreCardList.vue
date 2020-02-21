<template>
  <v-row>
    <v-col cols="6" sm="3" md="2" v-for="item of total" :key="item">
      <genre-card></genre-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'GenreCardList',

  props: {
    total: {
      type: Number,
      default: 5
    }
  },

  components: {
    GenreCard: () => import('./GenreCard.vue')
  }
  // eslint-disable-next-line semi
};
</script>

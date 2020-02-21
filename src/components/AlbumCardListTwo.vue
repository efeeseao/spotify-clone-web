<template>
  <v-row>
    <v-col cols="6" md="3" v-for="item of 8" :key="item">
      <album-card-two></album-card-two>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AlbumCardListTwo',

  components: {
    AlbumCardTwo: () => import('./AlbumCardTwo.vue')
  }
  // eslint-disable-next-line semi
};
</script>

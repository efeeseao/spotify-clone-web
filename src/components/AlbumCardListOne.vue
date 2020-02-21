<template>
  <v-row>
    <v-col cols="6" md="2" v-for="item of 4" :key="item">
      <album-card-one></album-card-one>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AlbumCardListOne',

  components: {
    AlbumCardOne: () => import('./AlbumCardOne.vue')
  }
  // eslint-disable-next-line semi
};
</script>

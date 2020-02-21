<template>
  <div>
    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Popular</h1>
          </v-col>
        </v-row>

        <song-list-two></song-list-two>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Albums</h1>
          </v-col>
        </v-row>
        <album-card-list-two></album-card-list-two>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ArtistOverview',

  components: {
    AlbumCardListTwo: () => import('../components/AlbumCardListTwo.vue'),
    SongListTwo: () => import('../components/SongListTwo.vue')
  }
  // eslint-disable-next-line semi
};
</script>

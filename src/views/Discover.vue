<template>
  <div>
    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Novos lançamentos</h1>
            <p class="body-2">Música nova dos artistas que você ama.</p>
          </v-col>

          <v-col cols="auto">
            <v-btn small text>Veja todos</v-btn>
          </v-col>
        </v-row>

        <album-card-list-one></album-card-list-one>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Similar ao Pink Floyd</h1>
          </v-col>

          <v-col cols="auto">
            <v-btn small text>Veja todos</v-btn>
          </v-col>
        </v-row>

        <album-card-list-one></album-card-list-one>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Discover',

  components: {
    AlbumCardListOne: () => import('../components/AlbumCardListOne.vue')
  }
  // eslint-disable-next-line semi
};
</script>

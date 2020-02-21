<template>
  <div>
    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Tocadas recentemente</h1>
          </v-col>
        </v-row>

        <album-card-list-one></album-card-list-one>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Recomendadas para hoje</h1>
            <p class="body-2">Inspirada nos teus gostos</p>
          </v-col>

          <v-col cols="auto">
            <v-btn small text>Veja todas</v-btn>
          </v-col>
        </v-row>

        <album-card-list-one></album-card-list-one>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Feito somente para você</h1>
            <p class="body-2">Obtenha melhores recomendações quanto mais você ouvir.</p>
          </v-col>

          <v-col cols="auto">
            <v-btn small text>Veja todas</v-btn>
          </v-col>
        </v-row>

        <album-card-list-one></album-card-list-one>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Featured',

  components: {
    AlbumCardListOne: () => import('../components/AlbumCardListOne.vue')
  }
  // eslint-disable-next-line semi
};
</script>

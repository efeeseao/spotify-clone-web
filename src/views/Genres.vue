<template>
  <div>
    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Genêros</h1>
          </v-col>
        </v-row>

        <genre-card-list :total="12"></genre-card-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Genre',

  components: {
    GenreCardList: () => import('../components/GenreCardList.vue')
  }
  // eslint-disable-next-line semi
};
</script>

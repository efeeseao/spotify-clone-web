<template>
  <v-container id="playlist" fluid>
    <v-row>
      <v-col>
        <h1>Fila de Reprodução</h1>
        <v-subheader>ATUAL</v-subheader>
        <song-list :total="1"></song-list>
        <v-list style="background: none">
          <v-subheader>NEXT</v-subheader>
          <song-list></song-list>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Queue',

  components: {
    SongList: () => import('../components/SongListOne.vue')
  }
  // eslint-disable-next-line semi
};
</script>

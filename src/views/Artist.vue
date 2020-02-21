<template>
  <v-container>
    <v-row class="pa-10 pb-0 artist-header align-end">
      <v-col>
        <span class="caption">210,541 OUVINTES POR MÊS</span>
        <h1 class="display-3 font-weight-bold">Queen</h1>
      </v-col>

      <v-col class="pb-0" cols="12">
        <v-tabs background-color="transparent" color="white">
          <v-tab
            :to="{
              name: 'artist',
              params: {
                id: $route.params.id
              }
            }"
          >Visão Geral</v-tab>
          <v-tab
            to="{
              name: 'about-artist',
              params: {
                id: $route.params.id
              }
            }"
          >Sobre</v-tab>
        </v-tabs>
      </v-col>
    </v-row>

    <router-view class="px-7"></router-view>
  </v-container>
</template>

<style scoped>
#artist {
  padding: 0 !important;
}

.artist-header {
  background-image: linear-gradient(
      10deg,
      rgba(48, 48, 48, 1),
      rgba(0, 0, 0, 0)
    ),
    url(https://images.cdn.veronicamagazine.nl/pVwUIOP2luwE3FeR8ayy7rVMYUs=/0x0:1200x675/890x0/smart/veronicamagazine.nl/s3fs-public/main_media/p01l6rj1.jpg?itok=VHMh1jY6);
  background-position: 50%;
  background-size: cover;
  height: 320px;
}
</style>

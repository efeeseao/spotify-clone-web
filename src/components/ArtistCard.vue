<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="artistCard" flat>
      <v-card-text>
        <v-img class="elevation-10" src style="border-radius: 50%"></v-img>
      </v-card-text>

      <v-card-tex class="pt-0">
        <p class="body-2 font-weight-medium ma-0 text-truncate white--text">
          <router-link
            :to="{
              name: 'artist',
              params: {
                id: 1
              }
            }"
          >Queen</router-link>
        </p>
        <p class="caption font-weight-light mb-4 text-truncate">Artista</p>
        <div style="position: absolute; right: 10px; bottom: 10px" v-show="hover">
          <v-icon size="35">mdi-play-circle-outline</v-icon>
        </div>
      </v-card-tex>
    </v-card>
  </v-hover>
</template>

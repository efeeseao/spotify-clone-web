<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="albumCard" flat style="background: transparent">
      <v-card-text>
        <v-img
          class="elevation-10"
          src="http://www.queenonline.com/global/assets/modules/site/images/music/FOREVER.jpg"
        >
          <v-overlay absolute :value="hover">
            <v-icon size="60">mdi-play-circle-outline</v-icon>
          </v-overlay>
        </v-img>
      </v-card-text>

      <v-card-text class="pt-0" text-center>
        <p class="body-2 font-weight-medium ma-0 text-truncate white--text">
          <router-link
            :to="{
              name: 'album',
              params: {
                id: 1
              }
            }"
          >Queen Forever</router-link>
        </p>
        <p class="caption font-weight-light mb-4 text-truncate">Queen</p>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'AlbumCardTwo'
  // eslint-disable-next-line semi
};
</script>

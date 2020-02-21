<template>
  <v-row class="grow-column">
    <v-col class="py-0" cols="12" sm="auto">
      <v-row class="justify-center align-center" style="height: 100%">
        <v-col cols="auto">
          <v-img
            class="elevation-10"
            src="http://www.queenonline.com/global/assets/modules/site/images/music/BOHEMIANRHAPSODY.jpg"
            width="56"
            height="56"
          ></v-img>
        </v-col>
        <v-col class="pl-1 text-truncate">
          <span>
            <router-link
              class="body-2 font-weight-medium ma-0"
              :to="{
                name: 'album',
                params: {
                  id: 1
                }
              }"
            >Bohemian Rhapsody</router-link>
          </span>
          <br />
          <span class="caption font-weight-light">
            <router-link
              class="ma-0"
              :to="{
                name: 'artist',
                params: {
                  id: 1
                }
              }"
            >Queen</router-link>
          </span>
        </v-col>
        <v-col cols="auto">
          <v-btn icon>
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="py-0 d-flex align-center">
      <v-row class="justify-center align-center">
        <div
          v-for="icon of [
            'shuffle',
            'skip-previus',
            'play-circle',
            'skip-next',
            'repeat'
          ]"
          :key="icon"
          class="mx-3"
        >
          <v-btn icon :small="icon != 'play-circle'" :x-large="icon == 'play-circle'">
            <v-icon v-text="`mdi-${icon}`"></v-icon>
          </v-btn>
        </div>
        <div class="ml-5 caption hidden-sm-and-down">-5:54</div>
      </v-row>
    </v-col>
    <v-col class="d-flex align-center" cols="auto">
      <v-btn :to="{ name: 'queue' }" icon>
        <v-icon>mdi-playlist-play</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Player'
  // eslint-disable-next-line semi
};
</script>

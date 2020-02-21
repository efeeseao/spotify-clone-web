<template>
  <v-container id="album" fluid>
    <v-row>
      <v-col class="pa-10 pa-sm-4 py-sm-0 pa-md-8 py-md-0 py-0" cols="12" sm="5" md="4">
        <div>
          <v-hover v-slot:default="{ hover }">
            <v-img
              class="elevation-10"
              src="http://www.queenonline.com/global/assets/modules/site/images/music/GREATEST_HITS_V2.jpg"
            >
              <v-overlay absolute opacity="0.5" :value="hover">
                <v-icon size="90">mdi-play-circle-outline</v-icon>
              </v-overlay>
            </v-img>
          </v-hover>
          <div class="text-center mt-4 mb-0">
            <p class="headline font-weight-bold ma-0 mb-1" style="line-height: 1.5rem">Killer Queen</p>
            <p class="subtitle-1 mb-4">
              <router-link
                :to="{
                    name: 'artist',
                    params: {
                      id: 1
                    }
                  }"
              >Queen</router-link>
            </p>
            <p class="caption">1981 - 14 MÚSICAS</p>
          </div>
        </div>
      </v-col>
      <v-col class="pt-0" cols="12" md="8">
        <v-hover v-for="song in songs" :key="song" v-slot:default="{ hover }">
          <v-list-item link two-line>
            <v-list-item-content class="py-0">
              <v-row class="align-center">
                <v-col class="py-0" cols="auto">
                  <v-icon>{{ hover ? 'mdi-play' : 'mdi-music-note-outline' }}</v-icon>
                </v-col>
                <v-col>
                  <v-list-item-title>
                    <v-list-item-title>{{ song }}</v-list-item-title>
                    <v-list-item-subtitle>Queen</v-list-item-subtitle>
                  </v-list-item-title>
                </v-col>
                <v-col cols="auto">3:01</v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// eslint-disable-next-line semi
export default {
  name: 'Album',

  data: () => ({
    songs: [
      'Bohemian Rhapsody',
      'Another One Bites the Dust',
      'Killer Queen',
      'Fat Bottomed Girls',
      'Bicycle Race',
      'You are my Best Friend'
    ]
  })
  // eslint-disable-next-line semi
};
</script>

<template>
  <v-hover v-slot:default="{ hover }">
    <v-list-item link>
      <v-list-item-content class="py-0">
        <v-row class="align-center">
          <v-col class="py-0" cols="auto">
            <v-icon>{{ hover ? 'mdi-play' : 'mdi-music-note-outline' }}</v-icon>
          </v-col>
          <v-col class="pa-0" cols="auto">
            <v-img
              src="http://www.queenonline.com/global/assets/modules/site/images/music/QUEEN_1.jpg"
              width="48px"
              height="48px"
            ></v-img>
          </v-col>
          <v-col>
            <v-list-item-title class="text-truncate">
              <v-list-item-title>Keep Yourself Alive</v-list-item-title>
            </v-list-item-title>
          </v-col>
          <v-col cols="auto">3:46</v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
  </v-hover>
</template>

<script>
export default {
  name: 'SongListItemTwo'
  // eslint-disable-next-line semi
};
</script>

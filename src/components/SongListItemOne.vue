<template>
  <v-hover v-slot:default="{ hover }">
    <v-lis-item class="pl-0" :dense="dense" link two-line>
      <v-list-item-content class="py-0">
        <v-row class="align-center">
          <v-col class="py-0" cols="auto">
            <v-img
              src="http://www.queenonline.com/global/assets/modules/site/images/music/QUEEN_2.jpg"
              width="64px"
              height="64px"
            >
              <v-overlay absolute opacity="0" :value="hover">
                <v-icon size="35">mdi-play-circle-outline</v-icon>
              </v-overlay>
            </v-img>
          </v-col>
          <v-col>
            <v-list-item-title>
              <v-list-item-title>
                <router-link
                  :to="{
                    name: 'album',
                    params: {
                      id: 1
                    }
                  }"
                >Father To Son</router-link>
              </v-list-item-title>
              <v-list-item-subtitle>
                <router-link
                  :to="{
                    name: 'artist',
                    params: {
                      id: 1
                    }
                  }"
                >Queen</router-link>
              </v-list-item-subtitle>
            </v-list-item-title>
          </v-col>
        </v-row>
      </v-list-item-content>
      <v-list-item-action>6:13</v-list-item-action>
    </v-lis-item>
  </v-hover>
</template>

<script>
export default {
  name: 'SongListItemOne',

  props: ['dense']
  // eslint-disable-next-line semi
};
</script>

<template>
  <v-container id="home" fluid>
    <v-row>
      <v-col class="py-0" cols="auto">
        <router-link
          active-class="font-weight-bold"
          class="white--text subtitle-2"
          :to="{ name: 'featured '}"
        >Destaque</router-link>
      </v-col>
      <v-col class="py-0" cols="auto">
        <router-link
          active-class="font-weight-bold"
          class="white--text subtitle-2"
          :to="{ name: 'genres' }"
        >Generos</router-link>
      </v-col>
      <v-col class="py-0" cols="auto">
        <router-link
          active-class="font-weight-bold"
          class="white--text subtitle-2"
          :to="{ name: 'discover' }"
        >Descobrir</router-link>
      </v-col>
    </v-row>

    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  name: 'Home'
  // eslint-disable-next-line semi
};
</script>

<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: "App",
  components: { Navbar },
  data: () => ({
    //
  }),
  async created() {
      await this.$store.dispatch('getTags')
      this.$store.dispatch('setFilterTags',[])
      await this.$store.dispatch('getProjects')
  }
};
</script>
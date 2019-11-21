<template>
  <v-container fluid class="pt-0">
    <Splash />
    <Projects />
  </v-container>
</template>

<script>
import Projects from "@/components/Projects";
import Splash from "@/components/Splash";

export default {
  components: { Projects, Splash },
  async created() {

  }
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" class="px-10">
        <h2>{{project.title}}</h2>
        <p class="display-1 font-weight-light grey--text">{{project.shortDescription}}</p>
        <div v-html="mdContent"></div>
        <v-btn
          v-for="action in project.actions"
          :key="action.text"
          color="primary"
          text
          :href="action.url"
          target="_blank"
        >{{action.text}}</v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-img :src="activeImg" :alt="project.title+' project image'"></v-img>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="(img, i) in project.allImages"
                :key="i"
                class="d-flex child-flex"
                cols="4"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card 
                  flat 
                  tile 
                  class="d-flex" 
                  :elevation="hover ? 8 : 2"
                  :class="{ 'on-hover': hover }">
                    <v-img :src="img" aspect-ratio="1" @click="setImg(img)"></v-img>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
const marked = require("marked");

export default {
  name: "project-details",
  data() {
    return {
      project: {},
      mdContent: "",
      activeImg: ""
    };
  },
  methods: {
    async getMdFile() {
      if (this.project["details"]) {
        await this.$http
          .get("/markdowns/" + this.project["details"] + ".md")
          .then(response => {
            this.mdContent = marked(response.body);
          })
          .catch(error => {
            window.console.log(error);
          });
      }
    },
    async setImg(imgPath) {
      this.activeImg = imgPath;
    }
  },
  async created() {
    await this.$store.dispatch("getProject", this.$route.params.prjId);
    this.project = await this.$store.state.activeProject;
    this.getMdFile();
    this.setImg(this.project.mainImage);
  }
};
</script>
<style scoped>
.v-card {
  transition: opacity .25s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }
</style>
<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>
          {{project.title}}
        </h1>
      </v-col>
    </v-row>
    <v-row id="about" ref="about" class="pa-10">
      <v-col cols="12" md="6">
          <p class="display-1 font-weight-light grey--text">
              {{project.shortDescription}}
          </p>
    <div v-html="mdContent"></div>
      </v-col>
      <v-col cols="12" md="6">
          <v-img :src="project.mainImage"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
const marked = require('marked');

export default {
  name: "project-details",
  data() {
      return {
          project: {},
          mdContent: ""
      }
  },
  methods: {
    async getMdFile(){
      if(this.project['details']){
          await this.$http.get("/markdowns/" + this.project['details']).then(
          response => {
            this.mdContent = marked(response.body);
          }
        ).catch(error => {
          window.console.log(error)
        })
      }
    }
  },
  async created() {
    await this.$store.dispatch('getProject', this.$route.params.prjId);
    this.project = await this.$store.state.activeProject;
    this.getMdFile();
  }
};
</script>
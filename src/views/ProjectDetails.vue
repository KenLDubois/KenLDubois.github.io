<template>
  <v-container>
    <v-row id="about" ref="about" class="pa-10">
      <v-col cols="12" md="6">
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
        <v-img 
        :src="project.mainImage"
        alt="project image">
        </v-img>
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
      mdContent: ""
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
    }
  },
  async created() {
    await this.$store.dispatch("getProject", this.$route.params.prjId);
    this.project = await this.$store.state.activeProject;
    this.getMdFile();
  }
};
</script>
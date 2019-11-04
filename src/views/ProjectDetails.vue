<template>
  <v-container fluid>
    <h1>Details</h1>
    <div v-html="mdContent"></div>
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
        ).catch(
          
        )
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
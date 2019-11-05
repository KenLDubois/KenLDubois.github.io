<template>
  <v-row class="px-1 py-1">
    <v-col cols="12" md="6" class="px-2 py-2"
     v-for="project in $store.state.projects" 
     :key="project.id"
      >
      <v-hover  v-slot:default="{ hover }">
<v-card outlined tile :elevation="hover ? 12 : 2"
:class="{ 'on-hover': hover}">
        <router-link
        :to="'project-details/'+project.id">
          <v-img
          :src="project.mainImage"
          gradient="rgba(0, 0, 0, .0), rgba(0, 0, 0, .20), rgba(0, 0, 0, .42), rgba(0, 0, 0, 9)"
          class="white--text align-end"
        >
        <v-card-title class="text-right">
            {{project.title}}
          </v-card-title>
          <v-card-subtitle class="grey--text text--lighten-2">
            {{project.shortDescription}}
          </v-card-subtitle>
          <v-card-text>
            <v-chip class="mr-1" v-for="(tag, i) in project.tags" :key="i" color="accent" dark outlined small>{{tag}}</v-chip>
          </v-card-text>
          
        </v-img>
        </router-link>
        <v-card-actions>
          <v-btn  v-for="action in project.actions" :key="action.text" color="primary" text :href="action.url"  target="_blank">{{action.text}}</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" :to="'project-details/'+project.id">Read More</v-btn>
        </v-card-actions>
      </v-card>
      </v-hover>
      
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "projects"
};
</script>
<style lang="scss" scoped>
    a {
      text-decoration: none;
    }
</style>

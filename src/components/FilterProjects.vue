<template>
<div>
   <v-divider></v-divider>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-filter</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Filter Projects
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
<v-list-item>
<v-chip-group multiple column v-model="selectedTags">
      <v-chip  
      outlined
      small
      v-for="(tag, i) in this.$store.state.allTags" 
       :key="i"
       @input="setFilter"
      >{{ tag }}</v-chip>
    </v-chip-group>
</v-list-item>
<v-list-item>
  <v-chip
       small
       v-on:click="showAll"
       color="success"
      >Show All</v-chip>
</v-list-item>
</div>
    
</template>

<script>
export default {
  name: "filter-tags",
  data() {
    return {
      selectedTags: [],
    }
  },
  methods: {
    setFilter(){
      var filterTags = []

      for(var i = 0; i < this.selectedTags.length; i++){
        filterTags.push(this.$store.state.allTags[this.selectedTags[i]])
      }

      this.$store.dispatch('setFilterTags',filterTags)
      this.$store.dispatch('getProjects')
    },
    async showAll(){
      await this.$store.dispatch('getProjects')
      this.selectedTags = [];
    }
  },
  async created() {

  }
};
</script>
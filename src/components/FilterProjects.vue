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
<v-chip-group multiple column>
      <v-chip filter outlined
       v-for="(tag, i) in $store.state.allTags" 
       v-model="tag.showTag"
       :key="i"
       @input="setFilter(tag.name,$event)"
      >{{ tag.name }}</v-chip>
      <v-chip 
       color="success"
      >Show All</v-chip>
    </v-chip-group>
</v-list-item>
</div>
    
</template>

<script>
export default {
  name: "filter-tags",
  data: () => ({
    tags: [{name: "tags", showTag: false}]
  }),
  methods: {
    setFilter(tag, event){
      window.console.log(event)
      window.console.log(tag)
    }
  },
  async created() {
    this.$store.dispatch('getTags')
  }
};
</script>
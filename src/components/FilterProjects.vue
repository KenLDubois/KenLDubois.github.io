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
      <v-chip  
      outlined
      small
      v-for="(tag, i) in allTags" 
       :v-model="tag.showTag"
       :key="i"
       @input="setFilter(tag.name,$event)"
      >{{ tag.name }}</v-chip>
      <v-chip
      small
       v-on:click="showAll"
       color="success"
      >Show All</v-chip>
    </v-chip-group>
</v-list-item>
</div>
    
</template>

<script>
export default {
  name: "filter-tags",
  data() {
    return {
      allTags: [{name:"tag Name", showTag:true}]
    }
  },
  methods: {
    setFilter(tag, event){
      window.console.log(event)
      window.console.log(tag)
    },
    async loadTags(){
      var tags = this.$store.state.allTags
      var newTags = []
      var i
      for(i = 0; i < tags.length; i++){
        newTags.push({name: tags[i], showTag: true})
      }
      this.allTags = newTags
    },
    async showAll(){
      await this.$store.dispatch('getTags')
      await this.loadTags()
      var i
      for(i = 0; i < this.allTags.length; i++){
        this.allTags[i].showTag = false
      }
    }
  },
  async created() {
    await this.showAll()
  }
};
</script>
<template>
  <nav>
    <v-app-bar app hide-on-scroll class="grey lighten-5" flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-toolbar-title class="text-uppercase grey--text">Ken Dubois</v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-btn text color="grey" href="./Ken_Dubois_Resume_2019_Fall.pdf" target="_blank">
        Download Resume
        <v-icon right dark>mdi-cloud-download</v-icon>  
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer floating v-model="drawer" color="primary" dark app>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  components: { 
    
   },
  data: () => ({
    drawer: null,
    links: [
      { icon: "mdi-view-dashboard", text: "Projects", route: "/" },
      { icon: "mdi-information", text: "About", route: "/about" },
      { icon: "mdi-email", text: "Contact", route: "/contact" }
    ]
  }),
  methods: {
    downloadResume(){
       
      }
    }
};
</script>
<style lang="scss" scoped>
  #logo {
    height: 40px;
    widows: auto;
    svg{
      fill: grey;
    }
  }
</style>
<template>
  <v-container>
    <v-row id="about" ref="about">
      <v-col cols="12" md="6">
        <h2>Contact Me</h2>
        <p class="display-1 font-weight-light grey--text">Drop me a line!</p>
        <v-card tile>
          <v-list-item v-for="(option, i) in contactOptions" :key="i">
            <v-list-item-icon>
              <v-btn
                class="mx-2"
                fab
                dark
                color="primary"
                :href="option.link"
                :target="option.target"
              >
                <v-icon dark>{{option.icon}}</v-icon>
              </v-btn>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <v-btn
                  :href="option.link"
                  :target="option.target"
                  text
                >{{option.title}}</v-btn>
              </v-list-item-title>
              <v-list-item-subtitle
               class="ml-4"
              >{{option.type}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="/images/contact.jpg"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    contactOptions: [
      {
        type: "Email",
        title: "kenldubois@gmail.com",
        link: "mailto:kenldubois@gmail.com?Subject=Hello%20from%20your%20portfolio",
        icon: "mdi-email",
        target: "_top"
      },
      {
        type: "Phone",
        title: "905.964.0696",
        link: "tel:905-964-0696",
        icon: "mdi-phone",
        target: "_top"
      },
      {
        type: "github.com/KenLDubois",
        title: "GitHub Repositories",
        link: "https://github.com/KenLDubois",
        icon: "mdi-github-circle",
        target: "_blank"
      },
      {
        type: "linkedin.com/in/ken-dubois-82922918a/",
        title: "LinkedIn Profile",
        link: "https://www.linkedin.com/in/ken-dubois-82922918a/",
        icon: "mdi-linkedin",
        target: "_blank"
      }
    ],

    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 40) || "Name must be less than 10 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    messageLen: [
      v => !!v || "Message is required",
      v => v.length <= 1000 || "Max 1000 characters"
    ],
    value: ""
  })
};
</script>
<template>
  <v-container>
    <v-row id="about" ref="about">
      <v-col cols="12" md="6">
          <h2>About Me</h2>
          <p class="display-1 font-weight-light grey--text">
              My Name is Ken Dubois. <br>I make cool stuff with .NET Core
          </p>
          <p>
            I am a .Net Core developer with a background in graphic design.
            This means that I can write software that compiles to run on nearly
            any platform and looks great when it does!
          </p>
          <p>
            I am currently enrolled in Niagara College’s
            <span class="font-italic">
              Computer Programmer Analyst
              (Co-op)
            </span> program and am set to graduate in December 2019 with exemplary
            academic standings. I am also employed at Niagara College’s <span class="font-italic">Research &amp;
            Innovation Center</span> (NCRI) where I joined the <span class="font-italic">Agriculture &amp; Environmental
            Technologies</span> team as a software developer in 2017. Before joining NCRI, I
            worked as a graphic designer in the marketing department of one of Canada’s
            oldest and most respected wineries for over 10 years.
          </p>
          <p>
            When I am not in front of a computer, I enjoy spending time with my amazing
            wife and our poorly designed miniature dachshund named Karl, whose short legs
            require constant assistance getting him up and down stairs, sofas, the bed, etc.
          </p>
            <v-btn color="primary" text to="/contact">Contact Me</v-btn>
      </v-col>
      <v-col cols="12" md="6">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-layout row class="mb-3">

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>

      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title" class="pa-0">

        <v-layout row wrap :class="`pa-3 project ${project.status}`">

          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs2 sm4 md2>
            <div class="text-right">
              <v-chip small :color="getColor(project.status)" :class="`${project.status} white--text caption my-2`">
                {{ project.status }}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>

      </v-card>

    </v-container>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      projects: [
        { 
          title: 'Design a new website', 
          person: 'Chun Li', 
          due: '1st Jan 2019', 
          status: 'ongoing', 
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { 
          title: 'Code up the homepage', 
          person: 'Mario', 
          due: '10th Jan 2019', 
          status: 'complete', 
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { 
          title: 'Design video thumbnails', 
          person: 'Ryu', 
          due: '20th Dec 2018', 
          status: 'complete', 
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { 
          title: 'Create a community forum', 
          person: 'Gouken', 
          due: '20th Oct 2018', 
          status: 'overdue', 
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  methods: {
    getColor: (status) => {
      return status=="ongoing" ? "#ffaa2c" : status=="complete" ? "#3cd1c2" : "#f83e70";
    },
    sortBy(keyword) {
      this.projects.sort((a, b) => a[keyword] < b[keyword] ? -1 : 1);
    }
  }
}
</script>

<style>
.project.complete{
  border-left: 4px solid #3cd1c2;
}
.project.ongoing{
  border-left: 4px solid #ffaa2c;
}
.project.overdue{
  border-left: 4px solid #f83e70;
}
.v-sheet{
  border-radius: 0px;
}
.row{
  margin-right: 0px;
  margin-left: 0px;
}
</style>

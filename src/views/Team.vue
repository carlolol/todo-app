<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>

    <v-container class="my-5">
      
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="member in team" :key="member.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="member.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1">{{ member.name }}</div>
              <div class="grey--text">{{ member.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message-text</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      team: [
        {
          name: 'Mario',
          role: 'Web Developer',
          avatar: '/256_1.png'
        },
        {
          name: 'Ryu',
          role: 'Graphic Designer',
          avatar: '/256_2.png'
        },
        {
          name: 'Chun Li',
          role: 'Web Developer',
          avatar: '/256_3.png'
        },
        {
          name: 'Gouken',
          role: 'Social Media Maverick',
          avatar: '/256_4.png'
        },
        {
          name: 'Yoshi',
          role: 'Sales Guru',
          avatar: '/256_5.png'
        }
      ]
    }
  }
}
</script>

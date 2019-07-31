<template>
  <v-dialog max-width="600px" v-model="showDialog">

    <template v-slot:activator="{ on }">
      <v-btn depressed v-on="on" color="#3cd1c2" tile dark small>Add new project</v-btn>
    </template>
    
    <v-card>

      <v-card-title>
        <h5>Add a New Project</h5>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3" ref="form">

          <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"/>
          <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"/>

          <v-menu max-width="290px">
            <template v-slot:activator="{ on }">
              <v-layout row>
                <v-flex shrink>
                  <v-text-field 
                    v-on="on" 
                    label="Due date" 
                    prepend-icon="mdi-calendar-range" 
                    :value="formattedDate"
                    :rules="inputRules"
                  />
                </v-flex>
              </v-layout>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

          <v-btn 
            depressed 
            tile 
            dark 
            class="mx-0 mt-3" 
            color="#3cd1c2" 
            @click="submit"
            :loading="loading"
          >
            Add project
          </v-btn>
        
        </v-form>
      </v-card-text>

    </v-card>

  </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import db from '@/fb'

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters' 
      ],
      loading: false,
      showDialog: false
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()){
        this.loading = true

        const project = {
          title: this.title,
          content: this.content,
          due: format(this.due, 'Do MMM YYYY'),
          person: 'Mario',
          status: 'ongoing'
        }

        db.collection('projects').add(project).then(() => {
          this.loading = false;
          this.showDialog = false;
          this.$emit('projectAdded');
          // this.title = "";
          // this.content = "";
          // this.due = null;
        })
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, 'Do MMM YYYY') : ''
    }
  }
}
</script>

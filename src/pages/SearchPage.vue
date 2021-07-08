<template>
  <div >
    <b-container fluid="xl">
      <b-row class="justify-content-md-center">
        <h1 class="title">Sperliga Search Page</h1>
      </b-row>
      <b-row class="justify-content-md-center">
          <b-input-group prepend="Search Query:" id="search-input">
            <b-form-input v-model="searchQuery"></b-form-input>
            <b-input-group-append>
              <b-button variant="success" @click="getResults">Search</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-row>
        <b-row class="justify-content-md-center">
            
          <b-form-group v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              id="btn-radios-1"
              v-model="type"
              :options="options"
              :aria-describedby="ariaDescribedby"
              name="radios-btn-default"
              buttons
              @change="resetQuery"
            ></b-form-radio-group>
          </b-form-group>
      </b-row>
          <br/>
      <b-row class="justify-content-md-center" >
        <PreviewWrapper
        class="results"
        v-if="hasResults" 
        :type="type"
        :results="results"
        ></PreviewWrapper>
        <h3 v-else><strong>Couldn't find such {{type}}</strong></h3>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
 data() {
    return {
      searchQuery:"",
      results: [],
      type: "player",
      options: [
          { text: 'Players', value: 'player' },
          { text: 'Teams', value: 'team' },
      ],
      hasResults: true
    };
  },
  methods: {
    async getResults(){
      try{
        this.results = []
        this.hasResults = true;
        const result = await this.axios.get(
          `${this.$root.store.domain_server}/${this.type}s/${this.type}Search/${this.searchQuery}`);
        this.results = result.data;
      }catch(err){
        this.hasResults = false;
      }
    },
    resetQuery(){
      this.hasResults = true
      // this.searchQuery = "";
      this.results = [];
    }
  },
  created(){
    this.searchTypes = this.$root.store.searchTypes;
  }
}
</script>

<style scoped>
#search-input {
  margin:15px;
  width: 500px; 
}
.results{
  align-self: center;
}
.title{
  padding: 35px;
}
</style>
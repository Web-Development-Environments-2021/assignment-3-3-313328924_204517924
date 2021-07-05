<template>
  <div>
    <h1 class="title">Search Page</h1>
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
      <b-input-group-append>
        <b-button variant="success" @click="getResults">Search</b-button>
      </b-input-group-append>
    </b-input-group>
    <b-form-group label="Button style radios" v-slot="{ ariaDescribedby }">
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
      <br/>
      Your search Query: {{ searchQuery }}
      <SearchResults
        v-if="hasResults" 
        :type="type"
        :results="results"
      ></SearchResults>
      <h3 v-else><strong>No Such {{type}}</strong></h3>
      
  </div>
</template>

<script>
import SearchResults from '../components/SearchResults.vue';

export default {
  components:{
    SearchResults: SearchResults 
  },
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
  margin-left: 20px; 
  width: 500px; 
}
</style>
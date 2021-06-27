<template>
  <div>
    <h1 class="title">Search Page</h1>
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
      <b-input-group-append>
        <b-button variant="success" @click="getResults">Search</b-button>
      </b-input-group-append>
    </b-input-group>
      <br/>
      Your search Query: {{ searchQuery }}
      <SearchResults 
        :type="searchFor"
        :results="results"
      ></SearchResults>
      
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
      searchFor: "team"
    };
  },
  methods: {
    // async getResultsForSearchType(searchType){
    //   const results = await this.axios.get(
    //     `${this.$root.store.domain_server}/${searchType}/${searchType}Search/${query}`);
    // },
    async getResults(searchTypes){
      console.log(`${this.$root.store.domain_server}/${this.searchTypes[1]}s/${this.searchTypes[1]}Search/${this.searchQuery}`)
      const result = await this.axios.get(`${this.$root.store.domain_server}/${this.searchFor}s/${this.searchFor}Search/${this.searchQuery}`);
      console.log(result.data);
      this.results = result.data;
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
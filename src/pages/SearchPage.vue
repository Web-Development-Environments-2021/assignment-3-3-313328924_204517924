<template>
  <div>
    <h1 class="title">Search Page</h1>
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
      <b-input-group-append>
        <b-button variant="success" @click="getAllResults">Search</b-button>
      </b-input-group-append>
    </b-input-group>
      <br/>
      Your search Query: {{ searchQuery }}
      <div v-for="(type, index) in searchTypes" :key="index">
        <SearchResults 
          :type="type"
          :results="searchResults[index]"
        ></SearchResults>
      </div>
  </div>
</template>

<script>
import SearchResultsVue from '../components/SearchResults.vue';
import SearchResults from '../components/SearchResults.vue';

export default {
  components:{
    SearchResults: SearchResults 
  },
 data() {
    return {
      searchTypes: [],
      searchQuery:"",
      searchResults:[]
    };
  },
  methods: {
    // async getResultsForSearchType(searchType){
    //   const results = await this.axios.get(
    //     `${this.$root.store.domain_server}/${searchType}/${searchType}Search/${query}`);
    // },
    async getAllResults(searchTypes){
      let promises = [];
      console.log(`${this.$root.store.domain_server}/${this.searchTypes[1]}s/${this.searchTypes[1]}Search/${this.searchQuery}`)
      const resu = await this.axios.get(`${this.$root.store.domain_server}/teams/teamSearch/${this.searchQuery}`);
      console.log(resu);
      // this.searchTypes.map((type) =>
      //   promises.push(
      //     this.axios.get(`${this.$root.store.domain_server}/${type}s/${type}Search/${this.searchQuery}`
      //     )
      //   ),
      // )
      // const responses = await Promise.all(promises);
      // responses.map(res => 
      //   this.searchResults.push(res));
      // console.log(this.searchResults);
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
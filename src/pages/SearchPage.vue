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
        v-model="searchFor"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radios-btn-default"
        buttons
      ></b-form-radio-group>
    </b-form-group>
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
      searchFor: "player",
      options: [
          { text: 'Players', value: 'player' },
          { text: 'Teams', value: 'team' },
      ]
    };
  },
  methods: {
    async getResults(){
      try{
        const result = await this.axios.get(
          `${this.$root.store.domain_server}/${this.searchFor}s/${this.searchFor}Search/${this.searchQuery}`);
        this.results = result.data;
      }catch(err){
        
      }
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
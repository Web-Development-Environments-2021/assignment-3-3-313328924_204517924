<template>
  <div >
    <b-container fluid="xl">
      <b-row align-h="center" class="justify-content-md-center">
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

      <b-row align-h="center" class="justify-content-md-center">
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            id="btn-radios-1"
            v-model="type"
            :options="searchOptions"
            :aria-describedby="ariaDescribedby"
            name="radios-btn-default"
            buttons
            @change="typeChangeAction"
          ></b-form-radio-group>
        </b-form-group>
      </b-row>
      <b-row align-h="center">
      </b-row>
      <b-row align-h="center">
        <b-col cols="3">
          <b-row align-h="center">sort by:</b-row>
          <b-form-select
          v-model="sort" 
          :options="sortOptions"
          @change="sortResults"
          ></b-form-select>
        </b-col>
        <b-col cols="2" v-if="type==='player'">
          <b-row align-h="center">filter by position:</b-row>
          <b-form-input v-model="positionFilter"></b-form-input>
        </b-col>
        <b-col cols="3" v-if="type==='player'">
          <b-row align-h="center">filter by team:</b-row>
          <b-form-input v-model="teamFilter"></b-form-input>
        </b-col>
      </b-row>

      <br/>
      <b-row align-h="center" class="justify-content-md-center" >
        <!-- <PreviewWrapper
        v-if="isPlayerSorted" 
        tag="b-col"
        :type="type"
        :results="sortPlayerResults"
        ></PreviewWrapper> -->
        <PreviewWrapper
        :key="update"
        v-if="hasResults" 
        tag="b-col"
        :type="type"
        :results="manipulatedResults"
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
      searchQuery: window.localStorage.getItem('query') ,
      results: [],
      manipulatedResults: [],
      type: "player",
      searchOptions: [
          { text: 'Players', value: 'player' },
          { text: 'Teams', value: 'team' },
      ],
      sort: null,
      sortOptions: [
        { value: null, text: ''},
        { value: 'player', text: 'Player Name' , disabled: false },
        { value: 'team', text: 'Team Name'}
      ],
      filter: null,
      filterOptions: [
        { value: null, text: ''},
        { value: 'position', text: 'Position' },
        { value: 'team', text: 'Team'}
      ],
      hasResults: true,
      positionFilter:"",
      teamFilter: "",
      update: 0
    };
  },
  methods: {
    async getResults(){
      try{
        this.results = [];
        this.hasResults = true;
        // const result = await this.axios.get(
        //   `${this.$root.store.domain_server}/${this.type}s/${this.type}Search/${this.searchQuery}`);
        // this.results = result.data;
        this.results = [{id:1, name:"bbbb", image:"dfsdf", position:1, team_name:"zzzz"}, {id:1, name:"aaaa", image:"dfsdf", position:1, team_name:"yyyy"}, {id:1, name:"cccc", image:"dfsdf", position:1, team_name:"wwww"}, {id:1, name:"dddd", image:"dfsdf", position:1, team_name:"xxxx"}];
        this.manipulatedResults = this.results;
        console.log(this.results);
        this.saveSearch();
      }catch(err){
        this.hasResults = false;
      }
    },
    typeChangeAction(){
      this.hasResults = true
      this.results = [];
      this.sortOptions[0].disabled = (this.type === 'team') ? false : true; 
    },
    sortResults(){
      if(this.sort === "player"){
        console.log(this.sort);
        this.results.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));  
        this.isPlayerSorted = true;
      }else if(this.sort === "team"){
        let temp = this.results.sort((a,b) => (a.team_name > b.team_name) ? 1 : ((b.team_name > a.team_name) ? -1 : 0));  
        this.results = temp
      }
      this.update++;
      this.saveSearch();
    },

    saveSearch(){
        window.localStorage.setItem('query', this.searchQuery);
        window.localStorage.setItem('results', JSON.stringify(this.results)) ;
        window.localStorage.setItem('type', this.type);
    }

  },
  created(){
    this.results =  JSON.parse(localStorage.getItem('results') || "[]");
    this.searchQuery = window.localStorage.getItem('query');
    this.type = (window.localStorage.getItem('type') === null) ? "player" : window.localStorage.getItem('type');
    this.searchTypes = this.$root.store.searchTypes;
  },
  computed:{
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
  padding: 20px;
}
/* .custom-select{
  width: 300px;
} */
</style>
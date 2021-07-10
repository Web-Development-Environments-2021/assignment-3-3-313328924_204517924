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
        <b-col cols="3">
          <b-row align-h="center">Sort by:</b-row>
          <b-form-select
          v-model="sort" 
          :options="sortOptions"
          ></b-form-select>
        </b-col>
        <b-col cols="2" v-if="type==='player'">
          <b-row align-h="center">Team:</b-row>
          <b-form-input v-model="teamFilter"></b-form-input>
        </b-col>
        <b-col cols="1" v-if="type==='player'">
          <b-row align-h="center">Position:</b-row>
          <b-form-input v-model="positionFilter"></b-form-input>
        </b-col>
        <b-col cols="1">
          <br>
          <b-button variant="success" @click="apply" >
            Apply
          </b-button>
        </b-col>
      </b-row>

      <br/>
      <b-row align-h="center" class="justify-content-md-center" >
        <b-col cols="12" align-self="center">

          <PreviewWrapper
          :key="update"
          v-if="hasResults" 
          tag="div"
          :type="type"
          :results="manipulatedResults"
          ></PreviewWrapper>
          <h3 v-else><strong>Couldn't find such {{type}}</strong></h3>
        </b-col>
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
        this.manipulatedResults = [];
        this.hasResults = true;
        const result = await this.axios.get(
          `${this.$root.store.domain_server}/${this.type}s/${this.type}Search/${this.searchQuery}`);
        this.results = result.data;
        if(this.type === "player"){
          this.results.forEach(res =>{
            console.log(res);
            console.log(this.$root.store.superLigaTeams);
            if(this.$root.store.superLigaTeams.includes(res.team_name)){
              this.manipulatedResults.push(res);
            }
          });
          this.results = this.manipulatedResults;
        }else{
          this.manipulatedResults = this.results;
        }
        console.log(this.manipulatedResults);
        this.apply;
      }catch(err){
        this.hasResults = false;
      }
    },
    typeChangeAction(){
      this.hasResults = true
      this.results = [];
      this.manipulatedResults = [];
      console.log(this.type);
      this.sortOptions[1].disabled = (this.type === 'team') ? false : true;
    },
    sortResults(){
      if(this.sort === "player" || this.type === "team"){
        this.manipulatedResults.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));  
      }else if(this.sort === "team"){
        this.manipulatedResults.sort((a,b) => (a.team_name > b.team_name) ? 1 : ((b.team_name > a.team_name) ? -1 : 0));  
      }
    },
    filterPositions(){
      if (this.positionFilter !== ""){
        console.log(parseInt(this.positionFilter));
        this.manipulatedResults = this.manipulatedResults.filter(el => el.position === parseInt(this.positionFilter));
        console.log(this.manipulatedResults);
        console.log(this.results);
      }
    },
    filterTeam(){
      if (this.teamFilter !== ""){
        this.manipulatedResults = this.manipulatedResults.filter(el => el.team_name === this.teamFilter);
        console.log(this.manipulatedResults);
        console.log(this.results);
      }
    },
    apply(){
      this.manipulatedResults = this.results;
      this.sortResults();
      this.filterPositions();
      this.filterTeam();
      this.update++;
    },
    saveSearch(){
        window.localStorage.setItem('query', this.searchQuery);
        window.localStorage.setItem('results', JSON.stringify(this.results)) ;
        window.localStorage.setItem('manipulated', JSON.stringify(this.manipulatedResults)) ;
        window.localStorage.setItem('type', this.type);
    },
  },
  created(){
    this.results = JSON.parse(localStorage.getItem('results') || "[]");
    console.log("search");
    console.log(JSON.parse(localStorage.getItem('manipulated')));
    this.manipulatedResults = JSON.parse(localStorage.getItem('manipulated') || "[]");
    this.searchQuery = (window.localStorage.getItem('query') === null) ? "" : window.localStorage.getItem('query');
    this.type = (window.localStorage.getItem('type') === null) ? "player" : window.localStorage.getItem('type');
    
    if(window.sessionStorage.getItem('doRefresh') === "1"){
      window.sessionStorage.setItem('doRefresh', "0");  
      this.$router.go()
    }
    this.sortOptions[1].disabled = (this.type === 'team') ? true : false;
  },
  beforeDestroy(){
    window.sessionStorage.setItem('doRefresh', "1");
    if(this.$root.store.username)
      this.saveSearch();
    else  
      window.localStorage.clear();
  }
}
</script>

<style scoped>
#search-input {
  margin:15px;
  width: 500px; 
}
.col{
  align-items: center;
}
.title{
  padding: 20px;
}
/* .custom-select{
  width: 300px;
} */
</style>
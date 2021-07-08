<template>
    <div>
      <!-- <div>
        <b-card-group deck>
          <div class="league-preview">
            <b-card
            img-alt="Image"
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <b-card-title>{{leagueName}}</b-card-title>
            <b-card-text>
              Season: {{ season }}
              <br/>
              Stage: {{ stage }} 
            </b-card-text>
            </b-card>
          </div>

          <b-card title="Next Match">
            <SearchResults  
            v-if="hasNextGame" 
            :type="'game'"
            :results="nextGame"
            ></SearchResults>
          </b-card>
        </b-card-group>
      </div> -->
      <div class="league-preview">
      <b-card
      img-alt="Image"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-title>{{leagueName}}</b-card-title>
      <b-card-text>
        Season: {{ season }}
        <br/>
        Stage: {{ stage }} 
      </b-card-text>
    </b-card>
    </div>
        <SearchResults  
        v-if="hasNextGame" 
        :type="'game'"
        :results="nextGame"
        ></SearchResults>
  </div>
</template>

<script>
import SearchResults from './SearchResults.vue';
export default {
    components:{
        SearchResults: SearchResults 
  },
 data() {
    return {
      hasNextGame: true,
      leagueName: "superliga", 
      season: "season", 
      stage: "stage",
      nextGame: null
    };
  },
  methods: {
    async getLeagueInfo(){
      try {
        const leagueInfo = await this.axios.get(`${this.$root.store.domain_server}/league/getDetails`);
        this.leagueName = leagueInfo.data.name;
        this.season = leagueInfo.data.season;
        this.stage = leagueInfo.data.stage;
        this.nextGame = leagueInfo.data.nextGame;
        if(this.nextGame.length()===0)
          hasNextGame = false;
      } catch (error) {
        console.log(error);
        
      }  
    }

  },
  mounted() {
    this.getLeagueInfo(); 
  }
}
</script>

<style>
.league-preview {
  display: inline-block;
  width: 250px;
  height: 200px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:rgb(44, 89, 116);
}

.league-preview .league-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 155, 197);
}

.league-preview .league-content {
  width: 100%;
  overflow: hidden;
}

</style>
<template>
    <div><br>
      <b-row align-h="center">
      <h1>League information &#9917;</h1>
      <div class="league-preview">
        <div class="league-title">{{leagueName}}</div>
        <div class="league-content">
            Season: {{ season }}
            <br/>
            Stage: {{ stage }} 
        </div>
    </div>
    </b-row>
    <b-row align-h="center">
        <PreviewWrapper  
        v-if="hasNextGame" 
        :type="'game'"
        :results="nextGame"
        ></PreviewWrapper>
    </b-row>
  </div>
</template>

<script>
export default {

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
        // if(this.nextGame.length()===0)
        //   hasNextGame = false;
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
  width: 375px;
  height: 100px;
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
  font-family:fantasy;
  color:  rgb(111, 155, 197);
}

.league-preview .league-content {
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-family:fantasy;
  overflow: hidden;
}


</style>
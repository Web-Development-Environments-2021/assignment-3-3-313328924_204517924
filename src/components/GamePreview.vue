<template>
  <div class="game-preview">
    <div :title="id" class="game-title">
    </div>
      {{data}} <br>
      <b-button :pressed.sync="myToggle" variant="primary" @click="showActivity(this.data.game_id)">Toggle Me</b-button>
  </div>
</template>

<script>
export default {
  name: "GamePreview",
  props: {data: Object},
  data(){
    return{
      myToggle: false,
      game:{
        date:"",
        time:"",
        homeTeam:"",
        gustTeam:"",
        stadium:"",
      }
    }
  },
    created() {
      
      this.date = this.data.date;
      this.time = this.data.time;
      this.homeTeam = this.data.home_team;
      this.gustTeam = this.data.away_team;
      this.stadium = this.data.stadium;    
    },
    methods:{
      async showActivity(gameId){
          res = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/activity/${gameId}`);
      }
    }
};
</script>

<style>
.game-preview {
  display: inline-block;
  width: 250px;
  height: 300px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.game-preview .game-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.game-preview .game-content {
  width: 100%;
  overflow: hidden;
}



</style>

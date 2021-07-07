<template>
<div>
  <b-container class="bv-example-row">
  <b-row>
    <b-col>
      <div class="game-preview">
          <div :title="id" class="game-title">
          </div>
          <b-card>
            <b-list-group flush>
              <b-list-group-item>Date: {{game.date.substring(0,10)}}</b-list-group-item>
            </b-list-group><br>
            <b-list-group flush>
              <b-list-group-item>Time: {{game.time.substring(11,18)}}</b-list-group-item>
            </b-list-group><br>
            <b-list-group flush>
              <b-list-group-item>Home Team: {{game.homeTeam}}</b-list-group-item>
            </b-list-group><br>
            <b-list-group flush>
              <b-list-group-item>Gust Team: {{game.gustTeam}}</b-list-group-item>
            </b-list-group><br>
            <b-list-group flush>
              <b-list-group-item>Stadium: {{game.stadium}}</b-list-group-item>
            </b-list-group><br>
            <b-list-group flush>
              <b-list-group-item v-if="game.score">Score: {{game.score}}</b-list-group-item>
            </b-list-group><br>
          </b-card>
            <b-button :pressed.sync="myToggle" variant="primary" @click="showActivity">Show Game activities</b-button>
            <router-link :to="{name: 'EditGame', params:{gameId:gameId}}">
                <b-button variant="danger">Edit match</b-button>
            </router-link>
            <AddFavorite
            v-if="this.$root.store.username"
            :type="'Games'"
            :id="gameId"
            ></AddFavorite>
        </div>
    </b-col>
    <b-col><GameActivities
        v-if="myToggle"
        :game="gameId"
      ></GameActivities></b-col>
  </b-row>
</b-container>
  </div>
</template>

<script>
import GameActivities from "./GameActivities.vue";
export default {
    components: {
    GameActivities
  },
  name: "GamePreview",
  props: {data: Object},
  data(){
    return{
      gameId:"",
      game:{
        date:"",
        time:"",
        homeTeam:"",
        gustTeam:"",
        stadium:"",
        score:null,
      },
      myToggle: false,
    }
  },
    created() {
      this.gameId = this.data.game_id;
      this.game.date = this.data.date;
      this.game.time = this.data.time;
      this.game.homeTeam = this.data.home_team;
      this.game.gustTeam = this.data.away_team;
      this.game.stadium = this.data.stadium;
      this.game.score = this.data.score;    
    },
    methods:{
      async showActivity(){

        // try{
        //   console.log(this.gameId);
        //   res = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/activity/${gameId}`);
        // }catch(err){

        // }
      }
    }
};
</script>

<style>
.game-preview {
  display: inline-block;
  width: 275px;
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

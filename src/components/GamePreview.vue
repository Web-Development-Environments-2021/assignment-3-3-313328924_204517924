<template>
<div>
  <b-container class="bv-example-row">
  <b-row>
    <b-col>
      <div class="game-preview">
          <div :title="id" class="game-title">
          <b-card>
            <b-row>
              <b-col>
                {{game.homeTeam}}
              </b-col>
              <b-col align-h="center">
                &#127386;
              </b-col>
              <b-col>
                {{game.gustTeam}}
              </b-col>
            </b-row>
            <b-row align-h="center">
              &#128197;: {{game.date.substring(0,10)}}
            </b-row>
            <b-row align-h="center">
              &#128348;: {{game.time.substring(11,18)}}
            </b-row>
            <b-row align-h="center">
              Stadium: {{game.stadium}}
            </b-row>
            <b-row align-h="center" v-if="game.score">
              Score: {{game.score}}
            </b-row>
          </b-card>
            <b-button :pressed.sync="myToggle" variant="primary" @click="showActivity">Show match activities</b-button>
            <router-link v-if="isAdmin" :to="{name: 'EditGame', params:{gameId:gameId}}">
                <b-button variant="danger">Edit match</b-button>
            </router-link>
            <AddFavorite
            v-if="this.$root.store.username"
            :type="'Games'"
            :id="gameId"
            ></AddFavorite>
            </div>
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
      isAdmin:false,
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

      }
    }
};
</script>

<style>
.game-preview {
  display: inline-block;
  width: 375px;
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
  font-family:fantasy;
  color:  rgb(5, 10, 8);
}

.game-preview .game-content {
  width: 100%;
  overflow: hidden;
}



</style>

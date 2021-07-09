<template>
<div>
      <b-card border-variant="dark" header="Dark" align="center" bg-variant="light" text-variant="dark" >
        <template #header>
        <b-row align-h="center">
          <b-col align-h="center">
             &#128197; {{game.date.substring(0,10)}}
          </b-col>
          <b-col align-h="center">
            &#128348; {{game.time.substring(11,18)}}
          </b-col>
        </b-row>
        </template>
        <b-card-text>
          <b-col>
            <b-row>
            <b-col>
              {{game.homeTeam}}
            </b-col>
            <b-col cols="2" align-h="center">
              &#127386;
            </b-col>
            <b-col>
              {{game.gustTeam}}
            </b-col>
          </b-row>
          <b-row align-h="center" v-if="game.score">
            <strong>Score: {{game.score}}</strong>
          </b-row>
          <b-row align-h="center">
            <strong>Stadium: {{game.stadium}}</strong>
          </b-row>
        </b-col>
        <b-col>
          <GameActivities
            v-if="myToggle"
            :game="gameId"
          ></GameActivities>
        </b-col>
        </b-card-text>
        <template #footer>
          <b-button-group v-if="currentRouteName" style="font-family:'Times New Roman', Times, serif">
            <b-button v-if="currentRouteName" :pressed.sync="myToggle" variant="primary" >Show activities</b-button>
            <b-button v-if="checkIfAdmin"  variant="danger">
              <router-link  :to="{name: 'EditGame', params:{gameId:gameId}}">Edit match</router-link>
            </b-button>
            <!-- <b-button>  -->
            <AddFavorite
            v-if="checkValid"
            :type="'Games'"
            :id="gameId"
            ></AddFavorite>
            <!-- </b-button> -->
          </b-button-group>
          <p v-else> SuperLiga</p>
        </template>
      </b-card>
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
      preview:false,
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
      if(this.$root.store.username==="AdminUser")
        this.isAdmin = true;
      this.gameId = this.data.game_id;
      this.game.date = this.data.date;
      this.game.time = this.data.time;
      this.game.homeTeam = this.data.home_team;
      this.game.gustTeam = this.data.away_team;
      this.game.stadium = this.data.stadium;
      this.game.score = this.data.score;    
    },
  computed:{
    checkIfAdmin(){
      if(this.$root.store.username === "AdminUser" && this.$route.name === "LeagueManagment")
        return true;
        else
          return false;
      },
      checkValid(){
        if(this.$root.store.username){
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
          var yyyy = today.getFullYear();
          today = yyyy + '-' + mm + '-' + dd;
          var now = Date.parse(today);
          var game = Date.parse(this.game.date.substring(0,10));
          if (now < game)
              return true;
          else
            return false;
        }else
        return false;
      },
    currentRouteName() {
      // console.log(this.$route.name)
      if(this.$route.name != "main")
        return true;
        else
          return false;
    }
  },
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

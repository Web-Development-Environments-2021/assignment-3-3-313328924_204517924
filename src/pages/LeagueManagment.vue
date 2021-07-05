<template>
    <div>
            <br> <br> 
        <b-button type="submit" @click="sortGames">Sort Games</b-button> 
        <h1>Add game</h1> <br>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Date:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="gameForm.date"
          type="string"
          placeholder="Enter date"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Time" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="gameForm.time"
          placeholder="Enter time"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Home team:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="gameForm.home_team"
          placeholder="Enter home team"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Gust team:" label-for="input-4" >
        <b-form-input
          id="input-4"
          v-model="gameForm.away_team"
          placeholder="Enter gust team"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Stadium:" label-for="input-4" >
        <b-form-input
          id="input-4"
          v-model="gameForm.stadium"
          placeholder="Enter stadium"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-form-group id="input-group-6" label="Referee:" label-for="input-6" >
        <b-form-input
          id="input-6"
          v-model="gameForm.referee"
          placeholder="Enter referee"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-button type="submit" @click="addGame">Add Game</b-button>
    </b-form>
    <br>
    <h1>Update game</h1>
    <b-form>
      <b-form-group id="input-group-2" label="Game id" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="updateForm.gameId"
          placeholder="Enter Game id"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Score:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="updateForm.score"
          placeholder="Enter score"
          required
        ></b-form-input>
      </b-form-group> 
    </b-form> 
    <b-button type="submit" @click="updateGame">Update Game</b-button>   
        <!-- <br><br>
        <input
        type="text"
        v-model="sortParam"
        placeholder="A value by which game will sort"
        />
        <button @click="sortGames">sort games</button>
        <br><br>
        <b-form-group label="Sort games by:" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
                id="btn-radios-1"
                v-model="searchFor"
                :options="options"
                :aria-describedby="ariaDescribedby"
                name="radios-btn-default"
                buttons
            ></b-form-radio-group>
        </b-form-group> -->
        <h1>Past Games</h1><br>
        <div v-if="pastGames.length ==0">
            <h1>No game found</h1>
        </div>
        <div v-else>
            <span>
                {{pastGames}}
            </span>
        </div>
        <br>
        <GameActivities
            :game="1"
        ></GameActivities>
        <br><br>
        <div v-if="upComingGames.length ==0">
            <h1>No game found</h1>
        </div>
        <div v-else>
            <span>
                {{upComingGames}}
            </span>
        </div>
        <br>
    </div>

</template>

<script>
import GameActivities from '../components/GameActivities.vue';
export default {
    components:{
        GameActivities: GameActivities 
  },
    name:"LeagueManagment",
    data(){
        return{
            pastGames: [],
            upComingGames: [],
            sortParam: "home_team",
            searchFor: "date",
             options: [
            { text: 'Date', value: 'date' },
            { text: 'Teams', value: 'team' },
            ],
            gameForm: {
                date: "",
                time: "",
                home_team: "",
                away_team: "",
                stadium: "",
                referee: "",
            },
            updateForm: {
                gameId: "",
                score: "",
            },

        };
    },
    methods:{
        async sortGames(value){
            // get sorted table
            const sortedGames = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/getAllGamesSorted/${this.sortParam}`);
            // update the post and upcomoing data with sorted
            this.pastGames = sortedGames.data.pastGames;
            this.upComingGames = sortedGames.data.nextGames;
            this.sortParam = "";
        },
        async addGame(){
            await this.axios.post(`${this.$root.store.domain_server}/leagueManagement/addGame`,{
                date:this.gameForm.date,
                time:this.gameForm.time,
                home_team:this.gameForm.home_team,
                away_team:this.gameForm.away_team,
                stadium:this.gameForm.stadium,
                referee:this.gameForm.referee,
            },{withCredentials: true});
        },
        async updateGame(){
            await this.axios.put(`${this.$root.store.domain_server}/leagueManagement/updateGame/${this.updateForm.gameId}`,{
                score:this.updateForm.score,
            },{withCredentials: true});
      }
    },
    async created(){
        const seperatedGames = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/pastAndFutureGames`);
        this.pastGames = seperatedGames.data.pastGames;
        this.upComingGames = seperatedGames.data.nextGames;
    }
}
</script>

<style>

</style>
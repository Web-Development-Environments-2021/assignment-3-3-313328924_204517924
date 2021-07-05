<template>
    <div>
        <h1>Past Games</h1><br>
        <div v-if="pastGames.length !=0">
            <span></span>
            {{pastGames}}
        </div>
        <div v-else>
            <h1>No game found</h1>
        </div>
        <br>
        <GameActivities
            :game="1"
        ></GameActivities>
        <br>
        <div v-if="upComingGames.length !=0">
            {{upComingGames}}
        </div>
        <div v-else>
            <h1>No game found</h1>
        </div>
        <br>
    </div>
      <!-- <div>
    <button v-on:click="comp()">click</button>
    {{ comp }}
    <div class="grid-container">
      <div class="grid-item">
        <todoList
          :initialTasks="initial_tasks"
          bgColor="background-color:yellow"
        ></todoList>
        <todoList
          :initialTasks="initial_tasks2"
          bgColor="background-color:red"
        ></todoList>
        <todoList
          :initialTasks="initial_tasks3"
          bgColor="background-color:blue"
        ></todoList>
      </div>
      <div class="grid-item" style="text-align: center">
        <img id="meme" src="./assets/meme.jpg" />
      </div>
    </div>
  </div> -->
</template>

<script>
import GameActivities from '../components/GameActivities.vue';
export default {
  components:{
    GameActivities: GameActivities 
  },
    data(){
        return{
            pastGames: [],
            pastActivity:[],
            upComingGames: [],
            upComingActivity:[],
        };
    },
    methods:{

    },
    async created(){
        const seperatedGames = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/pastAndFutureGames`);
        console.log(seperatedGames.data.pastGames);
        this.pastGames = seperatedGames.data.pastGames;
        this.upComingGames = seperatedGames.data.nextGames;
    }
};
</script>

<style>

</style>
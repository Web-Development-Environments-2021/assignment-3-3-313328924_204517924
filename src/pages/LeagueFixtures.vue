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
      showActivity(gameId){

      },
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
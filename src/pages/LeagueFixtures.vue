<template>
    <div>
        <br><br>
     <span>
    <h1>Past Matchs</h1><br>
        <SearchResults 
        v-if="hasPastGame" 
        :type="'game'"
        :results="pastGames"
        ></SearchResults>
    </span>
    <br>
    <span>
    <h1>Upcomoing Matchs</h1><br>
        <SearchResults  
        v-if="hasNextGame" 
        :type="'game'"
        :results="upComingGames"
        ></SearchResults>
    </span>
    </div>

</template>

<script>
import SearchResults from '../components/SearchResults.vue';
export default {
    components:{
        SearchResults: SearchResults 
  },
    data(){
        return{
            hasPastGame : true,
            hasNextGame : true,
            pastGames: [],
            upComingGames: [],
        };
    },
    methods:{

    },
    async created(){
        const seperatedGames = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/pastAndFutureGames`);
        this.pastGames = seperatedGames.data.pastGames;
        if(this.pastGames.length === 0)
            hasPastGame = false;
        this.upComingGames = seperatedGames.data.nextGames;
        if(this.upComingGames.length === 0)
            hasNextGame = false;
    }
};
</script>

<style>

</style>
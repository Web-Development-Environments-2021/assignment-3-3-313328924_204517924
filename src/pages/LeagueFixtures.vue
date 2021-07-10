<template>
    <div class="func">
        <br><br>
    <b-row class="justify-content-md-center">
        <h1 class="main-part">Past Matches</h1><br>
            <PreviewWrapper 
            v-if="hasPastGame"
            tag="div" 
            :type="'game'"
            :results="pastGames"
            ></PreviewWrapper>
    </b-row>
    <br>
    <b-row class="justify-content-md-center">
    <h1 class="main-part">Upcomoing Matches</h1><br>
        <PreviewWrapper  
        v-if="hasNextGame" 
        tag="col"
        type="game"
        :results="upComingGames"
        ></PreviewWrapper>
    </b-row>
    </div>

</template>

<script>

export default {
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
        console.log(this.$root.store.username);
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
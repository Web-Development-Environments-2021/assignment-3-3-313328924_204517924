<template>
    <div>
        {{pastGames}}
        <br>
        <!-- {{pastActivity}} -->
        <br>
        {{upComingGames}}
        <br>
        <!-- {{upComingActivity}} -->
    </div>
</template>

<script>
export default {
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
        const gameAndActivity = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/getAllGames`);
        let games = gameAndActivity.data.game;
        let d = new Date();
        console.log(d) 
        let curTime = d.getTime();
        let past = [];
        let future = [];
        games.forEach(game => {
            console.log(game.date);
            console.log(typeof(game.date));
            if(game.date.getTime() > curTime)
                future.push(game);
            else
                past.push(game);   
        });
        consol.log(past);
        this.pastGames = past;
        this.upComingGames = future;
        // this.games = gameAndActivity.data.game;
        // this.activity = gameAndActivity.data.activity;
    }
}
</script>

<style>

</style>
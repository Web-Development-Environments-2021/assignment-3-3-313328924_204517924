<template>
    <div>
        <h1>Past Games</h1><br>
        {{pastGames}}
        <br>
        <h1>UpComing Games</h1><br>
        {{upComingGames}}
    </div>
</template>

<script>
export default {
    name:"LeagueManagment",
    data(){
        return{
            pastGames: [],
            upComingGames: [],

        };
    },
    methods:{

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
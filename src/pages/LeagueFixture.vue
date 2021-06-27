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
        const seperatedGames = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/getGamesSeperate`);
        consol.log(seperatedGames.data);
        this.pastGames = seperatedGames.data.pastGames;
        this.upComingGames = seperatedGames.data.nextGames;
    }
};
</script>

<style>

</style>
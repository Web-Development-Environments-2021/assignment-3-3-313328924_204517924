<template>
    <div>
        {{games}}
        <br>
        {{activity}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            games: [],
            activity:[]

        };
    },
    methods:{

    },
    async created(){
        const gameAndActivity = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/getAllGames`);
        // console.log(gameAndActivity.data)
        // this.games = gameAndActivity;
        this.games = gameAndActivity.data.game;
        this.activity = gameAndActivity.data.activity;
    }
}
</script>

<style>

</style>
<template>
    <div>
        <b-container fluid="lg">

        </b-container>
    </div>
</template>
<script>
export default {
    props: {data: Object},
    data(){
        return{
            homeTeam:"",
            awayTeam:"",
            homeScore:"",
            awayScore:"",
            winner:"",
            round:"",
            date:"",
            time:"",
            homeColor:"",
            awayColor:"",
        }
    },
    created(){
        this.homeTeam = this.date.home_team;
        this.awayTeam = this.date.home_team;
        this.homeScore = this.date.home_team;
        this.awayScore = this.date.home_team;
        this.winner = this.date.home_team;
        this.round = this.date.round_name;
        this.date = this.date.home_team;
        this.time = this.date.home_team;
        this.homeColor = this.date.home_team;
        this.awayColor = this.date.home_team;
    }
}
</script>
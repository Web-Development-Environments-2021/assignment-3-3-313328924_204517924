<template>
    <div>
        <b-container>
            <b-card border-variant="dark" header="Dark" align="center" bg-variant="light" text-variant="dark">
            <template #header>
            <b-row>
              <b-col align-h="center">
                {{date}}
              </b-col>
              <b-col align-h="center">
                {{time}}
              </b-col>
              <b-col align-h="center" >
                {{round}}
              </b-col>
            </b-row>
            </template>
            <b-card-text>
            <b-row>
              <b-col align-h="center" :style="homeColor">
                {{homeTeam}}
              </b-col>
              <b-col align-h="center">
                &#127386;
              </b-col>
              <b-col align-h="center" :style="awayColor">
                {{awayTeam}}
              </b-col>
            </b-row>

            </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
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
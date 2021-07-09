<template>
    <div>
        <b-container>
            <b-card style="width:38rem" border-variant="dark" header="Dark" align="center" bg-variant="light" text-variant="dark">
            <template #header>
            <b-row align-h="center">
              <b-col align-h="center">
                &#128197;{{date}}
              </b-col>
              <b-col align-h="center">
                &#128348;{{time}}
              </b-col>
              <b-col align-h="center" >
                Round:{{round}}
              </b-col>
            </b-row>
            </template>
            <b-card-text>
            <b-row align-h="center">
              <b-col align-h="center">
                <img :src="homeTeamImg" >
              </b-col>
              <b-col align-h="center">
                <img :src="awayTeamImg" >
              </b-col>
            </b-row>
            <b-row align-h="center">
              <b-col align-h="center">
                {{homeTeam}}
              </b-col>
              <b-col cols="2" align-h="center">
                &#127386;
              </b-col>
              <b-col align-h="center">
                {{awayTeam}}
              </b-col>
            </b-row>
            <b-row align-h="center" v-if="homeScore">
              <strong>Score: {{homeScore}} - {{awayScore}}</strong>
            </b-row>
            </b-card-text>
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
            homeTeamImg:"",
            awayTeam:"",
            awayTeamImg:"",
            homeScore:null,
            awayScore:null,
            round:"",
            date:"",
            time:"",
        }
    },
    created(){
        this.homeTeam = this.data.home_team.name;
        this.homeTeamImg = this.data.home_team.logo;
        this.awayTeam = this.data.away_team.name;
        this.awayTeamImg = this.data.away_team.logo;
        if(this.data.home_score){
            this.homeScore = this.data.home_score;
            this.awayScore = this.data.away_score;
        }
        this.round = this.data.round_name;
        this.date = this.data.date;
        this.time = this.data.time;
    }
}
</script>
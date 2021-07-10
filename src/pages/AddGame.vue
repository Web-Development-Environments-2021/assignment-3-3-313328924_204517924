<template>
    <div class="main-part">
        <h1 style="color:darkslategrey;">Add game</h1> <br>
            <b-form>
            <b-form-group
                id="input-group-1"
                label="Date:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="gameForm.date"
                placeholder="Enter date"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Time" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="gameForm.time"
                placeholder="Enter time"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Home team:" label-for="input-3">
                <b-form-input
                id="input-3"
                v-model="gameForm.home_team"
                placeholder="Enter home team"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Gust team:" label-for="input-4" >
                <b-form-input
                id="input-4"
                v-model="gameForm.away_team"
                placeholder="Enter gust team"
                required
                >
                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Stadium:" label-for="input-4" >
                <b-form-input
                id="input-4"
                v-model="gameForm.stadium"
                placeholder="Enter stadium"
                required
                >
                </b-form-input>
            </b-form-group>
            <b-form-group id="input-group-6" label="Referee:" label-for="input-6" >
                <b-form-input
                id="input-6"
                v-model="gameForm.referee"
                placeholder="Enter referee"
                required
                >
                </b-form-input>
            </b-form-group>

            <b-button type="submit" @click="addGame">Add Game</b-button>
            </b-form> 
            <br><br>
            <router-link :to="{name: 'LeagueManagment'}">back to page</router-link>
 
    </div>
</template>


<script>
export default {
    data(){
        return{
                gameForm: {
                date: "",
                time: "",
                home_team: "",
                away_team: "",
                stadium: "",
                referee: "",
            },
        }
    },
    methods:{
        async addGame(){
            await this.axios.post(`${this.$root.store.domain_server}/leagueManagement/addGame`,{
                date:this.gameForm.date,
                time:this.gameForm.time,
                home_team:this.gameForm.home_team,
                away_team:this.gameForm.away_team,
                stadium:this.gameForm.stadium,
                referee:this.gameForm.referee,
            },{withCredentials: true});
            this.resetGame();
            },
        resetGame(){
          this.gameForm.date = "";
          this.gameForm.time = "";
          this.gameForm.home_team = "";
          this.gameForm.away_team = "";
          this.gameForm.stadium = "";
          this.gameForm.referee = "";
        },
    }
}
</script>
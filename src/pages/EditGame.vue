<template>
    <div>
        <b-container class="bv-example-row">
            <b-row>
                <b-col><br>
                <h1>Update game</h1><br>
                <b-form>
                <b-form-group id="input-group-3" label="Score:" label-for="input-3">
                    <b-form-input
                    id="input-3"
                    v-model="updateForm.score"
                    placeholder="Enter score"
                    required
                    ></b-form-input>
                </b-form-group> 
                </b-form> 
                <b-button type="submit" @click="updateGame">Update Game</b-button>  
                <b-button type="submit" @click="resetUpdate">Reset</b-button> <br>
                <h3 v-if="updateError">error</h3>
                </b-col>
                <b-col>
                    <h1>Insert Activity</h1><br>
                    <b-form>
                    <b-form-group id="input-group-2" label="Date:" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        v-model="ActivityForm.date"
                        placeholder="Enter Date"
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Time:" label-for="input-3">
                        <b-form-input
                        id="input-3"
                        v-model="ActivityForm.time"
                        placeholder="Enter Time"
                        required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-2" label="Minute:" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        v-model="ActivityForm.minute"
                        placeholder="Enter Minute"
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Event type:" label-for="input-3">
                        <b-form-input
                        id="input-3"
                        v-model="ActivityForm.eventType"
                        placeholder="Enter event type"
                        required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-2" label="First Player:" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        v-model="ActivityForm.playerName1"
                        placeholder="Enter Player name"
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Second Player:" label-for="input-3">
                        <b-form-input
                        id="input-3"
                        v-model="ActivityForm.playerName2"
                        placeholder="Enter Player name"
                        required
                        ></b-form-input>
                    </b-form-group>
                    </b-form> 
                    <b-button type="submit" @click="insertActivity">Insert Activity</b-button>  
                    <b-button type="submit" @click="resetActivity">Reset</b-button> <br>
                    <h3 v-if="insertError">error</h3>
                    </b-col>
            </b-row>
        </b-container>
        <router-link :to="{name: 'LeagueManagment'}">back to page</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            updateForm: {
                score: "",
            },
            updateError: false,
            Id:"",
            ActivityForm:{
                date: "",
                time: "",
                minute: "",
                eventType: "",
                playerName1: "",
                playerName2: ""
            },
            insertError:false,
        }
        {
}
    },
    created(){
        this.Id = this.$route.params.gameId;
    },
    methods:{
        async updateGame(){
          try{
             await this.axios.put(`${this.$root.store.domain_server}/leagueManagement/updateGame/${this.Id}`,{
                score:this.updateForm.score,
            },{withCredentials: true}); 
            this.resetUpdate();          
          }catch(err){
              this.updateError = true;
          }
      },
        resetUpdate(){
            this.updateError = false;
            // this.updateForm.gameId = "";
            this.updateForm.score = "";
        },
        async insertActivity(){
            try{
                await this.axios.post(`${this.$root.store.domain_server}/leagueManagement/insertActivity`,{
                    gameId:this.Id,
                    date:this.ActivityForm.date,
                    time:this.ActivityForm.time,
                    minute:this.ActivityForm.minute,
                    event_type:this.ActivityForm.eventType,
                    player_name1:this.ActivityForm.playerName1,
                    player_name2:this.ActivityForm.playerName2,
                },{withCredentials: true});
                this.resetActivity();
            }catch(err){
                this.insertError = true;
            }
        },
        resetActivity(){
          this.ActivityForm.date = "";
          this.ActivityForm.time = "";
          this.ActivityForm.minute = "";
          this.ActivityForm.eventType = "";
          this.ActivityForm.playerName1 = "";
          this.ActivityForm.playerName2 = "";
          this.insertError = false;
        },

    },
}
</script>
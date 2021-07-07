<template>
<div>
      <table class="table table-bordered">
          <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Minute</th>
                  <th scope="col">Event</th>
                  <th scope="col">Player1</th>
                  <th scope="col">Player2</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(activity,index) in activities" :key="index">
                  <th scope="row">{{index +1}}</th>
                  <td>{{activity.date.substring(0,10)}}</td>
                  <td>{{activity.time.substring(11,19)}}</td>
                  <td>{{activity.minute}}</td>
                  <td><img v-if="activity.event_type === 1" src="../assets/Goal.png"/> 
                  <img v-if="activity.event_type === 2" src="../assets/Offside.png"/>
                  <img v-if="activity.event_type === 3" src="../assets/Foul.png"/>
                  <img v-if="activity.event_type === 4" src="../assets/Red_card.png"/>
                  <img v-if="activity.event_type === 5" src="../assets/Yellwo_card.png"/>
                  <img v-if="activity.event_type === 6" src="../assets/Injury.png"/>
                  <img v-if="activity.event_type === 7" src="../assets/Substitution.png"/>
                    </td>
                  <td>{{activity.player_name1}}</td>
                  <td>{{activity.player_name2}}</td>
                  
              </tr>
          </tbody>

      </table>
</div>
</template>

<script>
export default {
    props: {game: String},
    data(){
        return{
            activities:[],
        }
    },
    async created(){
        try{
            const res = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/activity/${this.game}`);
            this.activities = res.data;
        }catch(err){

        }
    },


}
</script>

<style>

</style>
<template>
<div>
      <b-table-simple hover small caption-top responsive size="small">
          <b-thead>
              <b-tr>
                  <b-th scope="col">#</b-th>
                  <b-th scope="col">Date</b-th>
                  <b-th scope="col">Time</b-th>
                  <b-th scope="col">Minute</b-th>
                  <b-th scope="col">Event</b-th>
                  <b-th scope="col">Player1</b-th>
                  <b-th scope="col">Player2</b-th>
              </b-tr>
          </b-thead>
          <b-tbody>
              <b-tr v-for="(activity,index) in activities" :key="index">
                  <b-th size="small" scope="row">{{index +1}}</b-th>
                  <b-td>{{activity.date.substring(0,10)}}</b-td>
                  <b-td>{{activity.time.substring(11,19)}}</b-td>
                  <b-td>{{activity.minute}}</b-td>
                  <b-td><img class="event-img" v-if="activity.event_type === 1" src="../assets/Goal.png"/> 
                  <img class="event-img" v-if="activity.event_type === 2" src="../assets/Offside.png"/>
                  <img class="event-img" v-if="activity.event_type === 3" src="../assets/Foul.png"/>
                  <img class="event-img" v-if="activity.event_type === 4" src="../assets/Red_card.png"/>
                  <img class="event-img" v-if="activity.event_type === 5" src="../assets/Yellwo_card.png"/>
                  <img class="event-img" v-if="activity.event_type === 6" src="../assets/Injury.png"/>
                  <img class="event-img" v-if="activity.event_type === 7" src="../assets/Substitution.png"/>
                    </b-td>
                  <b-td>{{activity.player_name1}}</b-td>
                  <b-td>{{activity.player_name2}}</b-td>
                  
              </b-tr>
          </b-tbody>

      </b-table-simple>
</div>
</template>

<script>
export default {
    props: {game: Number},
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
            console.log(err.status);
        }
    },


}

</script>

<style>
    .event-img{
        width: 30px;
        height: 30px;
    }
</style>
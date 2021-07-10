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
    <!-- <b-table striped hover :items="res"></b-table>
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

      </table> -->
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
// export default {
//     props: {game: Number},
//     data(){
//         return{
//             activities:[],
//             res:[],
//         }
//     },

//     async created(){
//         try{
//             const res = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/activity/${this.game}`);
//             this.activities = res.data;
//             console.log(this.activities);
//             let items = [];
//             for(let i = 0;i<this.activities.length;i++){
//                 items.push({Date:this.activities[i].date.substring(0,10) , Time:this.activities[i].time.substring(11,19) ,Minute:this.activities[i].minute , Event:this.activities[i].event_type , player1:this.activities[i].player_name1 , player2:this.activities[i].player_name2});
//                 console.log(items);
//             }
//             console.log(items);
//             this.res = items;
//         }catch(err){
//             console.log(err);
//         }
//     },


// }
</script>

<style>
    .event-img{
        width: 30px;
        height: 30px;
    }
</style>
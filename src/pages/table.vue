<template>
  <div>
      <!-- <table class="table table-bordered">
          <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Home Team</th>
                  <th scope="col">Away Team</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Score</th>
                  <th scope="col">Stadium</th>
                  <th scope="col">Referee</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(game,index) in info" :key="index">
                  <th scope="row">{{index +1}}</th>
                  <td>{{game.home_team}}</td>
                  <td>{{game.away_team}}</td>
                  <td>{{game.date.substring(0,10)}}</td>
                  <td>{{game.time.substring(11,18)}}</td>
                  <td>{{game.score}}</td>
                  <td>{{game.stadium}}</td>
                  <td>{{game.referee}}</td>
                  
              </tr>
          </tbody>

      </table>
      <b-table hover :items="info" :fields="fields"></b-table> -->
  </div>
  
</template>

<script>
// export default {
//   data() {
    // return {
    //   info: [],
    // }
//   },
//     computed: {
//     async getGames(){
//       const seperatedGames = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/pastAndFutureGames`);
//       return seperatedGames.data.pastGames;
//     },
//   },
// async created(){
    // const seperatedGames = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/pastAndFutureGames`);
    // console.log(seperatedGames);
    // this.info = seperatedGames.data.pastGames;
    // console.log(this.info);
    // this.upComingGames = seperatedGames.data.nextGames;
//     }
// }
</script>

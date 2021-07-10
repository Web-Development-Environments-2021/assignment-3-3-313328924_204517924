<template>
    <div>
      <b-container class="bv-example-row">
        <b-row >
          <b-col align-h="center"><br><br>
             <router-link :to="{name: 'AddGame'}">
               <div>
                <b-card
                  title="Add match"
                  img-src="https://cdn.vox-cdn.com/thumbor/kdUXeIdF99iDYkUh_4TeI-kAC9o=/0x0:4775x3091/1200x800/filters:focal(2006x1164:2770x1928)/cdn.vox-cdn.com/uploads/chorus_image/image/69239730/1303177487.0.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="text-center"
                >
                  <b-card-text>
                    Insert new match
                  </b-card-text>
                </b-card>
              </div>
             </router-link>
          </b-col>
          <b-col align-h="center"><br><br>
            <b-card
              title="Sort match"
              img-src="https://cdn.vox-cdn.com/thumbor/kdUXeIdF99iDYkUh_4TeI-kAC9o=/0x0:4775x3091/1200x800/filters:focal(2006x1164:2770x1928)/cdn.vox-cdn.com/uploads/chorus_image/image/69239730/1303177487.0.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="text-center"
            >
            <div>
              <b-form-group label="Sort match by:" v-slot="{ ariaDescribedby }">
                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="date">Date</b-form-radio>
                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="home_team">Team</b-form-radio>
                <b-button type="submit" @click="sortGames(selected)">Sort</b-button>
              </b-form-group>
            </div>
            </b-card>
            </b-col>
        </b-row>
      </b-container>
    <br>
    <span>
    <h1>Past Matchs</h1><br>
        <PreviewWrapper :key="componentKeyPast"
        v-if="hasPastGame" 
        tag="div"
        type="game"
        :results="pastGames"
        ></PreviewWrapper>
    </span>
    <br>
    <span>
    <h1>Upcomoing Matchs</h1><br>
        <PreviewWrapper :key="componentKeyNext" 
        v-if="hasNextGame"
        tag="div" 
        :type="'game'"
        :results="upComingGames"
        ></PreviewWrapper>
    </span>
  </div>

</template>

<script>

export default {
    name:"LeagueManagment",
    data(){
        return{
            componentKeyPast:0,
            componentKeyNext:0,
            pastGames: [],
            upComingGames: [],
            selected:"",
            sortDate: "date",
            sortTeam: "home_team",
            searchFor: "date",
             options: [
            { text: 'Date', value: 'date' },
            { text: 'Teams', value: 'team' },
            ],
            hasPastGame : true,
            hasNextGame : true,
        };
    },
    methods:{
      forceRerender() {
        this.componentKeyPast += 1;
        this.componentKeyNext += 1;
      },
        async sortGames(value){
            // get sorted table
            const sortedGames = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/getAllGamesSorted/${value}`);
            // update the post and upcomoing data with sorted
            this.pastGames = sortedGames.data.pastGames;
            this.upComingGames = sortedGames.data.nextGames;
            this.forceRerender();
        },
    },
    async created(){
        const seperatedGames = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/pastAndFutureGames`);
        this.pastGames = seperatedGames.data.pastGames;
        if(this.pastGames.length === 0)
            hasPastGame = false;
        // else
        //   for (let i = 0; i<this.games.length();i++){
        //     this.games[i].isPreviwe = false;
        //   }
        this.upComingGames = seperatedGames.data.nextGames;
        if(this.upComingGames.length === 0)
            hasNextGame = false;
        // else
        //   for (let i = 0; i<this.games.length();i++){
        //     this.games[i].isPreviwe = false;
        //   }
    }
}
</script>

<style>

</style>
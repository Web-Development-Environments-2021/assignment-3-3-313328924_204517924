<template>
    <b-container class="main-part" fluid="lg">
        <b-container>

        <b-row align-h="center">
            <h2>{{name}}'s Team Card </h2>
        </b-row>
        <b-row>
            <b-col fluid align-self="stretch">
                <b-img fluid-grow :src="logo"></b-img>
            </b-col>
            <b-col align-self="center">
                <b-card style="width:24rem" title="Team Info:">
                    <b-card-text >
                        <b-list-group flush>
                            <b-list-group-item>Team Name: {{name}}</b-list-group-item>
                            <b-list-group-item>Short Code: {{shortcode}}</b-list-group-item>
                            <b-list-group-item>Foundation: {{foundation}}</b-list-group-item>
                        </b-list-group>
                    </b-card-text>
                    <template #footer>
                        <AddFavorite
                        v-if="$root.store.username"
                        type="Teams"
                        :id="id"
                        ></AddFavorite>
                    </template>
                </b-card>
            </b-col>
        </b-row>
        </b-container>
        <b-row >
            <b-col align-h="center">
                <b-button v-b-toggle.collapse-1 variant="primary">Show Team's Players</b-button>
                <b-collapse id="collapse-1" class="mt-2">
                    <PreviewWrapper
                    tag="div"
                    type="player"
                    :results="players"
                    ></PreviewWrapper>
                </b-collapse>
            </b-col>
            <b-col>
                <b-button v-b-toggle.collapse-2 variant="primary">Show Team's Matchs</b-button>
                <b-collapse id="collapse-2" class="mt-2">
                    <h1>Past fixures</h1>
                    <PreviewWrapper
                    tag="div"
                    type="APIGame"
                    :results="pastFixures"
                    ></PreviewWrapper>
                    <h1>Next fixures</h1>
                    <PreviewWrapper
                    tag="div"
                    type="APIGame"
                    :results="futureFixures"
                    ></PreviewWrapper>
                </b-collapse>
            </b-col>
        </b-row>
    </b-container>

</template>

<script>
export default {
    data(){
        return{
            id: 0,
            name: "",
            shortcode: "",
            foundation: 0,
            logo: "",
            pastFixures: [],   
            futureFixures: [],
            players: []   
        }
    },
    methods: {
        async getTeamFullDetails(){
            try{
                const teamDetails = await this.axios.get(`${this.$root.store.domain_server}/teams/getTeamFullData/${this.id}`);
                console.log(teamDetails);
                // const teamDetails = JSON.parse(sessionStorage.getItem('teamById'));
                this.name = teamDetails.data.name;
                this.shortcode = teamDetails.data.shortcode;
                this.foundation = teamDetails.data.foundation;
                this.logo = teamDetails.data.logo;
                // this.pastFixures = teamDetails.data.past_fixtures;
                this.pastFixures = teamDetails.data.past_fixtures;
                this.futureFixures = teamDetails.data.future_fixtures;
                this.players = teamDetails.data.players;
                // window.sessionStorage.setItem('teamById', JSON.stringify(teamDetails));
            }catch(err){
                console.log(err);
            }

        },
    },
    created(){
        this.id = this.$route.params.teamId;
        this.getTeamFullDetails()
    },
    beforeDestroy(){
         this.$router.go()
    }
}
</script>
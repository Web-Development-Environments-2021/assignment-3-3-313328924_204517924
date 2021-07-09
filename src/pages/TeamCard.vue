<template>
    <b-container fluid="lg">
        <b-row align-h="center">
            <h2>{{name}}'s Team Card </h2>
        </b-row>
        <b-row>
            <b-col fluid align-self="stretch">
                <b-img fluid-grow :src="logo"></b-img>
            </b-col>
            <b-col align-self="center">
                <b-card title="Team Info:">
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
        <b-button v-b-toggle.collapse-1 variant="primary">Show Team's Players</b-button>
        <b-collapse id="collapse-1" class="mt-2">
            <PreviewWrapper
            tag="b-col"
            type="player"
            :results="players"
            ></PreviewWrapper>
        </b-collapse>
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
            past_fixures: [],   
            future_fixures: [],
            players: []   
        }
    },
    methods: {
        async getTeamFullDetails(){
            const teamDetails = await this.axios.get(`${this.$root.store.domain_server}/teams/getTeamFullData/${this.id}`);
            this.name = teamDetails.data.name;
            this.shortcode = teamDetails.data.shortcode;
            this.foundation = teamDetails.data.foundation;
            this.logo = teamDetails.data.logo;
            this.past_fixures = teamDetails.data.past_fixures;
            this.future_fixures = teamDetails.data.future_fixures;
            this.players = teamDetails.data.players;
        },
        cccc(){
          console.log(this.players);  
        }
    },
    created(){
        this.id = this.$route.params.teamId;
        this.getTeamFullDetails()
    }
}
</script>
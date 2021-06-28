<template>
    <div>
     {{id}}, {{name}}, {{foundation}}   
    </div>
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
            console.log(teamDetails.data.name);
            this.shortcode = teamDetails.data.shortcode;
            this.foundation = teamDetails.data.foundation;
            this.logo = teamDetails.data.logo;
            this.past_fixures = teamDetails.data.past_fixures;
            this.future_fixures = teamDetails.data.future_fixures;
            this.playerss = teamDetails.data.playerss;
        }
    },
    created(){
        this.id = this.$route.params.teamId;
        this.getTeamFullDetails()
    }
}
</script>
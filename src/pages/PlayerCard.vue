<template>
    <div>
       {{id}}, {{name}}, {{commonName}} 
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:0,
            name: "",
            commonName: "",
            teamName: "",
            position: 0,
            nationality: "",
            birthdate: "",
            birthcountry: "",
            hight: 0,
            weghit: 0
        }
    },
    methods: {
        async getPlayerDetails(){
            const playerDetails = await this.axios.get(`${this.$root.store.domain_server}/players/playerDetails/${this.id}`);
            this.name = playerDetails.data.name;
            this.commonName = playerDetails.data.common_name;
            this.teamName = playerDetails.data.team_name;
            this.position = playerDetails.data.position;
            this.nationality = playerDetails.data.nationality;
            this.birthdate = playerDetails.data.nationality;
            this.birthcountry = playerDetails.data.birthdate;
            this.hight = playerDetails.data.hight;
            this.weghit = playerDetails.data.weghit;
        }         
    },
    created(){
        this.id = this.$route.params.playerId;
        this.getPlayerDetails();
    }
}
</script>
<template>
        <b-container fluid="xl">
            <b-row align-h="center">
                <h2>{{name}}'s Player Card </h2>
            </b-row>
            <b-row>
                <b-col fluid align-self="stretch">
                    <b-img fluid-grow :src="image"></b-img>
                </b-col>
                <b-col align-self="center">
                    <b-card title="Player Info:">
                        <b-card-text >
                            <b-list-group flush>
                                <b-list-group-item>Full Name: {{name}}</b-list-group-item>
                                <b-list-group-item>Common Name: {{commonName}}</b-list-group-item>
                                <b-list-group-item>Team: {{teamName}}</b-list-group-item>
                                <b-list-group-item>Position: {{position}}</b-list-group-item>
                                <b-list-group-item>Nationality: {{nationality}}</b-list-group-item>
                                <b-list-group-item>Birth Date: {{birthdate}}</b-list-group-item>
                                <b-list-group-item>Birth Country: {{birthcountry}}</b-list-group-item>
                                <b-list-group-item>Hight: {{hight}}</b-list-group-item>
                                <b-list-group-item>Weghit: {{weghit}}</b-list-group-item>
                            </b-list-group>
                        </b-card-text>
                        <template #footer>
                            <AddFavorite
                            v-if="$root.store.username"
                            :type="'Players'"
                            :id="id"
                            ></AddFavorite>
                        </template>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
</template>

<script>
export default {
    components:{
        // AddFavorite: AddFavorite
    },
    data(){
        return{
            id:0,
            name: "",
            commonName: "",
            image: "",
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
            try{
                const playerDetails = await this.axios.get(`${this.$root.store.domain_server}/players/playerDetails/${this.id}`);
                for(let prop in playerDetails.data){
                    if(playerDetails.data[prop] === ""){
                        playerDetails.data[prop] = "*Data is not available*";
                    }
                }
                this.name = playerDetails.data.name;
                this.image = playerDetails.data.image;
                this.commonName = playerDetails.data.common_name;
                this.teamName = playerDetails.data.team_name;
                this.position = playerDetails.data.position;
                this.nationality = playerDetails.data.nationality;
                this.birthdate = playerDetails.data.birthdate;
                this.birthcountry = playerDetails.data.birthcountry;
                this.hight = playerDetails.data.height;
                this.weghit = playerDetails.data.weight;
            }catch(err){

            }
        }         
    },
    created(){
        this.id = parseInt(this.$route.params.playerId);
        this.getPlayerDetails();
    }
}
</script>
<style>
    .row{
        padding: 30px;
    }
</style>
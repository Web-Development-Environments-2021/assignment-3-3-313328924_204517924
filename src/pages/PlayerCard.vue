<template>
    <div>
        <b-container fluid="xl">
            <b-row>
                <b-col fluid align-self="stretch">
                    <b-img fluid-grow :src="image"></b-img>
                </b-col>
                <b-col >
                    
                </b-col>
            </b-row>
            <span>
                <AddFavorite
                v-if="this.$root.store.username"
                :type="'Players'"
                :id="id"
                ></AddFavorite>
            </span> 
        </b-container>
    </div>
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
                this.name = playerDetails.data.name;
                this.image = playerDetails.data.image;
                this.commonName = playerDetails.data.common_name;
                this.teamName = playerDetails.data.team_name;
                this.position = playerDetails.data.position;
                this.nationality = playerDetails.data.nationality;
                this.birthdate = playerDetails.data.nationality;
                this.birthcountry = playerDetails.data.birthdate;
                this.hight = playerDetails.data.hight;
                this.weghit = playerDetails.data.weghit;
            }catch(err){

            }
        }         
    },
    created(){
        this.id = this.$route.params.playerId;
        this.getPlayerDetails();
    }
}
</script>
<template>
     <b-container fluid="sm">
        <b-card
        :title="name"
        border-variant="dark"
        align="center"
        class="mb-2"
        >
            <b-row class="justify-content-md-center">
                <b-img :src="image" alt="Image"></b-img>
            </b-row> 
            <!-- <b-card-body> -->
            <b-card-text class="card-txt">
                <b-row class="justify-content-md-center">
                Team: 
                </b-row> 
                <b-row class="justify-content-md-center">
                    <strong>{{teamName}}</strong>
                </b-row>
                <b-row class="justify-content-md-center">
                Position: 
                </b-row>
                <b-row no-gutters class="justify-content-md-center">
                <strong>{{position}}</strong>
                </b-row>
            </b-card-text>
            <!-- </b-card-body>   -->
            <template #footer>
                <b-row align-h="center">
                    <b-button variant="primary">
                        <router-link class="player-link" :to="{name: 'PlayerCard', params: {playerId: id}}">
                            <strong>Player Page</strong>
                        </router-link>
                    </b-button>
                </b-row>
            </template>          
        </b-card>   
    </b-container>

</template>
<script>
export default {
    props: {data: Object},

    data(){
        return{
            id: 0,
            name:"",
            image:"",
            position:"",
            teamName:""
        }
    },
    created() {
        this.id = this.data.id;
        this.name = this.data.name;
        this.image = this.data.image;
        this.position = this.data.position;
        this.teamName = this.data.team_name;    
    },

}
</script>
<style>
    .card-text{
        font-size: 20px;
        padding: 20px;
        font-family: Helvetica;
    }
    .player-link{
        color: white;
    }
    .card{
        max-width: 20rem;
    }
    img{
        width: 16rem;
    }
</style>
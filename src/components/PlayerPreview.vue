<template>
     <b-container fluid="sm">
        <b-card
        :title="name"
        border-variant="dark"
        align="center"
        style="max-width: 30rem;"
        class="mb-2"
        >
            <b-row class="justify-content-md-center">
                <b-card-img fluid-grow :src="image" alt="Image"></b-card-img>
            </b-row> 
            <!-- <b-card-body> -->
                <b-card-text class="card-txt">
                    <b-row class="justify-content-md-center">
                    Team: 
                    </b-row> 
                    <b-row class="justify-content-md-center">
                    <strong>{{teamName}}</strong><br><br>
                    </b-row>
                    <b-row class="justify-content-md-center">
                    Position: 
                    </b-row>
                    <b-row class="justify-content-md-center">
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
            <!-- <b-button variant="primary">
                <router-link class="player-link" :to="{name: 'PlayerCard', params: {playerId: id}}">
                    <strong>Player Page</strong>
                </router-link>
            </b-button> -->
        </b-card>   
    </b-container>
<!-- <b-container fluid="sm">
    <b-card class="overflow-hidden" style="max-width: 1000px;">
    <b-row >
        <b-col md="5">
            <b-card-img :src="image" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
        <b-card-body :title="name">
            <b-card-text class="card-txt">
                    Team: <br>
                    <strong>{{teamName}}</strong><br><br>
                    Position: <br>
                    <strong>{{position}}</strong>
            </b-card-text>
        </b-card-body>
        </b-col>
    </b-row> -->
        
  <!-- </b-card>
        
  </b-container> -->
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
    // :img-src="image"
    //     img-rounded="circle"
    //     img-alt="Image"
    //     img-top

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
</style>
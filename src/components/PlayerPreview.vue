<template>
     <b-container fluid="sm">
        <b-card
        :title="name"
        :img-src="image"
        img-rounded="circle"
        img-alt="Image"
        img-top
        border-variant="dark"
        align="center"
        style="max-width: 50rem;"
        class="mb-2"
        >
            <b-card-body>
                <b-card-text class="card-txt">
                    Team: <br>
                    <strong>{{teamName}}</strong><br><br>
                    Position: <br>
                    <strong>{{position}}</strong>
                </b-card-text>
            </b-card-body>            
            <b-button variant="primary">
                <router-link class="player-link" :to="{name: 'PlayerCard', params: {playerId: id}}">
                    <strong>Player Page</strong>
                </router-link>
            </b-button>
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
</style>
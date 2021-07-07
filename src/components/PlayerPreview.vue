<template>
    <div>
        <router-link :to="{name: 'PlayerCard' , params: {playerId: id}}">{{data}}</router-link>
    </div>
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
        this.team_name = this.data.team_name;    
    },

}
</script>
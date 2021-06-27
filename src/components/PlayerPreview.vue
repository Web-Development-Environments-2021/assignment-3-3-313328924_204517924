<template>
    <div>
     {{name}} , {{position}}  
    </div>
</template>
<script>
export default {
    props: {player:Object},
    data(){
        return{
            name:"",
            image:"",
            position:"",
            team_name:""
        }
    },
    created() {
        this.name = this.player.name;
        this.image = this.player.image;
        this.position = this.player.position;
        this.team_name = this.player.team_name;    
    },

}
</script>
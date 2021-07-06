<template>
    <div v-if="activities.length!=0">
       {{activities}} 
    </div>
    <div v-else>
       No game activities 
    </div>
</template>

<script>
export default {
    props: {game: String},
    data(){
        return{
            activities:{
                date:"",
                time:"",
                minute:"",
                eventType:"",
                player1:"",
                player2:"",
            }
        }
    },
    async created(){
        const res = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/activity/${this.game}`);
        this.activities = res.data;
    }

}
</script>

<style>

</style>
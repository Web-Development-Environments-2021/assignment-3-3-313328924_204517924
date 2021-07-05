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
            activities:[]
        }
    },
    async created(){
        console.log(this.game);
        const activities = await this.axios.get(`${this.$root.store.domain_server}/leagueManagement/activity/${this.game}`);
        console.log(this.activities);
        this.activities = activities.data;
    }

}
</script>

<style>

</style>
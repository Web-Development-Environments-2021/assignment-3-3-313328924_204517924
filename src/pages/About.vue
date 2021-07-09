<template>
    <div>
        <h1> Hi </h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:"",
        }
    },
    async created(){
        this.id = this.$route.params.teamId;
        const teamData = await this.axios.get(`${this.$root.store.domain_server}/teams/getTeamFullData/${this.id}`);
        console.log(teamData.data);
        
    }   
}
</script>
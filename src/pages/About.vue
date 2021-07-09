<template>
    <div>
        <h1> Past matchs </h1>
        <PreviewWrapper 
        tag="div" 
        :type="'APIGame'"
        :results="pastGames"
        ></PreviewWrapper>
        <br>
        <h1> Next matchs </h1>
        <PreviewWrapper 
        tag="div" 
        :type="'APIGame'"
        :results="nextGames"
        ></PreviewWrapper>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:"939",
            pastGames : [],
            nextGames:[],

        }
    },
    async created(){
        console.log(this.id);
        // try{
        // const teamData = await this.axios.get(`${this.$root.store.domain_server}/teams/getTeamFullData/${this.id}`);
        // console.log(teamData.data);
        // window.localStorage.setItem('teamDataAll', JSON.stringify(teamData.data)) ;
        // this.pastGames = teamData.data.past_fixures;
        // }catch(err){

        // }
        try{
        let teamData =  JSON.parse(localStorage.getItem('teamDataAll'));
        console.log(teamData);
        this.pastGames = teamData.past_fixures;
        this.nextGames = teamData.future_fixtures;
        }catch(err){

        }
        
    }   
}
</script>
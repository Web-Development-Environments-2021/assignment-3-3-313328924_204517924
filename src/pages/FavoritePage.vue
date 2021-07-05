<template>
    <div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            type: "player",
            options: [
                { text: 'Players', value: 'player' },
                { text: 'Teams', value: 'team' },
                { text: 'Games', value: 'game' },
            ]
        }
    },
    methods: {
        async getFavorite(){
            const res = await this.axios.post(`${this.$root.store.domain_server}/users/getFavorite${this.type}`,{ 
                withCredentials: true
            });
        }
    },
}
</script>
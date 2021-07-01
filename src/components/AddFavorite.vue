<template>
    <div>
        <button @click="addToFavorite">+ Add Favorite</button>   
    </div>
</template>

<script>
export default {
    props:{type: String, id:Number},

    methods: {
        async addToFavorite(){
            try{
                // await this.axios.post(`${this.$root.store.domain_server}/users/addFavorite${this.type}`, {
                await this.axios.post("http://localhost:3000/users/addFavoritePlayers", {
                    id: this.id
                });
            }catch(err){
                console.log(err);
            }
        }
    },
}
</script>
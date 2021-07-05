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
            console.log("type is "+ this.type);
            try{
                const res = await this.axios.post(`${this.$root.store.domain_server}/users/addFavorite${this.type}`, {
                    id: this.id
                    },
                    { withCredentials: true }
                );
            }catch(err){
                console.log(err);
            }
        }
    },
}
</script>
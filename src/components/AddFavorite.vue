<template>
    <div>
        <b-button
        v-if="!isFavorite" 
        @click="addToFavorite"
        variant="danger"
        >+ Add As Favorite
        </b-button>

        <p v-else class="text-info">
            <strong>One of your Favorite {{type}}</strong>
        </p>
    </div>
</template>

<script>
export default {
    props:{type: String, id:String},
    data(){
        return{
            isFavorite: false
        }
    },
    methods: {
        async addToFavorite(){
            console.log("type is "+ this.type);
            try{
                const res = await this.axios.post(`${this.$root.store.domain_server}/users/addFavorite${this.type}`, {
                    id: parseInt(this.id)
                    },
                    { withCredentials: true }
                );
            }catch(err){
                console.log(err);
            }
        },
        async checkIfAlreadyFavorite(){
            try{
                const res = await this.axios.get(`${this.$root.store.domain_server}/users/getFavorite${this.type}`,{ 
                    withCredentials: true
                });
                if(typeof(res.data) !== "string"){
                    for(let fav in res.date){
                        if(res.data[fav].id === this.id)
                            exit();
                    }
                }
                this.isFavorite = true
            }catch(err){
                console.log(err);
            }

        }
    },
    created(){
        this.checkIfAlreadyFavorite();
    }
}
</script>
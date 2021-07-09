<template>
    <div>
        <b-button
        v-if="!isFavorite" 
        @click="addToFavorite"
        variant="warning"
        >+ Add As Favorite
        </b-button>

        <b-button v-else class="text-info" disabled variant="warning">
            <strong>One of your Favorite {{type}}</strong>
        </b-button>
    </div>
</template>

<script>
export default {
    props:{type: String, id:Number},
    data(){
        return{
            isFavorite: false
        }
    },
    methods: {
        async addToFavorite(){
            try{
                const res = await this.axios.post(`${this.$root.store.domain_server}/users/addFavorite${this.type}`, {
                    id: this.id
                    },
                    { withCredentials: true }
                );
                this.isFavorite = (res.status === 201)? true : false;
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
                    for(let fav in res.data){
                        if(res.data[fav].id === this.id){
                            this.isFavorite = true;
                            return;
                        }
                    }
                }
                this.isFavorite = false;
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
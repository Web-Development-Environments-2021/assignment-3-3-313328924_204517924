<template>
    <div>
        <b-container>
            <b-row class="justify-content-md-center">
                <h1 class="title">Your Favorites</h1>
            </b-row>
            <b-row class="justify-content-md-center">
                <b-form-group v-slot="{ ariaDescribedby }">
                    <b-form-radio-group
                        id="btn-radios-1"
                        v-model="type"
                        @change="getFavorite($event)"
                        :options="options"
                        :aria-describedby="ariaDescribedby"
                        name="radios-btn-default"
                        buttons
                    ></b-form-radio-group>
                </b-form-group>
            </b-row>    
            <b-row class="justify-content-md-center">
                <PreviewWrapper
                v-if="favorites.length > 0"
                :type="type"
                :results="favorites"
                ></PreviewWrapper>
                <div 
                v-else>
                    <h3><strong>There are no favorite {{type}}s</strong></h3>
                    <p>In order to add a {{type}} as a favorite <br>go to a {{type}} page and click the Add Favorite button</p>
                </div>
            </b-row>
        </b-container>   
    </div>
</template>
<script>
export default {
    data(){
        return{
            favorites: [],
            type: "player",
            options: [
                { text: 'Players', value: 'player' },
                { text: 'Teams', value: 'team' },
                { text: 'Games', value: 'game' },
            ]
        }
    },
    methods: {
        async getFavorite(type){
            try{
                this.favorites = [];
                const typeForURL = type.charAt(0).toUpperCase() + type.slice(1) + 's';
                const res = await this.axios.get(`${this.$root.store.domain_server}/users/getFavorite${typeForURL}`,{ 
                    withCredentials: true
                });
                console.log(this.favorites)
                console.log(this.favorites.length)
                if(typeof(res.data) !== "string")
                    this.favorites = res.data;
                    // console.log(typeof(res.data));
            }catch(err){
                // console.log(this.type);
            }   
        }
    },
    computed:{
        getType(){
            return this.type
        }
    },
    created() {
        this.getFavorite(this.type)
    },
}
</script>
<style>
.row{
    padding: 20px;
}
</style>
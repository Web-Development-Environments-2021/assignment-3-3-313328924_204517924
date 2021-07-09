<template>
    <b-container fluid="sm">
        <b-card
        :title="name"
        :img-src="logo"
        img-alt="Image"
        img-top
        border-variant="dark"
        align="center"
        style="max-width: 20rem;"
        class="mb-2"
        >
        
            <b-button variant="primary">
                <router-link :to="{name: 'TeamCard', params: {teamId: id}}">Team Page</router-link>
            </b-button>
        </b-card>
    <!-- <router-link :to="{name: 'TeamCard', params: {teamId: id}}">{{data}}</router-link> -->
    </b-container>
</template>

<script>
export default {
    props: {data: Object},

    data(){
        return{
            id: 0,
            name:"",
            logo:""
        }
    },
    created() {
        this.id = this.data.id;
        this.name = this.data.name;
        this.logo = this.data.logo;
    },
}
</script>
<style>

</style>
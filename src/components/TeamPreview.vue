<template>
    <b-container>
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
            <b-button variant="primary" >
                <router-link class="team-link" :to="{name: 'TeamCard', params: {teamId: id}}">Team Page</router-link>
            </b-button>
        </b-card>
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
    .team-link{
        color: white;
    }
    .container{
        align-items: center;
    }
</style>
<template>
    <div>
     <router-link :to="{name: 'TeamCard', params: {teamId: id}}">{{data}}</router-link>
    </div>
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
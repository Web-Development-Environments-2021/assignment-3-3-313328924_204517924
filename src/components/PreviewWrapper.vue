<template>

    <b-container fluid>    
        <b-row>
            <component :is="tag" v-for="(result, index) in updateArray" :key="index">
                <component 
                :is="createChildComponentString"
                :data="results[index]"
                ></component> 
            </component>
        </b-row>
    </b-container>
</template>

<script>

export default {
    props: {tag:String, type: String, results: Array},
    data(){
        return{
            updateArr: []
        }
    },
    computed: {
        createChildComponentString(){
            let type = this.type
            return type.charAt(0).toUpperCase() + type.slice(1) + "Preview";
        },
        updateArray(){
            // this.updateArray.$set(0, {id:1, name:"kkkk", image:"dfsdf", position:1, team_name:"kkkk"});
            return this.results;
        }
    },
    created() {
        this.updated = this.results;
    },

}
</script>
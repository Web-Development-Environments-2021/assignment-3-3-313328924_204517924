<template>

    <b-container fluid>    
        <b-row>
            <component :is="tag" v-for="(result, index) in results" :key="index">
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

    computed: {
        createChildComponentString(){
            let type = this.type
            return type.charAt(0).toUpperCase() + type.slice(1) + "Preview";
        },
    },
    created() {
    },

}
</script>
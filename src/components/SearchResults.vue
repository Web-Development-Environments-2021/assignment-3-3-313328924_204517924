<template>
    <div>
        <!-- <div v-if="!haveSearchResults">
            <h3><strong>No such {{type}}</strong></h3>
        </div> -->
        <div v-for="(result, index) in results" :key="index">
            <h3>{{type}}s found:</h3>
            <component 
            :is="createChildComponentString"
            :data="results[index]"
            ></component> 
        </div>
        <div></div>
    </div>
</template>

<script>

export default {
    props: {type: String, results: Array},
    computed: {
        createChildComponentString(){
            return this.type.charAt(0).toUpperCase() + this.type.slice(1) + "Preview";
        },
    },
    created() {
        this.results = [];
    },

}
</script>
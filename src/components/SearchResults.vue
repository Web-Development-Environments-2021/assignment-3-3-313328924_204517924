<template>
    <div>
        <!-- <div v-if="!haveSearchResults">
            <h3><strong>No such {{type}}</strong></h3>
        </div> -->
        <h3>{{type}}s found:</h3>
        <div v-for="(result, index) in results" :key="index">
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
            let type = this.type
            return type.charAt(0).toUpperCase() + type.slice(1) + "Preview";
        },
    },
    created() {
    },

}
</script>
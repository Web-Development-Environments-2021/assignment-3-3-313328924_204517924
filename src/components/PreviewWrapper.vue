<template>
    <div>
        
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
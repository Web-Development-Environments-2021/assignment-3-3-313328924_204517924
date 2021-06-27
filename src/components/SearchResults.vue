<template>
    <div>
        <h3>{{type}} found:</h3>
        <div v-for="(result) in results" :key="result">
            <component 
            :is="componentId"
            :player="result"></component>   
        </div>
    </div>
</template>

<script>
export default {
    props: {type: String, results: Array},
    data(){
        return{
            component: ""
        }
    },
    methods: {
        
    },
    created() {
      this.component = this.type.charAt(0).toUpperCase() + this.type.slice(1);
      console.log(this.component);  
    },

}
</script>
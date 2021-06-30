<template>
    <div>
        <h3>{{type}}s found:</h3>
        
        <div v-for="(result, index) in results" :key="index">
            <component 
            :is="childComponent"
            :data="results[index]"
            ></component>   
        </div>
        <!-- <div>{{results[0]}}</div> -->
    </div>
</template>

<script>

export default {
    components:{
        PlayerPreview: PlayerPreview,
        TeamPreview: TeamPreview   
    },
    props: {type: String, results: Array},
    data(){
        return{
            childComponent: ""
        }
    },
    methods: {
        
    },
    created() {
      this.childComponent = this.type.charAt(0).toUpperCase() + this.type.slice(1) + "Preview";
      console.log(this.childComponent);  
    },

}
</script>
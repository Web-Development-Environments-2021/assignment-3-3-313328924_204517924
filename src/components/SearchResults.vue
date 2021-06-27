<template>
    <div>
        <h3>{{type}}s found:</h3>
        
        <div v-for="(result, index) in results" :key="index">
            <component 
            :is="component"
            :data="results[index]"
            ></component>   
        </div>
        <!-- <div>{{results[0]}}</div> -->
    </div>
</template>

<script>
import PlayerPreview from '../components/PlayerPreview';
import TeamPreview from '../components/TeamPreview.vue';

export default {
    components:{
        PlayerPreview: PlayerPreview,
        TeamPreview: TeamPreview   
    },
    props: {type: String, results: Array},
    data(){
        return{
            component: ""
        }
    },
    methods: {
        
    },
    created() {
      this.component = this.type.charAt(0).toUpperCase() + this.type.slice(1) + "Preview";
      console.log(this.component);  
    },

}
</script>
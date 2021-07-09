<template>
    <div>
        <b-container fluid="xl">
            <b-row align-h="center">
                <h2>About the Authors</h2>
            </b-row>
            <b-row>
                <b-col fluid align-self="stretch">
                </b-col>
                <b-col align-self="center">
                    <b-card  style="width:27rem" title="Ofer Avin">
                        <b-card-text >
                            <b-img id="ofer-img" rounded fluid-grow src="https://res.cloudinary.com/hatulshatul/image/upload/v1625855666/WhatsApp_Image_2021-06-11_at_15.12.28_ocoitc.jpg"></b-img>
                            <b-list-group flush>
                                <b-list-group-item> <strong> Studies: </strong><br> Cognition and Neuroscience, Division in Computer Science</b-list-group-item>
                                <b-list-group-item><strong>Year:</strong> 3'rd</b-list-group-item>
                                <b-list-group-item><strong>Institution: </strong>Ben Gurion University</b-list-group-item>
                                <b-list-group-item><strong>Birthday:</strong> May 9'th</b-list-group-item>
                                <b-list-group-item><strong>Hobies:</strong> Flipping omelets</b-list-group-item>
                            </b-list-group>
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    async created(){
        
    }   
}
</script>
<style>
    #ofer-img{
        width: 5px;
    }
</style>
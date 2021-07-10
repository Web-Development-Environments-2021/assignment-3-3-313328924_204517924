<template>
    <div>
        <b-container class="main-part" fluid="xl">
            <b-row align-h="center">
                <h2 id="about-header">About the Authors</h2>
            </b-row>
            <b-row>
                <b-col offset="0">
                    <b-card style="width:27rem" title="Ofer Avin">
                        <b-card-text >
                            <b-img class="our-image" rounded fluid-grow src="https://res.cloudinary.com/hatulshatul/image/upload/v1625855666/WhatsApp_Image_2021-06-11_at_15.12.28_ocoitc.jpg"></b-img>
                            <b-list-group flush>
                                <b-list-group-item> <strong> Studies: </strong><br> Cognition and Neuroscience, Division in Computer Science</b-list-group-item>
                                <b-list-group-item><strong>Year:</strong> 3'rd</b-list-group-item>
                                <b-list-group-item><strong>Institution: </strong>Ben Gurion University</b-list-group-item>
                                <b-list-group-item><strong>Birthday:</strong> May 9'th</b-list-group-item>
                                <b-list-group-item><strong>Hobies:</strong> Playin Music</b-list-group-item>
                            </b-list-group>
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col offset="2" >
                    <b-card  style="width:27rem" title="Tamir Shilony">
                        <b-card-text >
                            <b-img class="our-image" rounded fluid-grow src="https://res.cloudinary.com/hatulshatul/image/upload/c_scale,h_732,w_872/v1625901767/WhatsApp_Image_2021-07-10_at_09.56.37_z5u3tr.jpg"></b-img>
                            <b-list-group flush>
                                <b-list-group-item> <strong> Studies: </strong><br> Cognition and Neuroscience, Division in Computer Science</b-list-group-item>
                                <b-list-group-item><strong>Year:</strong> 3'rd</b-list-group-item>
                                <b-list-group-item><strong>Institution: </strong>Ben Gurion University</b-list-group-item>
                                <b-list-group-item><strong>Birthday:</strong> May 9'th</b-list-group-item>
                                <b-list-group-item><strong>Hobies:</strong> Playing Basketball</b-list-group-item>
                            </b-list-group>
                        </b-card-text>
                    </b-card>
                    <br><br>    
                </b-col>
            </b-row>
            <b-row align-h="center" class="more">
                More By Tamir And Ofer:
            </b-row>
            <b-row align-h="center" class="more">
                <a href="https://github.com/Web-Development-Environments-2021/Assignment2_313328924_204517924">Packman Game</a>  
            </b-row>
            <b-row align-h="center" class="more">
                <a href="https://github.com/tamirshilony/Ben-Gurion-Registration-System-Server-and-Client">Ben Gurion Registration System Server and Client</a>  
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

    #our-image{
        width: 5px;
    }
    #about-header{
        font-size: 50px;
        padding: 35px;
    }
    .more{
        font-size: 30px;
    }
</style>
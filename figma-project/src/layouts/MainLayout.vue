<!--First Fram From Figma-->
<template>
    <div class="wrapper">
             <Header/>
             <Map/>
        </div>
</template>

<script>

import Header from "../components/Header";
import Map from "../components/Map";



    export default {
        name: "main-layout",
        data(){
            return {
                users:''
            }
        },
        components:{
        Header,Map
        },
        computed:{



        },

        created() {

        },
        beforeMount() {

        },
        mounted() {

        }




    }
</script>

<style scoped>
    .wrapper{
        margin: auto;
        width: 1920px;
        height: 5470px;
        background: #FFFFFF;
        top: 0;
        left: 0;
}

</style>
<!--First Fram From Figma-->
<template>
    <div class="wrapper">

             <Header/>
        <chartContainer/>
<!--        <map2/>-->
<!--        <Map/> -->


        </div>
</template>

<script>

import Header from "../components/Header";
// import map2 from "../components/map2"
// import Map from "../components/map"
import chartContainer from "../components/chartContainer";


import {mapGetters} from 'vuex'

// import axios from "axios";



    export default {
        name: "main-layout",
        data(){
            return {
                users:''
            }
        },
        components:{
        Header,chartContainer
        },
        computed:{
        ...mapGetters(['getUsers'])

        },
        methods:{

        },

        created() {

        },
        beforeMount() {

        },
        mounted() {
            this.$store.dispatch('GET_USERS')
        },

        watch: {
            getUsers(newValue) {
                this.users = newValue
            }
        }




    }
</script>

<style scoped>
    .wrapper{
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 1920px;
        height: 5470px;
        background: #FFFFFF;
        top: 0;
        left: 0;
}

</style>
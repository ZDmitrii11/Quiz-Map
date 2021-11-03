<!--First Fram From Figma-->
<template>
    <div class="wrapper">
        <div style="width: 100px;height: 100px;background-color: yellow">

        </div>
             <Header/>
<!--             <Map/>-->
        <map2/>

        </div>
</template>

<script>

import Header from "../components/Header";
// import Map from "../components/Map";
import map2 from "../components/map2"
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
        Header,map2
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
                console.log('newUs',this.users)
            }
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
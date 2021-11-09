<template>
    <div class="mapM">
         <gmap-map
                 :center="center"
                 :zoom="zoom"
                 style="width: 100%;height: 700px;margin: auto;background-repeat: no-repeat"
                 ref="myMap"
         >

                 <gmap-marker
                         v-for="(mark,index) in markers" :key="index"
                         :position="mark"
                 />
         </gmap-map>
    </div>
</template>

<script>
    import _ from 'lodash'
    export default {
        name: "map",
        data(){
            return{
                markers:[
                    {lat:33,lng:44},
                    {lat:33,lng:44},
                    {lat:33,lng:44},
                ],
                myCoordinates: {
                    lat: 33, lng: 33
                },
                zoom: 5,
                center: {lat: 33, lng: 33},
                map: null,
            }
        },
        mounted() {
            this.$refs.myMap.$mapPromise.then(map => {
                this.map = map
            })
            _.chunk(this.markers)
            console.log(_.chunk(this.markers))
        }

    }
</script>

<style scoped>
.map{
    width: 100%;
    height: 800px;
}
</style>
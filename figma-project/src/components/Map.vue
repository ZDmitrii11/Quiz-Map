<template>
    <div class="map-container" id="map">
        <div><span>My Coordinate:
         lat: {{myCoordinates.lat}}  lng : {{myCoordinates.lng}} </span>
         {{this.$store.state.variable}}
        </div>
        <div>
            <h4>Map Coordinate:</h4>
<!--            <span>Lat:{{mapCoordinate.lat}} Lng: {{mapCoordinate.lng}}</span>-->
        </div>
             <h4>


             </h4>
        <gmap-map
         :center="center"
         :zoom="zoom"
         style="width: 90%;height: 700px;margin: auto;background-repeat: no-repeat"
         ref="myMap"
         @click="test($event)"
        >
            <gmap-marker
                    v-for="(location,index) in markerLocations" :key="index"
                    :index="index"
                    :position="location"
                    @click="someF(location)"


            />
            <gmap-polyline
                    :path.sync="markerLocations"
                     :options="{
                    strokeColor:'#6C91C2'
                  }"
            />

            <gmap-polygon
                    :path="markerPoligon"

            />
        </gmap-map>

        <button class="btn" @click="removeLastLocation">Remove Last Location</button>

        <input type="number" v-model.number="zoom" >
        <button @click="toCoordinate">To Place</button>



    </div>
</template>

<script>



    export default {
        name: "Map",
        data() {
            return {
                location:null,
                markerLocations:[],
                markerPoligon:null,
                myCoordinates: {
                    lat: 33,
                    lng: 33,
                },
                zoom:4,
                routingService:{},
                center:{lat:33,lng:33},
                current:null,
                map:null,

            }
        },
        components:{

        },
        methods:{
            removeLastLocation(){
                this.markerLocations.pop()
            },
            someF(item){
               if(this.markerLocations[0] === item){
                  this.markerLocations.push(item)
                 this.markerPoligon = this.markerLocations
                   this.markerLocations = []

               }
            },
        test(e){
            this.location = this.location = this.center  = {
                lat:e.latLng.lat(),
                lng:e.latLng.lng()
            }
            this.markerLocations.push(this.location)
        },

            toCoordinate(){

                    // this.myCoordinates.lat = Number(this.myLat)
                    // this.myCoordinates.lng = Number(this.myLng)
                    // this.zoom = Number(this.zoom)


            },
            poligonF(){
                if(this.markerLocations[0] === this.location){
                     this.polegon = this.markerLocations
                    return this.polegon
                }
            },
            mapCoordinate(){
                if(!this.map){
                    return {
                        lat:0,
                        lng:0
                    }
                }

                return {

                    lat:this.map.getCenter().lat().toFixed(4),
                    lng:this.map.getCenter().lat().toFixed(4)
                }
            }
        },
        created() {
            this.$getLocation({}).then(coordinates => {
                    this.myCoordinates = coordinates
                }
            ).catch(error=>console.log(error))


        },


        mounted() {

            this.$refs.myMap.$mapPromise.then(map => {
                this.map = map
                console.log(this.map)
            })



        },

    }
</script>

<style scoped>
    .map-container {
        width: 100%;
        height: 500px;

    }
</style>
<template>
    <div class="map-container" id="map">
        <div><span>My Coordinate:
         lat: {{myCoordinates.lat}}  lng : {{myCoordinates.lng}} </span>

        </div>
        <div>
            <h4>Map Coordinate:</h4>
            <span>Lat:{{mapCoordinate.lat}} Lng: {{mapCoordinate.lng}}</span>
        </div>
             <h4>


             </h4>
        <gmap-map
         :center="myCoordinates"
         :zoom="zoom"
         style="width: 90%;height: 500px;margin: auto;background-repeat: no-repeat"
         ref="myMap"

        />
        <label>Lat:</label>
        <input type="number" v-model.number="myLng">
        <label>Lng:</label>
        <input type="number" v-model.number="myLat">
        <label>Zoom</label>
        <input type="number" v-model.number="zoom" >
        <button @click="toCoordinate">To Place</button>
        <button @click="mapTest">MAP TEST</button>

    </div>
</template>

<script>

    export default {
        name: "Map",
        data() {
            return {
                myLat:0,
                myLng:0,
                map:null,
                myCoordinates: {
                    lat: 33,
                    lng: 33,
                },
                zoom:4
            }
        },
        components:{

        },
        methods:{
            mapTest(){
                console.log(this.map);
            },
            toCoordinate(){

                    this.myCoordinates.lat = Number(this.myLat)
                    this.myCoordinates.lng = Number(this.myLng)
                    this.zoom = Number(this.zoom)
                   console.log( this.myCoordinates)



            }
        },
        computed:{

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
        }
    }
</script>

<style scoped>
    .map-container {
        width: 100%;
        height: 500px;

    }
</style>
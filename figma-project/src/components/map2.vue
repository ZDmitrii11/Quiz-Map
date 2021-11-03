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
                @click="addMarker($event)"
                :cursor="'default'"

        >
            <div v-for="(markers,index) in objects" :key="markers.id">
                <gmap-marker
                        v-for="(marker,markindx) in markers.markers" :key="markindx[index]"
                        :index="index"
                        :position="marker"
                        :clickable="true"
                        :draggable="true"
                        @drag="setPolyline($event,markers.id,markindx)"
                        @click="verifyMarker(markers.id,marker)"

                />
                <!--            @click="verifyMarker(marker,index)"-->
                <gmap-polyline
                        :path="markers.markers"
                        :options="{
                           strokeColor:'#6C91C2'
                   }"
                />
                <gmap-polygon
                        v-for="(polegon,index) in markers.polegon" :key="index"
                        :path="polegon"
                        getEditable="true"
                        :ref="'poligon[index]'"
                />
            </div>


        </gmap-map>

        <div class="someButtons">
            <button class="btn-large" @click="removeItem()">Remove Last Item</button>
            <button class="btn-large" @click="removePolegon()">Remove Last Polegon</button>
        </div>


    </div>

</template>

<script>


    export default {
        name: "Map",
        components: {},

        data() {
            return {
                objects: [
                    {
                        id: 1,
                        markers: [],
                        polilenes: [],
                        polegon: [],

                    },

                ],
                myCoordinates: {
                    lat: 33, lng: 33
                },
                zoom: 5,
                center: {lat: 33, lng: 33},
                map: null,
                location: null,

            }
        },
        watch:{
        },
        computed: {},
        methods: {

            verifyMarker(markersId, item) {
                 if(this.objects.map(el => {
                        if (el.id === markersId) {
                            if (el.markers[0] === item) {
                                el.polegon.push(el.markers)
                            }
                        }


                    }
                ))
                 {
                     this.objects.push({
                             id: markersId + 1,
                             markers: []    ,
                             polilenes: [],
                             polegon: [],
                         })
                   console.log(this.objects)
                 }

                    },
            setPolyline(e, id, index) {

                let newMarker = {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng(),

                }

                this.objects.map(el => {
                    if (el.id === id) {
                        el.markers.splice(index, 1, newMarker)
                        el.polilenes.splice(index, 1, newMarker)
                    }

                })

            },
            removeItem() {
                this.objects[this.objects.length-1].markers
                    .splice(-1)
            },
            removePolegon(){

                if (this.objects.length === 1)
                 {
                    this.objects[0].markers = []
                    this.objects[0].polegon = []
                    this.objects[0].polilenes = []

                }
               else if (this.objects.length === 2){
                    this.objects.splice(-1)
                    this.objects[0].markers = []
                    this.objects[0].polegon = []
                    this.objects[0].polilenes = []
               }
               else if (this.objects.length > 2) {

                   this.objects.splice(-2)
                    this.objects.push({
                        id: this.objects.length,
                        markers: []    ,
                        polilenes: [],
                        polegon: [],
                    })
                }

                //     && this.objects[this.objects.length-1] ){
                //     this.objects.splice(-1)
                //     this.objects[0].markers = []
                //     this.objects[0].polegon = []
                //     this.objects[0].polilenes = []
                //     console.log(this.objects)
                // }
                // if (this.objects[this.objects.length-3] === this.objects[0]){
                //     this.objects.splice(-2)
                //     this.objects.push({
                //         id:2,
                //         markers: []    ,
                //         polilenes: [],
                //         polegon: [],
                //     })
                //
                // }



            },
            addMarker(e) {
                this.location = this.location = this.center = {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng(),
                }

                    this.objects[this.objects.length - 1].markers.push(this.location)
                    // this.objects[this.objects.length - 1].polilenes.push(this.location)




            },

        },

        created() {
            this.$getLocation({}).then(coordinates => {
                    this.myCoordinates = coordinates
                }
            ).catch(error => console.log(error))

        },

        mounted() {
            this.$refs.myMap.$mapPromise.then(map => {
                this.map = map
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




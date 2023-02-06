<template>
  <div class="hello">
   <!-- <div :key='index' v-for="(erps, index) in erps">
    <h1> {{ erps }}</h1>
   </div>
   <div :key="index" v-for="(acces, index) in acces">
    <h2>{{ acces }}</h2>
    <p>Test</p>
  </div> -->
<!-- <p>TEST TEST TEST</p> -->
<div style="height:600px; width:800px">
    <l-map ref="map" v-model:zoom="zoom" :center="[48.7507965, 2.2626174]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="markerLatLng" ></l-marker>
    </l-map>
  </div>

  </div>
</template>

<script>
import axios from 'axios'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
export default {
  name: 'HelloWorld',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data(){
    return{
      erps: null,
      acces: null,
      zoom: 13,
      center: [48.7507965, 2.2626174],
      bounds: null,
      markerLatLng: [48.753288690949674, 2.305369377136231]

    }
  },
  mounted(){
    axios
    .get('https://acceslibre.beta.gouv.fr/api/erps/?commune=Antony')
    .then((reponse) => {
      this.erps = reponse;
      console.log(this.erps)
    })
  },
  mounted2(){
  axios
  .get('https://acceslibre.beta.gouv.fr/api/accessibilite/?commune=Antony')
  .then((reponse2) =>{
    this.acces = reponse2;
    console.log(this.acces)
  })
},
}


</script>


<style>

</style>

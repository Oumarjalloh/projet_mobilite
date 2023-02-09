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
      <div :key="marker.uuid" v-for="marker in erps">
        <l-marker  :lat-lng="[marker.geom.coordinates[1], marker.geom.coordinates[0]]" v-on:click="Popup">
      </l-marker>
                <teleport to="body">
                  <div v-if="modal" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
                </teleport>
      </div>

 
      <!-- <l-marker :lat-lng="[48.7507965, 2.2626174]" >


      </l-marker> -->
    </l-map>
  </div>

  </div>
  <ul :key='erp.uuid' v-for="erp in erps">
    <li>
      <ul>
        <li>{{ erp.nom }}</li>
        <li>{{ erp.activite.nom }}</li>
        <li>Latitude : {{ erp.geom.coordinates[1] }}</li>
        <li>Longitude : {{ erp.geom.coordinates[0] }}</li>
      </ul>
    </li>
  </ul>

</template>

<script>
import axios from 'axios'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, } from "@vue-leaflet/vue-leaflet";
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
      modal: false
    }
  },
  mounted(){
    axios
    .get('https://acceslibre.beta.gouv.fr/api/erps/?commune=Antony&readable=true&page_size=150')
    .then((reponse) => {
      this.erps = reponse;
      this.erps = this.erps.data.results
      console.log(this.erps)
    })
  },
  methods: {
    Popup(){
      if (this.modal== false) {
        this.modal = true
      }
      else {
        this.modal = false
      }
      alert('Marche ?')
    }
  }
}


</script>
<style>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>

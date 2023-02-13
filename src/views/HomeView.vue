<template>
  <div class="hello">
    <div class="search-container">
        <form action="#">
          <input type="text" placeholder="Rechercher...">
          <button type="submit">AHHAHHAHHH</button>

        </form>
      </div>
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
                    <ul :key='erp.uuid' v-for="erp in erps">
    <li>
      <ul>
        <li>{{ erp.nom }}</li>

      </ul>
    </li>
  </ul>

    <button @click="open = false">Close</button>
  </div>
                </teleport>
      </div>
    </l-map>
  </div>

  </div>

<!-- Liste des erps  -->
  <!-- <ul :key='erp.uuid' v-for="erp in erps">
    <li>
      <ul>
        <li>{{ erp.nom }}</li>
        <li>{{ erp.activite.nom }}</li>
        <li>Latitude : {{ erp.geom.coordinates[1] }}</li>
        <li>Longitude : {{ erp.geom.coordinates[0] }}</li>
      </ul>
    </li>
  </ul> -->

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
    }
  }
}

</script>
<style>

.modal {
  position: fixed;
  font-family: "Montserrat", sans-serif;
  color: white;
  background-color: orange;
  border-radius: 2ch;
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
.search-container {
  display: flex;
  justify-content: center;
  border: 1px solid black;
  align-items: center;
  height: 50px;
}

form {
  display: flex;
  align-items: center;
  height: 100%;
}

input[type="text"] {
  width: 60%;
  padding: 10px;
  border: none;
  border-radius: 25px 0 0 25px;
  outline: none;
}

button[type="submit"] {
  width: 40%;
  padding: 10px;
  background-color: lightblue;
  color: white;
  border: none;
  border-radius: 0 25px 25px 0;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: blue;
}

</style>

<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@0.79.0/dist/L.Control.Locate.min.css" />
  <div class="popup">
    <h2>ATTENTION</h2>
    <p>Vous avez refusé l'accès pour que l'on vous localise.<br>Veuillez accepter la geolocalisation pour profiter des fonctionnalité de navigation</p>
    <div class="ensemble-btn">
      <button class="btn-yes">Accepter</button>
      <button @click = false class="btn-no">Fermer</button>
    </div>

  </div>

  <div class="hello">
      <div>
        <div class="items-search">
          <input type="text" v-model="searchText" placeholder="Rechercher..." class="search">
          <search @results="filterResults"></search>
          <ul v-show="hasResult">
            <li v-for="result in filteredResults" :key="result.id">
              {{ result.nom }}
            </li>
          </ul>
        </div>
      </div>
<div class="map">
    <l-map ref="map" v-model:zoom="zoom" :center="[48.7507965, 2.2626174]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <div :key="marker.uuid" v-for="marker in result">
        <l-marker  :lat-lng="[marker.geom.coordinates[1], marker.geom.coordinates[0]]" v-on:click="Popup(marker.slug)">
        </l-marker>
        <l-circle v-for="position in circle.center" :key="position.showPosition"
      :lat-lng="[position.coords[0],position.coords[1]]"
      :radius="circle.radius"
      :color="circle.color" />
      </div>



    </l-map>
    <div v-if="modal" class="modal">
        <div>
         <h3>{{ acces.nom }}</h3> 
        <p>{{ acces.activite.nom }}</p>
        <p>{{ acces.adresse }}</p>
         <a href="tel:{{ acces.telephone }}">{{acces.telephone}}</a>
        </div> 
        <button @click="modal = false" class="btn-modal">Fermer</button>
    </div>
          <button @click="getLocalisation()">Loc</button>
  </div>

  </div>

</template>

<script>

import axios from 'axios'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LCircle} from "@vue-leaflet/vue-leaflet";
export default {
  name: 'HelloWorld',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircle
    
    
  },
  data(){
    return{
      erps: null,
      acces: null,
      zoom: 13,
      center: [48.7507965, 2.2626174],
      bounds: null,
      modal: false,
      searchitems: false,
      searchText: "",
      result: [],
      hasResult: false,
      circle: {
        center: [],
        radius: 1000,
        color: 'red',
        fillOpacity: 0.2
          },
      }
  },
  mounted(){
    axios
    .get('https://acceslibre.beta.gouv.fr/api/erps/?commune=Antony&readable=true&page_size=150')
    .then((reponse) => {
      this.result = reponse;
      this.result = this.result.data.results
    })
    // .then((param) => {
    //   this.erps = param;
    //   this.erps = this.erps.data.results
    // }),

  },


  methods: {
   
    Popup(slug){
      if (this.modal== false) {
        axios
        .get(`https://acceslibre.beta.gouv.fr/api/erps/${slug}`)
        .then((reponse) => {
          this.acces = reponse;
          this.acces = this.acces.data
          console.log(this.acces)
        })
        this.modal = true
      }
      else {
        this.modal = false
      }
    },
    filterResults() {
        if(this.searchText.length >= 1) {
          this.hasResult = true;
          return this.result.filter((resultos) => {
            return resultos.nom.toLowerCase().includes(this.searchText.toLowerCase());
          });
        } else {
          this.hasResult = false;
        }
    },
    getLocalisation(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this.showPosition, this.Error)
      }
    },
    Error(){
      alert('Veuillez accepter la localisation de votre position')
    },
    showPosition: function (position){
      this.lat = position.coords.lattitude;
      this.lon = position.coords.lattitude;
      console.log (position)
    },


  },
  computed: {
    filteredResults() {
        return this.searchText ? this.filterResults() : this.result;
    },
  },

}


</script>
<style>
.popup{
  display: grid;
  justify-content: center;
  text-align: center;
  margin: 20px;
}
.popup h2{
  color: red;
  font-size: 32px;
}
.ensemble-btn{
  margin-top: 10px;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
}

.btn-yes{
  background-color: rgb(30, 184, 30);
  color: white;
  width: 40%;
}
.btn-no{
  background-color: rgb(196, 33, 33);
  color: white;
  width: 40%;
}
.modal {
  display: grid;
  position: absolute;
  font-family: "Montserrat", sans-serif;
  color: white;
  background-color: white;
  border: 1px #FF715B solid;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  z-index: 9990;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
}
.btn-modal{
  margin-top: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  place-self: center;
  background-color: #FF715B;
  font-family: "Monserrat", sans-serif;
  color: white;
  padding: 10px;
  width: 40%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.panel {
  font: 16px "Open Sans", Helvetica, Arial, sans-serif;
  border: 1px solid #22d;
  padding: 12px;
  width: 500px;
  text-align: center;
}

.map {
  width: 100%;
  height: 60vh;
  position: relative;
}

.search {
  width: 90%;
  margin: 20px auto;
  display: block;
  background-color: var(--bg-search);
  height: 40px;
  font-size: 20px;
  padding: 0 16px;
  border-radius: 40px;
  box-shadow: 0 8px 16px rgba(110, 110, 110, 0.206);
  border: none;
}
input {
  color: var(--color-text);
}
input::placeholder {
  color: var(--color-text);
}
input::type {
  color: var(--color-text);
}


.items-search ul {
  width: 90%;
  margin: 10px auto;
  max-height: 250px;
  overflow-y: scroll;
}

.items-search ul li {
  list-style: none;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px 0;
  cursor: pointer;
}
h3 {
  color: var(--color-titre);
}
</style>

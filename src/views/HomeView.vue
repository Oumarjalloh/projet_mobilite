<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@0.79.0/dist/L.Control.Locate.min.css" />
  <link rel="stylesheet" href="leaflet-routing-machine.css" />

  <div  class="popup" >
    <p id="haha"></p>
  </div>

  <div class="hello">
<!-- 
      <div>
        <button type="button" class="filtres" @click="filtreSlug(nom)">Appliquer des filtres</button>
      </div>
      <div v-if="filtre" >
        <p>{{acces.activite.nom}}</p>
        <button class="btn-modal" @click="filtre = false">Fermer</button>
      </div> -->
<div>

    <l-map style="z-index= 1; width: 100%; height: 70vh; position: relative;" v-model:zoom="zoom" :center="[48.7507965, 2.2626174]" :options="{zoomControl: false}">
      <div class="btn-map">
        <button @click="getLocalisation()" class="boutton-loc"><img src='../assets/localisation.png'></button>
        <button @click="signal = true" class="boutton-loc"> <img src="../assets/signal.png" alt=""></button>
      </div>
      <form>
        <div class="container-signal" v-if="signal">
        <input type="text" class="adresse" name="nom" placeholder="Insérer l'adresse...">
        <div class='from-loc'>
    <label for="subscribeNews" class="lbl-text">Depuis ma localisation</label>
    <input type="checkbox"  name="localisation" value="localisation">
        </div>
        <button class="btn-modal">Valider</button>
        <button class="btn-close" @click="signal = false">Fermer</button>
      </div>
      </form>
   
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>

      <div :key="marker.uuid" v-for="marker in result">
        <l-marker  :lat-lng="[marker.geom.coordinates[1], marker.geom.coordinates[0]]" v-on:click="Popup(marker.slug)">
        </l-marker>
        <l-marker :lat-lng="[48.7507965, 2.2626174]" :icon="icon">
        </l-marker>
      </div>
      <l-circle
          :lat-lng=[circle.lat,circle.lon]
          :radius="circle.radius"
          :color="circle.color" />


          <l-control-zoom position="bottomright" color="red"></l-control-zoom>
          <div v-if="modal" class="modal">
        <div>
         <h3>{{ acces.nom }}</h3> 
        <p>{{ acces.activite.nom }}</p>
        <p>{{ acces.adresse }}</p>
         <a href="tel:{{ acces.telephone }}">{{acces.telephone}}</a>
        </div> 
        <div class="btn-travel">
          <button class="btn-modal">Commencer le trajet</button>
        <button @click="modal = false" class="btn-close">Fermer</button>
        </div>
    </div>
    </l-map>
    <!-- <div class="container-filtre" >
      <button class="btn-filter">Boulangeries</button>
      <button class="btn-filter">Restaurants</button>
      <div v-for="filtre in result" :key="filtre.uuid">
        <button class="btn-filter" @click="filtreSlug(filtre.slug)" >...</button>
      </div>
    </div>
      <div >
        <button class="btn-filter">Supermarchés</button>
        <button class="btn-filter">Epiceries</button>
        <button class="btn-filter">Ecoles</button>
       <div v-if="filtre" class="filtre-popup">
        <button class="btn-filter">{{ accesb.activite.nom }}</button>
        <button @click="filtre = false" class="btn-close">Fermer</button>

       </div>
  
        </div> -->


        <div class="items-search" :class="{ active : isActive}" @click="isActive = true" >
          <div class="search-bar">
          <input type="text" v-model="searchText" placeholder="Rechercher..." class="search">
          <search @results="filterResults"><img src="../assets/search-1.png"></search>
          </div>
  <div class="results-search">
      <ul v-show="hasResult">
        <div class="li-search">
          <li v-for="result in filteredResults" :key="result.id">
            <!-- <img src=""> -->
           
            <div class="descriptif-search">
              <h4>{{ result.nom }}</h4> 
              <p> {{ result.adresse }}</p>
             <p>92002</p>
            </div>         
           </li>    
        </div>
      </ul>
    </div>

        </div>


  </div>
 

  </div>

</template>

<script>

import axios from 'axios'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LCircle,LControlZoom, } from "@vue-leaflet/vue-leaflet";
import { latLng, icon } from "leaflet";
export default {
  name: 'HelloWorld',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircle,
    LControlZoom,
    
  },
  data(){
    return{
      filtre: false,
      signal: false,
      erps: null,
      acces: null,
      haha: null,
      zoom: 13,
      center: latLng[48.7507965, 2.2626174],
      bounds: null,
      modal: false,
      searchitems: false,
      searchText: "",
      result: [],
      hasResult: false, 
      circle: {
        lat: "",
        lon: "",
        radius: 10,
        color: 'red',
        fillOpacity: 0.5
          },    
      isActive : false,
      icon: icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/3967/3967195.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
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
    
    filtreSlug(slug){
      if (this.filtre == false){
        axios
        .get(`https://acceslibre.beta.gouv.fr/api/erps/${slug}`)
        .then((reponseb) => {
        this.accesb = reponseb;
        this.accesb = this.accesb.data
        console.log(this.accesb)
        })
        this.filtre = true
      }
      else{ 
        this.filtre = false
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
      alert('OK')
    },
    showPosition: function (position){
      this.circle.lat = position.coords.latitude;
      this.circle.lon = position.coords.longitude;
      console.log (position, this.circle.lat, this.circle.lon)
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
  border: 1px #AEC3FF solid;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  z-index: 9990;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
}
.btn-travel{
  display:flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.btn-modal{
  margin-top: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  place-self: center;
  background-color: #AEC3FF;
  font-family: "Monserrat", sans-serif;
  color: white;
  padding: 10px;
  width: 40%;
  border-style: none;
  border-radius: 10px;
  font-weight: bold;
}
.btn-close{
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
  border-style: none;
  border-radius: 10px;
  font-weight: bold
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
  z-index: 99999;
}
input {
  color: var(--color-text);
}
input::placeholder {
  color: rgba(0, 0, 0, 0.40);
}
input::type {
  color: var(--color-text);
}
.btn-map{
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
}
.container-signal{
  display: grid;
  position: absolute;
  font-family: "Montserrat", sans-serif;
  color: black;
  background-color: white;
  border: 1px #AEC3FF solid;
border-radius: 16px;
  gap: 20px;
  z-index: 9990;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
}
.lbl-text{
  color: black;
  font-weight: bold;
  font-size: 16px;
}
.from-loc{
  display: flex;
  align-items: center;
  gap: 20px;
}
input::placeholder{
  color: black;
  font-size: 16px;
}
.adresse{
  border-radius: 40px;
  width: 90%;
  margin: 20px auto;
  display: block;
  height: 40px;
  font-size: 20px;
  padding: 0 16px;
  border-radius: 40px;
  box-shadow: 0 8px 16px rgba(110, 110, 110, 0.206);
  border: 1px solid rgba(110, 110, 110, 0.206);
}
.boutton-loc{
  z-index: 999 !important;
  background: none;
  background-color: white;
  border:1px solid #EBF0FF;
  border-radius: 100%;
  padding: 5px;
  width: 10%;
}
.boutton-loc img{
width: 20px;
height: 25px;
align-items: center;
}
.items-search{
  justify-content: space-between;
  padding: 10px;
  align-items: center;
}

 /* Animation toggle search bar */
.active{
  background-color: #AEC3FF;
  align-items: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  justify-content: space-between;
  margin: 0;
}

.items-search img{
  width: 80%;
  height: 80%;
}
.items-search ul {
  width: 90%;
  margin: 10px auto;
  max-height: 250px;
  overflow-y: scroll;
  z-index: 88 !important;
  border-radius: 10px;
}
.search-bar{
  display: flex;
  align-items: center;
}
.items-search  li {
  list-style: none;
  padding: 10px;
  border-style: none;
  margin: 5px 0;
  cursor: pointer;

}
.li-search li{
  display: flex;
  background-color: #EBF0FF;
  border-radius: 20px;
  border-style: none;
}
.descriptif-search{
  display: grid;
}
h3 {
  color: #AEC3FF;
  font-weight: bold;
  font-size: 24px;
}
.filtres{
  display: flex;
  justify-content: center;
  color: white;
  background-color: #FF715B;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  margin: 20px auto;
  border-radius: 40px;
  width: 50%;
}

.leaflet-touch .leaflet-bar a{

    background-color: white;
}
.leaflet-touch .leaflet-bar a span{
color: var(--color-text);
}
.container-filtre{
  display: flex;
  margin: 10px;
  gap: 10px;
}
.btn-filter{
  color: var(--color-text);
  background-color: white;
  box-shadow: 0 8px 16px rgba(110, 110, 110, 0.206);
  border-radius: 10px;
  border-style: none;
  padding: 10px;
}
.btn-filter:hover{
  background-color: #EBF0FF;
}
.filtre-popup{
  position: fixed;
  gap: 10px;
  top: 50%;
  left: 0%;
  display: grid;
  position: absolute;
  font-family: "Montserrat", sans-serif;
  color: white;
  background-color: #AEC3FF;
  border-style: none;
  z-index: 9990;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  overflow-y: scroll;
  max-height: 300px;
}
</style>

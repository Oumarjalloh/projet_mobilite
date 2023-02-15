<template>
  <div class="hello">
    <!-- <div class="search-container">
        <form action="#">
          <input type="text" placeholder="Rechercher...">
          <button type="submit">AHHAHHAHHH</button>

        </form>
      </div> -->
      <div>
        <div class="items-search">
          <input type="text" v-model="searchText" placeholder="Search..." v >
          <button type="submit" v-on:click="Oui">Rechercher</button>
          <search @results="filterResults"></search>
          <ul>
      <li v-for="result in filteredResults" :key="result.id">
        {{ result.nom }}
      </li>
    </ul>
          <!-- <ul>
      <li v-for="erp in erps" :key="erp.id">
        {{ erp.nom }}
      </li>
    </ul> -->


          <!-- <div class="panel" id="awesome" v-for="items in erps" :key="items">
       <p>{{ items.nom }}</p>
       </div> -->
        </div>

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
      modal: false,
      searchitems: false,
      listdemerde: document.getElementById("awesome"),
      listwrap: document.getElementsByClassName('panel'),
      searchText: "",
      results: [],
      
    }
  },
  mounted(){
    axios
    .get('https://acceslibre.beta.gouv.fr/api/erps/?commune=Antony&readable=true&page_size=150')
    .then((reponse) => {
      this.results = reponse;
      this.results = this.results.data.results
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
    },
    Search(){
      if (this.listdemerde == false){
        this.listdemerde.style.visibility = 'visible'
      }
    },
    Oui(){
      if(this.listdemerde.style.display === "none") {
        this.listdemerde.style.display = 'block'
      }
      else {
        this.listdemerde.style.display = 'none'
      }
      alert('Test')
    },
    filterResults() {
      return this.results.filter((result) => {
        return result.nom.toLowerCase().includes(this.searchText.toLowerCase());
      });
    },
  },
  computed: {
    filteredResults() {
      return this.searchText ? this.filterResults() : this.results;
    },
  },
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

.panel {
  font: 16px "Open Sans", Helvetica, Arial, sans-serif;
  border: 1px solid #22d;
  padding: 12px;
  width: 500px;
  text-align: center;
}
</style>

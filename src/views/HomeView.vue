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
          <input type="text" v-model="searchText" placeholder="Search..." class="search">
          <search @results="filterResults"></search>
          <ul v-show="hasResult">
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

<div class="map">
    <l-map ref="map" v-model:zoom="zoom" :center="[48.7507965, 2.2626174]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <div :key="marker.uuid" v-for="marker in result">
        <l-marker  :lat-lng="[marker.geom.coordinates[1], marker.geom.coordinates[0]]" v-on:click="Popup(marker.slug)"></l-marker>
        <!-- <teleport to="body">
          <div v-if="modal" class="modal">
            <ul :key='erp.uuid' v-for="erp in result">
                <li>{{ erp.nom}}</li>
          </ul>
          <button>Close</button>
        </div>
        </teleport> -->
      </div>
    </l-map>
    <div v-if="modal" class="modal">
        <div>
          {{ acces.nom }}
        </div>
        <button @click="modal = false">Close</button>
    </div>
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
import { LMap, LTileLayer, LMarker} from "@vue-leaflet/vue-leaflet";
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
      result: [],
      hasResult: false,
      
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
    // })
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
    Search(){
      if (this.listdemerde == false){
        this.listdemerde.style.visibility = 'visible'
      }
    },
    filterResults() {
        if(this.searchText.length > 2) {
          this.hasResult = true;
          return this.result.filter((resultos) => {
            return resultos.nom.toLowerCase().includes(this.searchText.toLowerCase());
          });
        } else {
          this.hasResult = false;
        }
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

.modal {
  position: absolute;
  font-family: "Montserrat", sans-serif;
  color: white;
  background-color: orange;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  z-index: 9990;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
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
  height: 40px;
  font-size: 20px;
  padding: 0 16px;
  border-radius: 40px;
  box-shadow: 0 8px 16px rgba(110, 110, 110, 0.206);
  border: none;
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
</style>

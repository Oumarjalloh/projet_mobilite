
<template>
	
			<!-- <div :id="mapId" class="map"></div>
			<LRoutingMachine :mapObject="mapObject" :waypoints="waypoints" /> -->
			<div class="header-about">
				<img src="../assets/about.png">
				<h1>A propos</h1>
			</div>
			<div class="about">
				<h2>Qui sommes nous ?</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				<img src="../assets/team.png">
				<h2>Mia ? C'est qui ?</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				<h2>Comment utiliser Mia</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
			</div>
	
</template>

<script>
// import LRoutingMachine from "../components/LRoutingMachine.vue";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// const waypoints = [
// 	{ lat: 48.7507965, lng: 2.2626174 },
// 	{ lat: 48.75377, lng: 2.297062  },
// ];

// export default {
// 	components: {
// 			LRoutingMachine,
// 	},
// 	data() {
// 			return {
// 					mapId: "map",
// 					mapObject: null,
// 					zoom: 6,
// 					center: { lat: 38.7436056, lng: -2.2304153 },
// 					osmUrl: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
// 					attribution:
// 							'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
// 					waypoints,
// 			};
// 	},
// 	mounted() {
// 			this.mapObject = L.map(this.mapId, {
// 					zoom: this.zoom,
// 					center: this.center,
// 			});

// 			L.tileLayer(this.osmUrl, {
// 					attribution: this.attribution,
// 			}).addTo(this.mapObject);
// 	},
// };
// </script>

<style>
	.header-about{
		margin-top: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
	.header-about img{
		height: 30px;
		width: 30px;
	}
h1{
	color: rgb(15, 28, 98);
text-align: center;
font-family: 'Montserrat', sans-serif;
font-weight: bold;

}
h2{
	font-size: 24px;
	color: #FF715B;
}
.about{
	margin:20px;
	gap: 10px
}
.about img{
	max-width: 100%
}

</style>

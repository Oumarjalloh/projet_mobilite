<template>
  <h1>Paramètres</h1>
<div class="container-param">
 <button @click="fontSize += 3"> <span>Guidage vocal</span></button>
 <button> <span>Main Gauche/Droite</span></button>
 <button> <span>Haut contraste</span></button>
 <button> <span>Mode sombre</span></button>
 <input type="range" min="1" max="100" v-model='fontSize'>

</div>
<span>{{ fontSize }}</span>
<p :style="{fontSize: changeSize}">Test changement de taille texte</p>
</template>
<script>
export default {
 data(){
  return{
   active: false,
   fontSize: 16
  }
 },
 computed: {
  changeSize: function(){
   return this.fontSize + "px";
  }
 }
}

</script>

<style>
h1{
 text-align: center;
 color: #FF715B;
}
.container-param{
 display: grid;
 align-items: center;
 margin: 20px ;
 gap: 20px;
}
button {
 background-color: #7692FF;
 border: none;
 border-radius: 20px;
 padding: 10px;
 width: 70%;
}
span {
 color: white;
 font-weight: 700;
}
p {
 font-size: 16px;
}
</style>
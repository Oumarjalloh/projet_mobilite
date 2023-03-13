<template>
  <h1>Paramètres</h1>
<div class="container-param">
 <button @click="fontSize += 3"> <span>Guidage vocal</span></button>
 <button> <span>Main Gauche/Droite</span></button>
 <button> <span>Haut contraste</span></button>
 <input type="range" min="1" max="100" v-model='fontSize'>

</div>
<h2 :style="{fontSize: changeSize}">TEST TITRE</h2>
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
h2{
 color: var(--color-text);
}
.container-param{
 display: grid;
 align-items: center;
 margin: 20px ;
 gap: 20px;
}

span {
 color: white;
 font-weight: 700;
}
p {
 font-size: 16px;
 color: var(--color-text);
}
</style>
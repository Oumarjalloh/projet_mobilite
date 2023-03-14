<template>
  <div class="header-param"> 
    <div class="sub-header-param">
    <img src="../assets/engrenage.png" alt="parametres">
    <h1>Paramètres</h1>
    </div>
</div>
<div class="container-param">
  <div class="param-selec">
    <select name="main" id="main">
      <option value="gauche">Main Gauche</option>
      <option value="droite">Main droite</option>
    </select>
    <label>Contraste</label>
    <div class="range">
      <p>-</p>
      <input type="range" min="1" max="50">
      <p>+</p>
    </div>
    <label>Taille de police</label>
    <div class="range">
      <p>Aa</p>
    <input type="range" min="1" max="50" v-model='fontSize'>
    <h2>Aa</h2>
    </div>

    <label>Mode sombre</label>
<div class="switch__container">
  <input id="switch-shadow" class="switch switch--shadow" type="checkbox">
  <label for="switch-shadow"></label>
</div>
  </div>
  

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
label{
  background-color: #EBF0FF;
  border-radius: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
}
select{
  background-color: #EBF0FF;
  border-radius: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 30px;
  border: none;
}
option{

}
.range{
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.range p {
  font-size: 16px;
}
.range h2{
  font-size: 24px;
  font-weight: bold;
}

input{
  width: 260px;
color: red;
}
.header-param{
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sub-header-param{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

}
h1{
 text-align: center;
 color: #0F1C62;
 font-family: 'Montserrat', sans-serif;
 font-weight: bold;
}
h2{
 color: #0F1C62;
}
.container-param{
 display: grid;
 align-items: center;
 margin: 20px ;
}

span {
 color: white;
 font-weight: 700;
}
p {
 font-size: 16px;
 color: var(--color-text);
}
.param-selec{
  display: grid;
  margin: 20px;
  gap: 20px;
}


.switch__container {
  width: 120px;
  justify-self: center;
}

.switch {
  visibility: hidden;
  margin-left: -9999px;
}

.switch + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
}

.switch--shadow + label {
  width: 120px;
  height: 60px;
  background-color: #dddddd;
  border-radius: 60px;
}
.switch--shadow + label:before,
.switch--shadow + label:after {
  display: block;
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  content: "";
}
.switch--shadow + label:before {
  right: 1px;
  background-color: #EBF0FF;
  border-radius: 60px;
  transition: background 0.4s;
}
.switch--shadow + label:after {
  width: 62px;
  background-color: #8693D6;
  border-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.4s;
}
.switch--shadow:checked + label:before {
  background-color: #8693D6;
}
.switch--shadow:checked + label:after{
  background-color: #EBF0FF;
}
.switch--shadow:checked + label:after {
  transform: translateX(60px);
}

</style>
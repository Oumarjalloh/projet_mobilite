<template>
  <div class="header-param"> 
    <div class="sub-header-param">
    <img src="../assets/engrenage.png" alt="parametres">
    <h1>Paramètres</h1>
    </div>
</div>
<div class="container-param">
  <div class="param-selec">
    <select name="main" id="main" class="select">
      <option value="gauche">Main Gauche</option>
      <option value="droite">Main droite</option>
    </select>
    <label class="label">Contraste</label>
    <div class="range">
      <p>-</p>
      <input type="range" min="1" max="50">
      <p>+</p>
    </div>
    <label class="label">Taille de police</label>
    <div class="range">
      <p>Aa</p>
    <input type="range" min="14" max="50" v-model='fontSize'>
    <h2>Aa</h2>
    </div>

    <label class="label">Mode sombre</label>
<div class="switch__container">
  <input id="switch-shadow" class="switch switch--shadow" type="checkbox">
  <label for="switch-shadow" class="label2"></label>
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
@media screen and (max-width: 768px){
  .label{
  background-color: #EBF0FF;
  border-radius: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
  color: #0F1C62;
}
.select{
  background-color: #EBF0FF;
  border-radius: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  border: none;
  color: #0F1C62;
  font-size: 16px;
  -moz-appearance:none ;
  -webkit-appearance: none ; 
  background: url('../assets/dropdown-arrow.png') no-repeat right;
  background-position: calc(100% - 0.75rem) center !important;
  background-size: 13px;
  background-color: #EBF0FF;
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
 width: 200px;
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
  gap: 10px;
}


.switch__container {
  justify-self: center;
}

.switch {
  visibility: hidden;
  margin-left: -9999px;
}

.switch + .label2 {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
}

.switch--shadow + .label2 {
  width: 60px;
  height: 30px;
  background-color: #dddddd;
  border-radius: 60px;
}
.switch--shadow + .label2:before,
.switch--shadow + .label2:after {
  display: block;
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  content: "";
}
.switch--shadow + .label2:before {
  right: 1px;
  background-color: #EBF0FF;
  border-radius: 60px;
  transition: background 0.4s;
}
.switch--shadow + .label2:after {
  width: 30px;
  background-color: #8693D6;
  border-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.4s;
}
.switch--shadow:checked + .label2:before {
  background-color: #8693D6;
}
.switch--shadow:checked + .label2:after{
  background-color: #EBF0FF;
}
.switch--shadow:checked + .label2:after {
  transform: translateX(30px);
}
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .label{
  background-color: #EBF0FF;
  border-radius: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
  color: #0F1C62;
  text-align: center;
}
.select{
  background-color: #EBF0FF;
  border-radius: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  border: none;
  color: #0F1C62;
  font-size: 16px;
  -moz-appearance:none ;
  -webkit-appearance: none ; 
  background: url('../assets/dropdown-arrow.png') no-repeat right;
  background-position: calc(100% - 0.75rem) center !important;
  background-size: 13px;
  background-color: #EBF0FF;
  text-align: center;
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
  width: 400px;
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
 justify-content: center;
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
  gap: 10px;
}


.switch__container {
  justify-self: center;
}

.switch {
  visibility: hidden;
  margin-left: -9999px;
}

.switch + .label2 {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
}

.switch--shadow + .label2 {
  width: 60px;
  height: 30px;
  background-color: #dddddd;
  border-radius: 60px;
}
.switch--shadow + .label2:before,
.switch--shadow + .label2:after {
  display: block;
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  content: "";
}
.switch--shadow + .label2:before {
  right: 1px;
  background-color: #EBF0FF;
  border-radius: 60px;
  transition: background 0.4s;
}
.switch--shadow + .label2:after {
  width: 30px;
  background-color: #8693D6;
  border-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.4s;
}
.switch--shadow:checked + .label2:before {
  background-color: #8693D6;
}
.switch--shadow:checked + .label2:after{
  background-color: #EBF0FF;
}
.switch--shadow:checked + .label2:after {
  transform: translateX(30px);
}
}
@media  screen and (min-width: 1024px) {
  h1{
    font-size: 44px;
  }
  .container-param{
 display: grid;
 align-items: center;
 margin: 20px ;
 justify-content: flex-start;
}
.param-selec{
  display: grid;
  margin: 20px;
  justify-content: center;
  gap: 10px;
}
.label{
  background-color: #EBF0FF;
  border-radius: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 24px;
  border: none;
  color: #0F1C62;
  text-align: left;
}
.select{
  background-color: #EBF0FF;
  border-radius: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  border: none;
  color: #0F1C62;
  font-size: 24px;
  -moz-appearance:none ;
  -webkit-appearance: none ; 
  background: url('../assets/dropdown-arrow.png') no-repeat right;
  background-position: calc(100% - 0.75rem) center !important;
  background-size: 13px;
  background-color: #EBF0FF;
  text-align: left;
  width: 900px;
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
  width: 400px;
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
span {
 color: white;
 font-weight: 700;
}
p {
 font-size: 16px;
 color: var(--color-text);
}
.switch__container {
  justify-self: center;
}

.switch {
  visibility: hidden;
  margin-left: -9999px;
}

.switch + .label2 {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
}

.switch--shadow + .label2 {
  width: 60px;
  height: 30px;
  background-color: #dddddd;
  border-radius: 60px;
}
.switch--shadow + .label2:before,
.switch--shadow + .label2:after {
  display: block;
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  content: "";
}
.switch--shadow + .label2:before {
  right: 1px;
  background-color: #EBF0FF;
  border-radius: 60px;
  transition: background 0.4s;
}
.switch--shadow + .label2:after {
  width: 30px;
  background-color: #8693D6;
  border-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.4s;
}
.switch--shadow:checked + .label2:before {
  background-color: #8693D6;
}
.switch--shadow:checked + .label2:after{
  background-color: #EBF0FF;
}
.switch--shadow:checked + .label2:after {
  transform: translateX(30px);
}
}

</style>
<template>
  <h1>Favoris</h1>
  <div class="container-favoris">
   <h2>Vos lieux préférés :</h2>
   <div class="items-favoris">
    <div class="items-card">
     <img src="../assets/38-tea.jpeg" alt="">
      <h3>
       importer le nom des lieux

      </h3>
      <p>
     Importer le type de lieux
     </p>
    </div>
   </div>
  </div>
</template>
<script>
// import axios from 'axios'

export default {
 data()
  {
   return{
    favoris: null
   }
 },
}
</script>
<style>
*{
	margin: 0%;
	padding: 0%;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}
 h1{
  color: var(--color-titre)
 }
 h2{
  font-size: 16px;
  color: var(--color-text);
 }
 .container-favoris{
  margin: 20px;
 }
 .items-favoris {
  display: grid;
  margin-top: 20px;
 }
 .items-card{
  display: grid;
 }
 .items-card img{
  width: 70%;
  height: 20vh;
  margin-bottom: 10px;
 }

</style>
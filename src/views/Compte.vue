<template>
 <!-- HEADER COMPTE -->

<div class="header-compte">
 <div class="sub-header-compte">
  <img src="../assets/compte.png" alt="compte">
  <h1>Mon compte</h1>
 </div>
 <router-link to="/login"><img src="../assets/croix.png" alt=""></router-link>

</div>

<!-- Container profil up -->
<div class="container-profil-up">
 <img src="../assets/pdp-profil.jpg" alt="photo de profil compte mia">
 <h2>Victor Dupont</h2>
 <p>Nouveau en ville</p>
 <img src="" alt="">
</div>

<!-- Container profil down  -->
<div class="container-profil-down">
  <h3>Niveau d'exploration d'Antony :</h3>
  <!-- <input type="range" value="4" min="0" max="10"> -->
  <img src="../assets/levelup.png" alt="">
  <p>Aventurier junior: 4/10</p>
  <h4>E-mail :</h4>
  <input type="email" name="email"  required="" placeholder="victordupont98@gmail.com">
  <h4>Mot de passe :</h4>
  <input type="mdp" name="mdp"  required="" placeholder="***********">
</div>
</template>
<script>

</script>
<style>
@media screen and (max-width:768px) {
 body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 .header-compte{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px
 }
 .sub-header-compte{
  display: flex;
  align-items: center;
  gap: 20px;
 }
 .container-profil-up{
  display: flex;
  margin-top: 40px;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
 }
 .container-profil-up h2{
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
 }
 .container-profil-up p{
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
 }
 .container-profil-down{
  background-color: #EBF0FF;
  height: 60vh;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
 }
 .container-profil-down h3{
  font-family: 'Montserrat', sans-serif;
  color: #0F1C62;
  font-weight: 400;
  text-align: left;
 }
 .container-profil-down p{
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: #3B488F;
  position: relative;
  right: -50%;
 }
 .container-profil-down img{
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 5px;
 }
 .container-profil-down input{
  background-color: white;
  border-radius: 15px;
  height: 20px;
  width: 300px;
 }
 .container-profil-down input[type=range]{
  background-color: #3B488F;
  color: #7692FF;
  box-sizing: border-box;
  -webkit-appearance: none;
  cursor: pointer
 }

 .container-profil-down h4{
  font-family: 'Montserrat', sans-serif;
  color: #0F1C62;
  font-weight: 400;
  text-align: left;
 }

}
</style>
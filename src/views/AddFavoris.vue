<template>
 <div class="fav-4">
  <div class="fav-3">
    <svg style="color: rgb(255, 113, 91);" xmlns="http://www.w3.org/2000/svg" width="52" height="35" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16"> <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" fill="#ff715b"></path> </svg>
    <h1>Ajout aux favoris</h1>
  </div>

 
    <svg style="color: rgb(15, 28, 98);" xmlns="http://www.w3.org/2000/svg" width="52" height="50" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="#0f1c62"></path> </svg>
</div>
<form @submit.prevent="submitForm" class="form">
<input class="ip"  name="adresse" id="" placeholder="Adresse du lieu" type="adresse" v-model="adresse">
<input class="ip"  name="nomlieu" id="" placeholder="Nom du lieu" type="nom-lieu" v-model="nomlieu">
<textarea id="story" name="message" v-model="message"
          rows="5" cols="33"  placeholder="Notes" class="testbis">
</textarea>
<button class='valid-btn' type="submit"><router-link to='/favoris'>Valider</router-link></button>
</form>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      adresse: "",
      nomlieu: "",
      message: ""
    };
  },
  methods: {
    submitForm() {
        const data = {
          nomlieu: this.nomlieu,
          adresse: this.adresse,
          message: this.message
        };
        axios.post('/src/views/FavorisView.vue', data)
          .then(response => {
            this.$store.commit('setDonnees', response.data)
            this.$router.push({ name: 'favoris', path: '/favoris', query: { datas: response.data } })
            // console.log(response.data);
            // normalement ca envoie la data dans le 
          })
          
          .catch(error => {
            console.log(error);
          });

      },
}
}

</script>

<style>
@media screen and (max-width:768px){


:root {
--primary: #094b65;
}

* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
}

body {
overflow-x: hidden;
background: #fff;
min-height: 100vh;
}

.fav-4{
margin: 20px;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center
}

h1{
color: rgb(15, 28, 98);
text-align: center;
font-family: 'Montserrat', sans-serif;
}


input{
background: #e0dede;
justify-content: center;
display: flex;
margin: 10px auto;
padding: 15px 20px 17px 20px;
border: none;
outline: none;
border-radius: 5px;
color: #0F1C62
}

.ip{
font-size: large;
width: 292px;
height: 50px;
background-color: #EBF0FF;
}

textarea{
font-size: large;
display: flex;
width: 292px;
background-color: #7692FF;
opacity: 25%;
border-radius: 5px;
border: 1px solid #EBF0FF;
margin-top: 5%;
margin-left: auto;
margin-right: auto;
padding-left: 10px;
color: #0F1C62
}

.sbt{
width: 100px;
height: 40px;
cursor:pointer;
padding: 0;
margin: 5%  0%  0%  62%;
border-radius: 25px;
background-color: rgb(255, 113, 91);
}
.valid-btn{
 background-color: #FF715B;
 position: relative;
 left: 100px;
display: flex;
margin: 10px auto;
padding: 15px 20px 17px 20px;
border: none;
border-radius: 30px;
color: white
}
.valid-btn a{
text-decoration: none;
color: white
}
}
@media screen and (min-width: 769px){
  :root {
--primary: #094b65;
}

* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
}

body {
overflow-x: hidden;
background: #fff;
min-height: 100vh;
}

.fav-4{
margin: 20px;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center
}

h1{
color: rgb(15, 28, 98);
text-align: center;
font-family: 'Montserrat', sans-serif;
}


input{
background: #e0dede;
justify-content: center;
display: flex;
margin: 10px auto;
padding: 15px 20px 17px 20px;
border: none;
outline: none;
border-radius: 5px;
color: #0F1C62
}

.ip{
font-size: large;
width: 700px;
height: 60px;
background-color: #EBF0FF;
}

textarea{
font-size: large;
display: flex;
width: 700px;
background-color: #7692FF;
opacity: 50%;
border-radius: 5px;
border: 1px solid #EBF0FF;
margin-top: 5%;
margin-left: auto;
margin-right: auto;
padding-left: 10px;
}
form textarea::placeholder{
color: #0F1C62;
z-index: 20;
}
.sbt{
width: 100px;
height: 40px;
cursor:pointer;
padding: 0;
margin: 5%  0%  0%  62%;
border-radius: 25px;
background-color: rgb(255, 113, 91);
}
.valid-btn{
 background-color: #FF715B;
 position: relative;
display: flex;
margin: 10px auto;
padding: 15px 20px 17px 20px;
border: none;
border-radius: 30px;
color: white
}
.valid-btn a{
text-decoration: none;
color: white
}
.form{
  margin: 30px;
}
}
</style>
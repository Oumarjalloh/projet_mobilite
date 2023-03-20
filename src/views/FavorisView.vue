<template>
<div class="fav-1">
    <div class="sub-fav-1">
    <svg style="color: rgb(255, 113, 91);" xmlns="http://www.w3.org/2000/svg" width="500" height="35" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16"> <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" fill="#ff715b"></path> </svg>
    <h1>Favoris</h1>
    </div>
   
     <router-link to='/addfavoris'><img src='../assets/plus.png'></router-link>

</div>
<div class="fav-2">
  <div class="fav-3">
    <svg class="bi-bookmark-fill" style="color: rgb(15, 28, 98);" xmlns="http://www.w3.org/2000/svg" width="52" height="35" fill="currentColor" viewBox="0 0 16 16"> <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" fill="#0f1c62"></path> </svg>
    <p>Nom du lieu <br><span>Adresse du lieu, 92000</span></p>
  </div>

    <svg class="svg-1" style="color: rgb(15, 28, 98);" xmlns="http://www.w3.org/2000/svg" width="76" height="25" fill="currentColor" viewBox="0 0 16 16"> <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" fill="#0f1c62"></path> </svg>
</div>
<div class="fav-2">
  <div class="fav-3">
    <svg style="color: rgb(15, 28, 98);" xmlns="http://www.w3.org/2000/svg" width="52" height="35" fill="currentColor" class="bi-bookmark-fill" viewBox="0 0 16 16"> <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" fill="#0f1c62"></path> </svg>
    <p>Nom du lieu <br><span>Adresse du lieu, 92000</span></p>
  </div>

    <svg class="svg-1" style="color: rgb(15, 28, 98);" xmlns="http://www.w3.org/2000/svg" width="76" height="25" fill="currentColor"  viewBox="0 0 16 16"> <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" fill="#0f1c62"></path> </svg>

</div>
    <ul method="GET">
        <li v-for="(value, index) in formData" :key="index" >
            <p>{{ value }}</p></li>
    </ul>

<div class="rt">
    <svg class="rt-1" style="color: rgb(255, 113, 91);" xmlns="http://www.w3.org/2000/svg" width="130" height="50" fill="currentColor"  viewBox="0 0 16 16"> <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" fill="#ff715b"></path> </svg>
</div>
<p class="return">Retour</p>

</template>
<script>
import axios from 'axios'

export default {
 data()
  {
   return{
    favoris: null,
    formData: {},
    props: ['datas']
   }
 },
 created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("/src/views/AddFavoris.vue", );
        this.formData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
//   computed: {
//     data() {
//       return JSON.parse(this.$route.params.datas)
//     }
//   }
}
</script>
<style>

@media  screen and (max-width: 768px) {
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
    max-height: 100vh;
}

.fav-1{
  margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.sub-fav-1{
    display: flex;
    max-width: 300px;
}
.fav-1 img{
  width: 25px;
  height: 25px;
  position: relative;
  right: 20px
}

h1{
    color: rgb(15, 28, 98);
    padding-right: 95px;
    font-family: 'Open Sans', sans-serif;
    left: 50px;
}


.fav-2{
    display: flex;
    margin: 20px;
    background-color: #EBF0FF;
    gap: 5%;
    border-radius: 15px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
}
.fav-3{
  display: flex;
  align-items: center;
}
.svg-1{
    padding: 0px 0px 0px 30px;
}

.rt{
    background-color: #EBF0FF;
    margin: 80% 75% 0% 8%;
    border-radius: 20px;
}

.rt-1{
    padding: 0% 75% 0% 0%;
}
.return{
    margin-left: 35px;
    font-weight: 400;

}
span{
  color: var(--color-titre);
  font-weight: 200;
}
  
}
@media screen  and (min-width: 769px) {

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
    max-height: 100vh;
}

.fav-1{
  margin: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.sub-fav-1{
    display: flex;
    max-width: 1000px;
    align-items: center;

}
.fav-1 img{
  width: 25px;
  height: 25px;
  position: relative;
  right: 20px
}
.bi-bookmark-fill{
  width: 100px;
}
h1{
    color: rgb(15, 28, 98);
    padding-right: 95px;
    font-family: 'Montserrat', sans-serif;
    left: 50px;
}


.fav-2{
    display: flex;
    margin: 20px;
    background-color: #EBF0FF;
    gap: 20%;
    border-radius: 15px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
}
.fav-3{
  display: flex;
  align-items: center;
}
.svg-1{
    padding: 0px 0px 0px 30px;
    left: 200px;
}

.rt{
    background-color: #EBF0FF;
    margin: 100% 75% 0% 8%;
    border-radius: 20px;
}

.rt-1{
    padding: 0% 75% 0% 0%;
}
.return{
    margin-left: 35px;
    font-weight: 400;

}
span{
  color: var(--color-titre);
  font-weight: 200;
}
}


</style>
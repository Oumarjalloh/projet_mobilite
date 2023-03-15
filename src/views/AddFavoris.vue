<template>
 <div class="fav-4">
   <svg style="color: rgb(255, 113, 91);" xmlns="http://www.w3.org/2000/svg" width="500" height="35" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16"> <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" fill="#ff715b"></path> </svg>
    <h1>Favoris</h1>
    <svg style="color: rgb(15, 28, 98);" xmlns="http://www.w3.org/2000/svg" width="500" height="50" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="#0f1c62"></path> </svg>
</div>
<input class="ip" type="search" name="" id="" placeholder="Adresse du lieu">
<input class="ip" type="search" name="" id="" placeholder="Nom du lieu">
<textarea id="story" name="story"
          rows="5" cols="33"  placeholder="Notes">
</textarea>
<button class='valid-btn'><router-link to='/favoris'>Valider</router-link></button>
</template>
<script>

</script>
<style>
@media screen and (max-width:768px){

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap%27');

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
</style>
<template>
<div class="header-blog">
 <div class="titre-blog">
  <div class="clc-ce-blog">
   <img src="../assets/blog-menu.png" class="blog-img">
  <h1>Blog</h1>
  </div>
  <img src="../assets/croix.png" class="croix-de-merde">
 

 </div>
 <input type="text" placeholder="Rechercher..." class="search-blog">
 <search></search>

</div>
<ul class="menu-articles">
  <li><a href="#">Tous</a></li>
  <li><a href="#">Nouveaux</a></li>
  <li><a href="#">Articles</a></li>
  <li><a href="#">Collaborations</a></li>
 </ul>
<div class="container-blog">
 <hr>
 <div class="header-article">
  <h2 class="new">La mobilité quotidien de Guillaume</h2>
  <p>Auteur - 15 Avril 2023</p>
  <h4>NOUVEAU !</h4>
 </div>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus doloribus blanditiis! Recusandae nostrum totam saepe adipisci ad, ducimus aperiam atque iste incidunt doloremque perspiciatis quos sit quia harum dolores consequatur velit eligendi nobis voluptas id placeat dolorem ab? Animi voluptas quo numquam, et suscipit nam tenetur placeat. Aspernatur, eos?</p>
<hr>
<div class="header-article">  
 <h3>Pourquoi MIA ?</h3>
  <p>Auteur - 8 Avril 2023</p>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quo cum a in repellat ea eos. Facilis consectetur modi dolores quibusdam commodi adipisci eos, sed aut. Asperiores, quibusdam ipsam recusandae autem facere amet reprehenderit dicta ipsa sequi tenetur excepturi modi distinctio, magnam veritatis assumenda, obcaecati quidem mollitia minus dolorem? Provident.</p>
<hr>
<div class="header-article">  
 <h3>C'est quoi MIA ?</h3>
  <p>Auteur - 1er Avril 2023</p>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non sit qui a? Similique ratione ullam voluptate quae ipsum sapiente! Fugiat voluptatibus id eos debitis beatae quidem doloribus sit rem deleniti voluptatum. Consectetur quidem, deleniti excepturi eaque, harum atque cumque accusantium id eos voluptate esse nam quia reprehenderit veritatis ipsam!</p>
</div>

</template>
<script>

</script>

<style>
@media screen and (min-width: 769px){
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
 }
 .header-blog{
  display: flex;
  justify-content: space-between;
  margin: 20px;
 }
 .header-blog input{
  width: 380px;
  margin: 0;
  position: relative;
  right: -20%;
  background-color: #EBF0FF;
  border-radius: 20px;
  padding: 10px;
  height: 40px;
  margin-right: 50px;
 }
 .header-blog input::placeholder{
  color: #8693D6;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
 }
 .search-blog{
 background: url('../assets/search-blog.png') no-repeat 7px;
 background-position: 90%;
}
 .blog{
  color: #7692FF;
  padding-left: 20px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
 }
 .menu-articles {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-right: 40px;
  margin-left: 70px;
  margin-top: 50px;
  margin-bottom: 50px;
 }
 .menu-articles li {
  text-decoration: none;
 }
 .menu-articles li a {
  text-decoration: none;
  color: #0F1C62;
  font-weight: bold;
 }
 hr{
  width: 110%;
  display: flex;
 justify-content: center;
 margin-left: -5%;
margin-right: -10%; 
margin-bottom: 20px;
margin-top: 20px;
}
.container-blog{
 margin-left: 100px;
width: 70%;
}
.header-article {
 display: flex;
 gap: 30px;
 align-items: center;
 margin-bottom: 20px;
}
.new{
 color: #FF715B;
 font-family: 'Montserrat', sans-serif;
 font-weight: bold;
}
.header-article p {
 font-family: 'Montserrat', sans-serif;
 font-weight: 100;
 font-size: 13px;
}
.clc-ce-blog{
 display: flex;
 gap: 30px
}
.titre-blog{
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 20px;
}
.croix-de-merde{
width: 15px;
height: 15px;
visibility: hidden;
}
.blog-img{
  width: 40px;
  height: 40px;
 }
}
@media screen and (max-width: 768px){

 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
 }
 .header-blog{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  gap: 10px;
  align-items: center;
 }
 
 .header-blog input{
  width: 300px;
  margin: 0;
  background-color: #EBF0FF;
  border-radius: 20px;
  padding: 10px;
  justify-content: center;
 }
 .header-blog input::placeholder{
  color: #8693D6;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
 }
 .blog{
  color: #7692FF;
  font-weight: bold;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
 }
 .menu-articles {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
 }
 .menu-articles li {
  text-decoration: none;
 }
 .menu-articles li a {
  text-decoration: none;
  color: #0F1C62;
  font-weight: 400;
 }
 hr{
  width: 90%;
  display: flex;
 justify-content: center;
margin: auto;
margin-top: 20px;
margin-bottom: 20px;
}
.container-blog{
 margin: 20px;
 justify-content: center;
 width: 90%;
}
.header-article {
 display: flex;
 flex-direction: column;
 gap: 10px;
 margin-bottom: 20px;
}
.new{
 color: #FF715B;
 font-family: 'Montserrat', sans-serif;
 font-weight: bold;
 font-size: 16px;
 text-align: center;
}
.header-article p {
 font-family: 'Montserrat', sans-serif;
 font-weight: 100;
 font-size: 10px;
 margin-left: 10%;
}
.header-article h3{
 font-family: 'Montserrat', sans-serif;
 font-weight: bold;
 font-size: 16px;
 margin-left: 10%;
}
.header-article h4{
 margin-left: 10%;

}
.search-blog{
 background: url('../assets/search-blog.png') no-repeat 7px;
 background-position: 90%;
}
.clc-ce-blog{
 display: flex;
 gap: 10px
}
.titre-blog{
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 20px;
}
.croix-de-merde{
width: 15px;
height: 15px;
}
}

</style>
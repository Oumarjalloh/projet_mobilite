<template>
 <div>
    <!-- Menu Ordinateur  -->
					<div class="menu-ordi" v-if="!isMobile">
						<nav class="nav1">
							<router-link to="/home"><img src="../src/assets/logo-mia-light.png" class="logo-mia-ordi"></router-link>
							</nav>
							<div class="sub-menu">
								<ul>
									<li><img src="../src/assets/about-ordi.png" class="about-ordi"><router-link to="/about">A propos</router-link></li>
									<li><img src="../src/assets/compte-ordi.png" class="compte-ordi"><router-link to="/login">Compte</router-link></li>
									<li><img src="../src/assets/acces-menu.svg" class="about-ordi"><router-link to="/param">Paramètres</router-link></li>
									<li><img src="../src/assets/favoris-ordi-vector.png" class="favoris-ordi"><router-link to="/favoris">Favoris</router-link></li>
									<li><img src="../src/assets/blog-menu-1.png" class="blog-ordi"><router-link to="/blog">Actualités</router-link></li>
								</ul>			
							</div>
					</div>
					<!-- Menu Mobile -->
      <template v-else>
							<nav class="nav2">
        <div class="menu-mobile">
									<router-link to="/login"><img src="./assets/logo-user.png"></router-link>
									<!-- <router-link to="/home" class="home"></router-link> -->
									<img src="./assets/logo-mia-light.png" class="logo-mia">
									
										<div class="screen_menu_hamburger" @click="toggleDropdown">
									<div class="sub-menu">
										<ul v-if="showDropdown" >
            <li><img src="../src/assets/home.png" class="home-ordi"><router-link to="/home">Accueil</router-link></li>
            <li><img src="../src/assets/about-ordi.png" class="about-ordi"><router-link to="/about">A propos</router-link></li>
												<li><img src="../src/assets/acces-menu.svg" class="param-ordi"><router-link to="/param">Paramètres</router-link></li>
												<li><img src="../src/assets/favoris-ordi-vector.png" class="favoris-ordi"><router-link to="/favoris">Favoris</router-link></li>
												<li><img src="../src/assets/blog-menu-1.png" class="blog-ordi"><router-link to="/blog">Actualités</router-link></li>
          </ul>
									</div>
									</div>
        </div>
								</nav>
      </template>
					

  </div> 
		<router-view/>
</template>
<script>

export default {
  data() {
    return {
      isMobile: window.innerWidth <= 768,
      showDropdown: false,
						darkMode : false
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
		computed: {
  changeSize: function(){
   return this.fontSize + "px";
  }
 }
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

:root {
	--bg-primary: white;
	--color-text: #0F1C62;
	--color-menu: white;
	--color-menu-active: #FF715B;
	--bg-search: white
}
*{
	margin: 0%;
	padding: 0%;
	box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
}
body{
	background-color: var(--bg-primary);

}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav2 {
  padding: 30px;
  display: grid;
		background-color: var(--bg-menu);
}


.nav2 a {
  font-weight: bold;
  color: var(--color-text);
  text-decoration: none;
}

.nav2 a.router-link-exact-active {
  color: var(--color-menu-active);
  text-decoration: none;
}

h2{
	color: white;
	background: none;
}
.menu div{
	width:25px;
	height:3px;
	background-color:#fff;
	z-index:3;
}
p{
	color: var(--color-text);
}
.menu{
	display:none;
}
ul{
	background: none;
}
li {
		list-style: none;
		text-decoration: none;
		background: none;
		color: var(--color-text);

	}
a{
background: none;
	}

.logo-mia{
	width: 30%;
	position: relative;
	top: -5px;
}




@media screen and (max-width:768px) {
	html, body {
					position: relative;
	}
	.about-ordi{
		width: 20px;
	}
	.home-ordi{
		position: relative;
  right: 2px;	
}
.blog-ordi{
	width: 23px;
}
	.param-ordi{
		width: 23px;
		position: relative;
		right: 3px;
	}
	
	.favoris-ordi{
		width: 15px
	}
	.sub-menu li {
		display: flex;
		gap: 10px;
		align-items: center;
		justify-content: flex-start;
		text-align: start;
	}
	.sub-menu ul {
		gap: 15px;
			display: flex;
		flex-direction: column;
		align-items: flex-start;;
		text-align: center;
		margin: 10px;
		padding: 10px;

	}
	.sub-menu{
  position: absolute;
  right: 0px;
  top: 87px;
		z-index: 9999;
		background-color: white;
		padding-left: 10px;
		width: 180px;
  border-radius: 0px 0px 16px 16px;
		text-align: center;
		padding-right: 20px;

}
.sub-menu li:hover{
	color: #FF715B;
}


	.menu-list {
					position: absolute;
					background: none;
					right: 0px;
					height: 400px;
					top: 60px;
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 100%;
					transform: translateY(-150%);
					transition: transform 0.5s ease-in;
					z-index: 1;
					
	}

					.menu-list li {
									opacity: 0;
					}

}
	.nav-active{
					transform: translateX(0%);
	}

	.toggle .line1{
					transform: rotate(-45deg) translate(-5px, 6px);
	}

	.toggle .line2{
					opacity:0;
	}

.toggle .line3 {
	transform: rotate(45deg) translate(-5px, -6px);
}

.menu-mobile {
	display: flex;
	align-items: center;	
	justify-content: space-between;	
	background-color: white;
	
}


.screen_menu_hamburger{
        width: 20px;
        height: 2px;
        background-color:  #0F1C62;
        border-radius: 5px;
        z-index: 10000;
        transition: all .5s ease;
}
.screen_menu_hamburger::before,
.screen_menu_hamburger::after{
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        background: #0F1C62;
        border-radius: 5px;
        transition: all 0.5s ease;
}

.screen_menu_hamburger::before{
    transform: translateY(-6px);
				position: fixed;

}
.screen_menu_hamburger::after{
    transform: translateY(-12px);
}

@media (prefers-color-scheme: dark) {
		:root {
			--bg-primary: #121212;
			--bg-menu: grey;
			--color-text: white;
			--bg-search: #140200
		}
}


@media screen and (min-width: 769px){
 .nav1{
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 100%;
	}
 .menu-ordi {
		display: flex;
		background-color: white;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		align-items: center;
		padding: 20px;

	}

	.logo-mia-ordi{
		width: 100px;
	}
	.menu-ordi a {
		text-decoration: none;
	}
	.sub-menu {
		gap: 30px;
		align-items: center;
		display: flex;
	}
	.sub-menu ul {
		display: flex;
		align-items: center;
		margin-right: 20px;
		gap: 20px;
	}
	.sub-menu ul li {
		align-items: center;
		display: flex;
		text-decoration: none;
	}
	.sub-menu ul li a{
		align-items: center;
		text-decoration: none;
		color: #0F1C62;
		margin-left: 10px;		
		font-weight: bold;
		font-family: 'Montserrat', sans-serif;
		font-size: 16px;
	}
	.favoris-ordi{
		width: 20px;
	}
	.about-ordi{
		width: 30px;
	}
}
</style>

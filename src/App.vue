<template>
 <div :style="{fontSize: changeSize}">
    <nav>
      <ul v-if="!isMobile">
        <li @click="toggleDropdown"><router-link to="/">Accueil</router-link></li>
        <li @click="toggleDropdown"><router-link to="/about">A propos</router-link></li>
        <li @click="toggleDropdown"><router-link to="/test">Inscription/Connexion</router-link></li>
								<li @click="toggleDropdown"><router-link to="/param">Paramètres</router-link></li>
								<li @click="toggleDropdown"><router-link to="/favoris">Favoris</router-link></li>
      </ul>
      <template  v-else>
        <div class="menu-mobile">
									<router-link to="/test"><img src="./assets/logo-user.png"></router-link>
									<!-- <router-link to="/home" class="home"></router-link> -->
									<img src="./assets/logo-mia-light.png" class="logo-mia">
									
										<div class="screen_menu_hamburger" @click="toggleDropdown">
									<div class="sub-menu">
										<ul v-if="showDropdown" >
            <li><router-link to="/home">Accueil</router-link></li>
            <li><router-link to="/about">A propos</router-link></li>
												<li><router-link to="/param">Paramètres</router-link></li>
												<li><router-link to="/favoris">Favoris</router-link></li>
          </ul>
									</div>
									</div>
        </div>
      </template>
    </nav>
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

nav {
  padding: 30px;
  display: grid;
		background-color: var(--bg-menu);
}


nav a {
  font-weight: bold;
  color: var(--color-text);
  text-decoration: none;
}

nav a.router-link-exact-active {
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
@media screen and (max-width:1200px){
	.menu-list {
					width: 55%;
	}
}

@media screen and (max-width:1000px){
	.menu-list a {
					font-size: 14px;
	}
}

@media screen and (max-width:768px) {
	html, body {
					position: relative;
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

.sub-menu{
  position: relative;
  right: 80px;
		top: 30px;
		z-index: 9999;
		background-color: white;
		padding-left: 10px;
		padding-right: 10px;
		width: 150px;
  border-radius: 0px 0px 16px 16px;
}
.sub-menu li:hover{
	color: #FF715B;
}
</style>

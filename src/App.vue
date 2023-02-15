<template>
  <div >
    <nav>
      <ul v-if="!isMobile">
        <li @click="toggleDropdown"><router-link to="/">Accueil</router-link></li>
        <li @click="toggleDropdown"><router-link to="/about">A propos</router-link></li>
        <li @click="toggleDropdown"><router-link to="/test">Test</router-link></li>
      </ul>
      <template  v-else>
							<div>
        <div class="menu-mobile">
									<h2>Mia</h2>								
									<div class="test" >
										<div class="screen_menu_hamburger" @click="toggleDropdown"></div>
										<ul v-if="showDropdown">
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/about">A propos</router-link></li>
            <li><router-link to="/test">Test</router-link></li>
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
      showDropdown: false
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
    }
  }
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

*{
	margin: 0%;
	padding: 0%;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: grid;
		background-color: grey;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #4264b9;
  text-decoration: none;
}
h2{
	color: white;
	font-family: 'Poppins', sans-serif;
}
.menu div{
	width:25px;
	height:3px;
	margin:5px;
	background-color:#fff;
	z-index:3;
}

.menu{
	display:none;
}

li {
		list-style: none;
		text-decoration: none;
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
					right: 0px;
					height: 400px;
					top: 60px;
					background-color: #000;
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


	.nav {
					background-color: #000;
	}
}
	.nav-active{
					transform: translateX(0%);
	}

	@keyframes navReveal{
					from{
									opacity:0;
									transform: translateY(-50px);
					}
					to{
									opacity:1;
									transform: translateY(0px);
					}
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
	justify-content: space-between;
	align-items: center;
}

.test{
	display: grid;
	justify-content: flex-end;
	padding: 40px;
	background-color: orange;
}
.screen_menu_hamburger{
        width: 20px;
        height: 2px;
        background-color: white;
        border-radius: 5px;
        z-index: 10;
        transition: all .5s ease;
}
.screen_menu_hamburger::before,
.screen_menu_hamburger::after{
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        background: white;
        border-radius: 5px;
        transition: all .5s ease;
}

.screen_menu_hamburger::before{
    transform: translateY(-6px);
}

.screen_menu_hamburger::after{
    transform: translateY(6px);
}
</style>

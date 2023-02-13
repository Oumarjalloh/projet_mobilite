<template>
  <div>
    <nav>
      <ul v-if="!isMobile">
        <li @click="toggleDropdown"><router-link to="/">Accueil</router-link></li>
        <li @click="toggleDropdown"><router-link to="/about">A propos</router-link></li>
        <li @click="toggleDropdown"><router-link to="/test">Test</router-link></li>
      </ul>
      <template v-else>
        <div @click="toggleDropdown">
          Menu
          <ul v-if="showDropdown">
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/about">A propos</router-link></li>
            <li><router-link to="/test">Test</router-link></li>
          </ul>
        </div>
      </template>
    </nav>
  </div>
		<router-view/>
</template>
<!-- <template>
  <nav class="nav" id="mynav">
    <div class="logo">
      <a href="#">
        <img src="">
      </a>
    </div>
    <div class="menu-list">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/about">A Propos</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
    <div class="menu">
							<div class="line1"></div>
							<div class="line2"></div>
							<div class="line3"></div>
			</div>

  </nav>
  <router-view/>
</template> -->
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
*{
	margin: 0%;
	padding: 0%;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

	.menu {
					display: block;
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
</style>

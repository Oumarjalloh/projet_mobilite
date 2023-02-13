<template>
  <div class="hello">
    <div :key="index" v-for="(antony, index) in antony">
      <h1>{{ antony.translations.fr }}</h1>
      <!-- <img :src="antony.flag" alt=""> -->
    </div>
    <!-- <h1>{{ msg }}</h1> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
  data(){
    return{
      antony: null,
    }
  },
  mounted(){
    axios
    .get('https:acceslibre.beta.gouv.fr/api/erps/?commune=Antony&readable=true&page_size=150')
    .then((reponse) => {
      this.antony = reponse.data;
      console.log(this.antony)
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>

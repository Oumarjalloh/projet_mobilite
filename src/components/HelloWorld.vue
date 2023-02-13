<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
  </div>
</template>

<script>
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
    .get(' https:acceslibre.beta.gouv.fr/api/erps/?commune=Antony&readable=true&page_size=150')
    .then(reponse => (this.antony = reponse))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

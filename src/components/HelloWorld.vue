<template>
  <div class="hello">
   <div :key='index' v-for="(mobilite, index) in mobilite">
    <h1> {{ mobilite }}</h1>
   </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data(){
    return{
      mobilite: null
    }
  },
  mounted(){
    axios
    .get('https://acceslibre.beta.gouv.fr/api/erps/?commune=Antony')
    .then((reponse) => {
      this.mobilite = reponse;
      console.log(this.mobilite)
    })
  }
}
</script>


<style>

</style>

<template>
  <div>
    <div v-if="sliderimgs.length">
      <Slider :data="sliderimgs"></Slider>
    </div>
  </div>
</template>

<script>
  import {getSliderImg} from '../api/';
  import Slider from '../components/Slider';

  export default {
    name: 'Home',
    data () {
      return {
        sliderimgs: []
      }
    },
    created(){
      getSliderImg().then((data)=>{
        console.log(data);
        this.sliderimgs = data;
      });
    },components:{
      Slider
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
}
</style>

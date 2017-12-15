<template>
  <div class="container_time" style="background-image:url('https://cesandovalp.github.io/Images/FondoL1.jpg');">
    <div id="myMap"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }},
  mounted: function() {
        console.log("map: ", google.maps)
            this.map = new google.maps.Map(document.getElementById('myMap'), {
            center: {lat:4.7110, lng: -74.0721},
            scrollwheel: false,
            zoom: 15
            })
  }

}
</script>
<style scoped>
    #myMap {
    height:500px;
    width: 100%;
   }
</style>

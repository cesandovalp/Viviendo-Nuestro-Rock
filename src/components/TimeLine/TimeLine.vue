<template>
  <div class="container_time" style="width:100%; height:66vh; background-image:url('https://cesandovalp.github.io/Images/FondoL1.jpg');">
    <div style="width:70%; float:left;">
      <div style="width:20%; float:left; padding: 7%;">
        <div style="background:#000; width:100%; height: 50px; display:inline-block;"></div>
        <div style="background:#666777; width:100%; height: 50px; display:inline-block;"></div>
        <div style="background:#777888; width:100%; height: 50px; display:inline-block;"></div>
        <div style="background:#888999; width:100%; height: 50px; display:inline-block;"></div>
      </div>
      <div style="width:80%; float:left; word-wrap: break-word; padding-top: 5%; padding-left: 5%;">
        <div style="width:49%; float:left; border-radius: 10px; border-style: solid; height:56vh; margin-right:2%; padding: 3%; background:rgba(255,255,255,0.7);">
          Lorem ipsum dolor sit amet, mei suas affert dissentias ne, no sit legere dolores. Vix an duis prima suavitate. Ancillae mandamus imperdiet mei te, oblique eripuit accusamus ea mei, amet pertinax cotidieque et pri. No nulla clita mandamus cum, ad his voluptua ocurreret comprehensam. Sea ad appetere qualisque, semper graecis vix ex.
        </div>
        <div style="width:49%; float:left; border-radius: 3px; border-style: solid; height:56vh; background-image:url('https://cesandovalp.github.io/Images/2016rap.jpg');">
        </div>
      </div>
    </div>
    <div style="width:30%; float:left; height:60vh; overflow:hidden;">
      <div style="height:30vh;">
      </div>
      <div class="compass" style="height:60vh;">
      </div>
    </div>
  </div>
</template>

<script>
import fastQuery from './FastQuery.js'
import radial from './app.js'
import Filter from '@/components/Filter/Filter'

export default {
  data () {
    return {
      angle: 0
    }
  },
  methods: {
  },
  components: {
    Filter
  },
  mounted(){
  }
}
</script>

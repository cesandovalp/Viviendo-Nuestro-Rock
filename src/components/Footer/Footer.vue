<template>
  <div class="footer" style="background:#110202; color:#fff !important;"">
    <div style="float:left; width:25%; text-align: left; padding: 1%;">
      <p style="margin:0;"><a href="javascript:void(0)">Bibliored</a></p>
      <p style="margin:0;"><a href="javascript:void(0)">FAQ</a></p>
      <p style="margin:0;"><a href="javascript:void(0)">Rock al parque</a></p>
      <p style="margin:0;"><a href="javascript:void(0)">Año / créditos</a></p>
      <p style="margin:0;"><a href="javascript:void(0)">Mensaje subliminal</a></p>
    </div>
    <div style="float:left; width:50%; padding: 1%;">íconos</div>
    <div style="float:left; width:25%; padding: 1%;">Logos Distrito</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as constants from '@/store/constants'

export default {
  methods: {
    ...mapGetters({
      isLogged: constants.SESSION_IS_LOGGED
    })
  }
}
</script>


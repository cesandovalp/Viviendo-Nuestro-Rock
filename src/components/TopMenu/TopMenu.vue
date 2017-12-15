<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color:#3f0404 !important; color:#fff !important; height: 120px; !important;">
    <a class="navbar-brand" style="color:#fff !important; padding-left: 1%; padding-right: 6%;" href="#">BIBLOROCK</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent" style="background:#3f0404 !important; color:#fff !important;">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }" style="color:#fff !important; padding-right: 40%;">INICIO</router-link>
        </li>
        <li class="nav-item" v-if="isLogged()">
          <a class="nav-link" href="javascript:void(0)" @click="logout" style="color:#fff !important; padding-right: 40%;">SALIR</a>
        </li>
        <li class="nav-item" v-else>
          <router-link class="nav-link" :to="{ name: 'Login' }" style="color:#fff !important; padding-right: 40%;">INGRESAR</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'TimeLine' }" style="color:#fff !important; padding-right: 40%;">MEMORIAS</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Meetings' }" style="color:#fff !important;">ENCUENTROS</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import * as constants from '@/store/constants'

export default {
  methods: {
    ...mapActions({
         logout: constants.SESSION_SIGN_OUT
    }),
    ...mapGetters({
      isLogged: constants.SESSION_IS_LOGGED
    })
  }
}
</script>

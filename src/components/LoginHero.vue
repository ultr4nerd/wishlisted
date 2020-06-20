<template>
  <header class="hero is-light is-fullheight">
    <b-loading :active.sync="isLoading" />
    <div class="hero-body">
      <div class="container">
        <figure class="image is-128x128">
          <img src="../../assets/logo.png" alt="Logo" />
        </figure>
        <h1 class="title">Wishlisted</h1>
        <h2 class="subtitle">La única lista de deseos que necesitarás</h2>
        <b-button type="is-black" icon-left="google" @click="login">
          Iniciar Sesión con Google
        </b-button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters(['isLoading']),
  methods: mapActions(['login'])
};
</script>

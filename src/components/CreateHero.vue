<template>
  <div>
    <section class="hero is-light is-hidden-tablet">
      <div class="hero-head">
        <div class="container">
          <b-button
            rounded
            type="is-light"
            tag="router-link"
            :to="{ name: 'home' }"
          >
            <span class="icon is-large">
              <i class="fas fa-2x fa-arrow-left"></i>
            </span>
          </b-button>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Crea un nuevo deseo</h1>
          <h2 class="subtitle">Añade la URL debajo</h2>
          <b-field>
            <b-input
              placeholder="https://www.mideseo.com/articulo"
              :loading="isLoading"
              :value="wishUrl"
              @input="searchWish"
            />
          </b-field>
          <div class="buttons">
            <b-button type="is-dark" @click="getClipboardData"
              >Pegar desde el portapapeles</b-button
            >
          </div>
        </div>
      </div>
    </section>
    <section
      class="hero is-light is-fullheight is-hidden-mobile is-hidden-tablet-only"
    >
      <div class="hero-head">
        <div class="container">
          <b-button
            rounded
            type="is-light"
            tag="router-link"
            :to="{ name: 'home' }"
          >
            <span class="icon is-large">
              <i class="fas fa-2x fa-arrow-left"></i>
            </span>
          </b-button>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Crea un nuevo deseo</h1>
          <h2 class="subtitle">Añade la URL debajo</h2>
          <b-field>
            <b-input
              placeholder="https://www.mideseo.com/articulo"
              :loading="isLoading"
              :value="wishUrl"
              @input="searchWish"
            />
          </b-field>
          <div class="buttons">
            <b-button type="is-dark" @click="getClipboardData"
              >Pegar desde el portapapeles</b-button
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters(['isLoading', 'wish', 'wishUrl']),
  methods: {
    ...mapActions(['searchWish']),
    async getClipboardData() {
      const url = await navigator.clipboard.readText();
      this.$store.dispatch('searchWish', url);
    }
  }
};
</script>

<style scoped>
.hero-head .container {
  padding-top: 20px;
  padding-left: 20px;
}
</style>

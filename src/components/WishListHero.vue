<template>
  <header class="hero is-light">
    <div class="hero-body">
      <div class="container has-text-centered">
        <figure class="image is-64x64">
          <img
            class="is-rounded"
            :src="user.photoURL"
            :alt="user.displayName"
          />
        </figure>
        <h1 class="title">Wishlisted</h1>
        <h2 class="subtitle">Lista de {{ user.displayName }}</h2>
      </div>
      <div class="buttons">
        <b-button tag="router-link" :to="{ name: 'create' }" type="is-dark">
          Añadir
        </b-button>
        <b-button @click="logout">Cerrar sesión</b-button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: mapActions(['logout'])
};
</script>

<style scoped>
figure {
  margin: 10px auto;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
</style>

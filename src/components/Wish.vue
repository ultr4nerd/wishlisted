<template>
  <article class="media">
    <figure v-if="wish.image" class="media-left">
      <p class="image is-64x64">
        <img :src="wish.image" :alt="wish.title" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ wish.title }}</strong>
          <br />
          {{ wish.description }}
          <br />
          <a :href="wish.url">
            <small>{{ wish.url }}</small>
          </a>
        </p>
      </div>
      <nav v-if="createButtons" class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <b-button type="is-dark" @click="createWish">Guardar</b-button>
          </a>
          <a class="level-item">
            <b-button @click="removeWish">Remover</b-button>
          </a>
        </div>
      </nav>
      <nav v-else class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <b-button @click="deleteWish(wish.id)">Quitar</b-button>
          </a>
        </div>
      </nav>
    </div>
  </article>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    wish: {
      type: Object,
      required: true
    },
    createButtons: {
      type: Boolean,
      default: false
    }
  },
  methods: mapActions(['createWish', 'removeWish', 'deleteWish'])
};
</script>

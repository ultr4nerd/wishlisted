<template>
  <div class="columns">
    <div class="column">
      <create-hero />
    </div>
    <div class="column wish">
      <div class="container">
        <wish v-if="wish" :wish="wish" :create-buttons="true" />
        <wish-loader v-show="isLoading" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CreateHero from '@/components/CreateHero.vue';
import WishLoader from '@/components/WishLoader.vue';
import Wish from '@/components/Wish.vue';

export default {
  components: { Wish, WishLoader, CreateHero },
  computed: mapGetters(['isLoading', 'wish'])
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.wish {
  margin: auto 0;
}

.wish .container {
  padding-left: 40px;
  padding-right: 60px;
}
</style>

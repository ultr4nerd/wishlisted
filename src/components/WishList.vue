<template>
  <div>
    <wish-list-hero :user="user" />
    <div class="container">
      <wish-loader v-for="index in 3" v-show="isLoading" :key="index" />
      <wish v-for="w in wishes" :key="w.key" :wish="w" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import WishListHero from '@/components/WishListHero.vue';
import Wish from '@/components/Wish.vue';
import WishLoader from '@/components/WishLoader.vue';

export default {
  components: { WishListHero, Wish, WishLoader },
  computed: mapGetters(['user', 'wishes', 'isLoading'])
};
</script>

<style scoped>
.container {
  padding: 20px 15px 0;
}
</style>

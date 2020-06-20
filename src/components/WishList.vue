<template>
  <wish-list-hero :user="user" />
</template>

<script>
import { mapGetters } from 'vuex';
import WishListHero from '@/components/WishListHero.vue';

export default {
  components: { WishListHero },
  computed: mapGetters(['user'])
};
</script>

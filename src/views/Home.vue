<template>
  <wish-list v-if="isAuthenticated" />
  <login-hero v-else />
</template>

<script>
import { mapGetters } from 'vuex';
import LoginHero from '@/components/LoginHero.vue';
import WishList from '@/components/WishList.vue';

export default {
  components: { LoginHero, WishList },
  computed: mapGetters(['isAuthenticated'])
};
</script>

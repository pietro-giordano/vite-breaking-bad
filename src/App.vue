<script>
import axios from 'axios'
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
      name: 'App',
      components: {
            AppHeader,
            AppMain,
            AppFooter
      },
      data() {
            return {
                  store
            }
      },
      created() {

            axios
                  .get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
                  .then((response) => {
                        console.log(response.data.data.slice(0, 24));
                        this.store.results = response.data.data.slice(0, 24);
                        console.log(this.store);

                  });

      }
}
</script>

<template>
      <AppHeader />

      <AppMain />

      <AppFooter />
</template>

<style lang="scss">
@import './styles/main.scss';
</style>
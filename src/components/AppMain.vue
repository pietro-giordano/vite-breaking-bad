<script>
import axios from 'axios'
import { store } from '../store';
import AppLoader from './AppLoader.vue';
import SearchForm from './SearchForm.vue';
import SingleCard from './SingleCard.vue';

export default {
      name: 'AppMain',
      components: {
            SearchForm,
            SingleCard,
            AppLoader
      },
      data() {
            return {
                  store
            }
      },
      methods: {

            getArchetypeCards() {

                  this.store.loading = true;
                  this.store.cardVisibility = false;

                  axios
                        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
                              params: {
                                    archetype: this.store.archetypeValue
                              }
                        })
                        .then((response) => {
                              console.log(response);
                              this.store.results = response.data.data;
                              console.log(this.store.results);

                              this.store.loading = false;
                              this.store.cardVisibility = true;
                        });

            }

      },
      created() {

            this.store.loading = true;

            axios
                  .get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
                  .then((response) => {
                        console.log(response);
                        this.store.results = response.data.data.slice(0, 24);
                        console.log(this.store.results);

                        this.store.loading = false;
                  });

            axios
                  .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
                  .then((response) => {
                        console.log(response.data);
                        this.store.archetype = response.data;
                  });

      }
}
</script>

<template>
      <main>
            <SearchForm @change="getArchetypeCards" />

            <div class="container bg-white p-5">
                  <div class="row">
                        <div class="col founded">
                              <p class="p-3 text-white">Found {{ store.results.length }} cards</p>
                        </div>
                  </div>

                  <AppLoader v-if="store.loading" />

                  <div class="row">
                        <div class="col-6 col-sm-4 col-md-3 col-lg-2 text-center" v-for="card in store.results">
                              <SingleCard :card="card" v-if="store.cardVisibility" />
                        </div>
                  </div>
            </div>
      </main>
</template>

<style lang="scss">
main {
      background-color: $ocra-color;

      .founded p {
            background-color: $found-color;
      }

      .info-card {
            background-color: $ocra-color;
      }
}
</style>
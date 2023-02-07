<script>
import { store } from '../store';
import SearchForm from './SearchForm.vue';
import SingleCard from './SingleCard.vue';

export default {
      name: 'AppMain',
      components: {
            SearchForm,
            SingleCard
      },
      data() {
            return {
                  store
            }
      }
}
</script>

<template>
      <main>
            <SearchForm />

            <div class="container bg-white p-5">
                  <div class="row">
                        <div class="col founded">
                              <p class="p-3 text-white">Found {{ store.results.length }} cards</p>
                        </div>
                  </div>

                  <div class="row">
                        <div class="col-6 col-sm-4 col-md-3 col-lg-2 text-center" v-for="card in store.results">
                              <SingleCard :card="card" />
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
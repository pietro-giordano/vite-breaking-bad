<script>
import SearchForm from './SearchForm.vue';

export default {
      name: 'AppMain',
      components: {
            SearchForm
      }
}
</script>

<template>
      <main>
            <SearchForm />

            <div class="container">
                  <div class="row">
                        <div class="col-6 col-sm-4 col-md-3 col-lg-2 text-center" v-for="i in 24">
                              <div>
                                    <img src="https://via.placeholder.com/200" class="img-fluid" alt="Card name">
                              </div>

                              <div>
                                    <h4>
                                          Card name
                                    </h4>

                                    <h4>
                                          Type of card
                                    </h4>
                              </div>
                        </div>
                  </div>
            </div>
      </main>
</template>

<style lang="scss">
main {
      background-color: $ocra-color;
}
</style>
<script>
import { store } from '../store';

export default {
      name: 'SearchForm',
      data() {
            return {
                  store
            }
      },
}
</script>

<template>
      <div class="container">
            <div class="row py-4">
                  <div class="col-2">
                        <select class="form-select" aria-label="Default select example">
                              <option selected value="">Search for archetype...</option>
                              <option v-for="archetype in store.archetype" :value="archetype.archetype_name">{{
                                    archetype.archetype_name
                              }}
                              </option>
                        </select>
                  </div>
            </div>
      </div>
</template>

<style lang="scss">

</style>
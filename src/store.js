import { reactive } from 'vue';

export const store = reactive({
      results: [],
      archetype: [],
      archetypeValue: '',
      loading: false,
      cardVisibility: true
});
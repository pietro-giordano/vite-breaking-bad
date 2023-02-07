<script>
export default {
      name: 'SingleCard',
      props: {
            card: Object
      }
}
</script>

<template>
      <div>
            <img :src="card.card_images[0].image_url" class="img-fluid" :alt="card.name">
      </div>

      <div class="info-card">
            <p class="text-uppercase text-white">
                  {{ card.name }}
            </p>

            <p>
                  {{ card.type }}
            </p>
      </div>
</template>

<style lang="scss">

</style>
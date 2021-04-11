<template>
    <!-- STYLES AT MOREPRODUCTS/COMPLETE -->
    <section class="complete container mt-4">
        <h2 class="complete__title text text--serif">Completa tu look</h2>
        <div class="px-5">
            <Carousel :perPageCustom="[[1024, 4]]" :navigationEnabled="true" :perPage="1" :paginationEnabled = "false"  class="mt-4 carousel">
                <Slide v-for="product in products" :key="product.name">
                    <CardProduct :product = "product" :action = "true"/>
                </Slide>
            </Carousel>
        </div>
    </section>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
import CardProduct from './CardProduct'
export default {

    name: 'CompleteYourLook',
    components: {
        Carousel,
        Slide,
        CardProduct
    },
    props : ['products'],
    data() {
        return {
        }
    },
}
</script>
<style lang="css" scoped>
</style>
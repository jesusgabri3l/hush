<template>
    <section class="container container--recommended mt-5">
        <div class="recommended">
            <h2 class="text text--serif text--serif--lined recommended__title text--darkgrey">
                Productos recomendados
            </h2>
            <div class="px-5">
                <Carousel :autoplay="true" :perPageCustom="[[1024, 4]]" :navigationEnabled="true" :perPage="1" :paginationEnabled="false" class="mt-4 carousel">
                    <Slide v-for="product in products" :key="product.name">
                        <CardProduct :product="product" :action="false"/>
                    </Slide>
                </Carousel>
            </div>
        </div>
    </section>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
import CardProduct from './CardProduct'
export default {

    name: 'RecommendedProducts',
    props: ['products'],
    components: {
        Carousel,
        Slide,
        CardProduct
    },
    data() {
        return {}
    }
}
</script>
<style lang="css" scoped>
</style>
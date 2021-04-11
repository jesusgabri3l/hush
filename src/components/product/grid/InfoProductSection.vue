<template>
    <div>
    <!-- STYLES AT PRODUCT/PRODUCT -->

        <!-- NAME AND BASIC INFO SECTION -->
        <section class="infoProduct__grid__basic">
            <article>
                <h2 class="text text--serif text--serif--title infoProduct__grid__basic__title">Zapatilla hombre pelikan</h2>
                <p class="text text--primary text--serif text--serif--title infoProduct__grid__basic__price">$00,00</p>
                <p class="text text--light text--bold infoProduct__grid__basic__code">Cod. de producto zap-005</p>
            </article>
        </section>
        
        <!-- DETAIL SECTION -->
        <DetailSection />

        <!-- ACTIONS SECTION -->
        <section class="infoProduct__grid__actions mt-4">
            <div class="infoProduct__grid__actions__grid row">
                <div class="col-md-9 col-6">
                    <button class="button button--primary">
                        Añadir al carrito
                    </button>
                </div>
                <div class="col-md-3 col-6 pt-2 pl-5">
                    <i class="fa fa-heart infoProduct__grid__actions__fav"></i>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import DetailSection from '../DetailSection'
export default {
    name: 'InfoProductSection',
    components: {DetailSection},
    data() {
        return {

        }
    }
}
</script>
<style lang="css" scoped>
</style>
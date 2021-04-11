<template>
    <section class="infoProduct__grid__details mt-4">
        <p class="text text--darkgrey infoProduct__grid__details__p">Color</p>
        <div class="infoProduct__grid__details__imgcontainer">
            <img src="../../assets/img/zapato.jpg" class="infoProduct__grid__details__imgcontainer__img" />
        </div>
        <p class="text text--darkgrey infoProduct__grid__details__p mt-4">Talla</p>
        <!-- TALLAS -->
        <div class="row infoProduct__grid__details__talla mt-3">
            <Size value="5" />
            <Size value="5.5" />
            <Size value="6" />
            <Size value="6.5" />
            <Size value="7" />
            <Size value="7.5" />
            <Size value="8" />
            <Size value="8.5" />
        </div>
        <p class="text infoProduct__grid__details__talla__guia mt-5">
            <a href="" class="infoProduct__grid__details__talla__guia__link">Guia de tallas</a>
        </p>
    </section>
</template>
<script>
import Size from './Size'

export default {

    name: 'DetailSection',
    components : {Size},
    data() {
        return {

        }
    }
}
</script>
<style lang="css" scoped>
</style>
<template>
    <!-- STYLES AT MOREPRODUCTS/CARDPRODUCT -->
    <div class="cardProduct" :class="action ? '' : 'cardProduct--lined'">
        <img :src="`/storage/${product.foto}`" class="cardProduct__image img-fluid">
        <div class="d-flex mt-4">
            <img :src="`/storage/${product.foto}`" class="img-fluid cardProduct__image--sm">
            <img :src="`/storage/${product.foto}`" class="img-fluid ml-4 cardProduct__image--sm">
        </div>
        <p class="text cardProduct__text mt-4">{{product.nombre}}</p>
        <small class="cardProduct__price text--primary mt-4">${{product.precio}}</small>
        <button class="button button--primary mt-3" v-if="action" @click="addToCart(product)">Agregar al carrito</button>
        <hr class="mt-3" v-else>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {

    name: 'CardProduct',
    props: ['product', 'action'],
    data() {
        return {

        }
    },
    methods: {
        ...mapMutations(['addElementToCart']),
        addToCart(product) {
            this.$swal({
                icon: 'success',
                title: 'Producto agregado con éxito!',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            })
            this.addElementToCart(product)
        }
    }
}
</script>
<style lang="css" scoped>
</style>
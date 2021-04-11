<template>
    <!-- STYLES AT HEADER/NAVBARL -->
    <b-navbar toggleable="lg" type="light" variant="info" class="navbarL py-3">
        <div class="container navbarL__container">
            <b-navbar-brand href="#" class="navbarL__brand">
                <h1 class="navbarL_title">
                    <img src="../../../assets/img/logo.jpg" alt="" class="navbarL__brand__img img-fluid">
                </h1>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav class="navbarL__collapse">
                <b-navbar-nav class="navbarL__list">
                    <b-nav-item href="#" class="navbarL__list__link">Hombre</b-nav-item>
                    <b-nav-item href="#" class="navbarL__list__link">Mujer</b-nav-item>
                    <b-nav-item href="#" class="navbarL__list__link">Blog</b-nav-item>
                    <b-nav-item href="#" class="navbarL__list__link">Historia</b-nav-item>
                    <b-nav-item href="#" class="navbarL__list__link">Tiendas</b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto navbarL__rightSection">
                    <b-nav-form class="form">
                        <div class="form__input">
                        <b-form-input size="sm" class="mr-sm-2 form__input__input" placeholder="Buscar"></b-form-input>
                        <i class="fa fa-angle-right"></i>
                            
                        </div>
                    </b-nav-form>
                    <strong class="navbarL__rightSection__alert">Envios gratis para pedidos superiores a $300.000</strong>
                    <button class="navbarL__rightSection__button btn text text--serif" v-b-toggle.cartSide>
                        <i class="fa fa-shopping-cart mr-2"></i>Carrito ({{cart.length}})
                    </button>
                </b-navbar-nav>
            </b-collapse>
            <!-- STYLES AT CART/CART -->
            <b-sidebar id="cartSide" title="Carrito" shadow>
                <div class="px-3 py-2 cart">
                    <div class="" v-if="cart.length == 0">
                        <p class="text-center">Parece que no has añadido nada al carrito...</p>
                    </div>
                    <div class="cart__container d-flex justify-content-between align-items-center mt-4" v-else v-for="(product, index) in cart" :key="product.nombre">
                        <div class="cart__container__basic">
                            <img :src="`storage/${product.foto}`" class="cart__container__basic__img img-fluid mr-2">
                            <div class="d-flex flex-column justify-content-center">
                                <p class="text cart__container__basic__title text--darkgrey">{{product.nombre}}</p>
                                <small class="cart__container__basic__price text--primary font-weight-bold">$ {{product.precio}}</small>
                            </div>
                        </div>
                        <div class="cart__container__actions">
                            <button class="btn btn-danger btn-sm mr-2" @click="deleteAlert(index)"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>
                    <button class="button button--primary cart__button" @click="cleanCartAlert()">
                        Vaciar carrito
                    </button>
                </div>
            </b-sidebar>
        </div>
    </b-navbar>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {

    name: 'Navbar',
    data() {
        return {
            showModalCart: false
        }
    },
    methods: {
        ...mapMutations(['deleteElementFromCart', 'cleanCart']),
        deleteAlert(index) {
            this.$swal({
                text: '¿Estás seguro que deseas borrar este producto del carrito?',
                icon: 'warning',
                showCancelButton: true,
                cancelButtonColor: '#dc3545',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Si, quiero borrarlo'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.deleteElementFromCart(index)
                    this.successAlert('Producto eliminado con éxito!')
                }
            })
        },
        cleanCartAlert() {
            if (this.cart.length == 0) {
                this.alertCartEmpty()
            } else {
                this.$swal({
                    title: '¿Estás seguro que deseas vaciar el carrito?',
                    icon: 'warning',
                    showCancelButton: true,
                    cancelButtonColor: '#dc3545',
                    cancelButtonText: 'Cancelar',
                    confirmButtonText: 'Si, quiero vaciar mi carrito'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.cleanCart()
                        this.successAlert('El carrito fue vaciado con éxito!')
                    }
                })
            }
        },
        alertCartEmpty() {
            this.$swal({
                title: 'Parece que el carrito no tiene productos...',
                icon: 'info',
                timer: 2000,
                showConfirmButton: false,
            })
        },
        successAlert(msg){
            this.$swal({
                title : `${msg}`,
                icon: 'success',
                timer : 2000,
                showConfirmButton: false,
            })
        }
    },
    computed: {
        ...mapState(['cart'])
    }
}
</script>
<style lang="css" scoped>
</style>
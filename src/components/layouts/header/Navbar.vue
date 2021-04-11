<template>
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
                    <b-nav-form class="navbarL__rightSection__form">
                        <b-form-input size="sm" class="mr-sm-2 navbarL__rightSection__form__input" placeholder="Search"></b-form-input>
                    </b-nav-form>
                    <strong class="navbarL__rightSection__alert">Envios gratis para pedidos superiores a $300.000</strong>
                    <button class="navbarL__rightSection__button btn text text--serif">
                        Carrito 0
                    </button>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>
<script>
export default {

    name: 'Navbar',

    data() {
        return {

        }
    }
}
</script>
<style lang="css" scoped>
</style>
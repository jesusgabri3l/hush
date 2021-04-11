<template>
    <nav class="footer__nav">
        <div class="container footer__nav__container">
            <div class="footer__nav__container row">
                <div class="footer__nav__item col-md-3">
                    <p class="footer__nav__item__title">Servicio al cliente</p>
                    <ul class="footer__nav__item__list">
                        <li class="footer__nav__item__list__item">
                            <a class="footer__nav__item__list__item__link">Contactenos</a>
                        </li>
                        <li class="footer__nav__item__list__item">
                            <a class="footer__nav__item__list__item__link">Cambios y devoluciones</a>
                        </li>
                        <li class="footer__nav__item__list__item">
                            <a class="footer__nav__item__list__item__link">Politicas de la tienda</a>
                        </li>
                        <li class="footer__nav__item__list__item">
                            <a class="footer__nav__item__list__item__link">Politica de datos</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__nav__item col-md-3">
                    <p class="footer__nav__item__title">Mi cuenta</p>
                    <ul class="footer__nav__item__list">
                        <li class="footer__nav__item__list__item">
                            <a class="footer__nav__item__list__item__link">Mis pedidos</a>
                        </li>
                        <li class="footer__nav__item__list__item">
                            <a class="footer__nav__item__list__item__link">Mis devoluciones</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__nav__item col-md-3">
                    <p class="footer__nav__item__title">Recursos</p>
                    <ul class="footer__nav__item__list">
                        <li class="footer__nav__item__list__item">
                            <a class="footer__nav__item__list__item__link">Tiendas</a>
                        </li>
                        <li class="footer__nav__item__list__item">
                            <a class="footer__nav__item__list__item__link">Devoluciones</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__nav__item col-md-3">
                    <p class="footer__nav__item__title">Newsletter</p>
                    <ul class="footer__nav__item__list">
                        <li class="footer__nav__item__list__item">
                            <p class="footer__nav__item__list__item__text">Registrate para ser el primero en recibir nuestras noticias</p>
                        </li>
                        <li class="footer__nav__item__list__item">
                            <b-nav-form class="navbarL__rightSection__form">
                                <b-form-input size="sm" class="mr-sm-2 navbarL__rightSection__form__input" placeholder="Search"></b-form-input>
                            </b-nav-form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {

    name: 'NavSection',

    data() {
        return {

        }
    }
}
</script>
<style lang="css" scoped>
</style>
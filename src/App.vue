<template>
    <div id="app" class="pb-5">
        <Header />
        <Breadcum />
        <ProductoPage />
        <CompleteYourLook :products = "products"/>
        <RecommendedProducts :products = "products"/>
    </div>
</template>
<script>
import Header from './components/layouts/header/Header.vue'
import Breadcum from './components/layouts/Breadcum.vue'
import ProductoPage from './views/ProductPage.vue'
import CompleteYourLook from './components/layouts/products/CompleteYourLook';
import RecommendedProducts from './components/layouts/products/RecommendedProducts';

export default {
    name: 'App',
    components: { Header, Breadcum, ProductoPage, CompleteYourLook, RecommendedProducts },

    data() {
        return {
            products: []
        }
    },
    methods: {
        getData() {
            fetch('data/zapato.json')
                .then(response => response.json())
                .then(data => {
                    this.products = [...data]
                })
        }
    },
    beforeMount() {
        this.getData();
    }
}
</script>
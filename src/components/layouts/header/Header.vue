<template>
    <!-- ALL COMPONENTS STYLES AT _HEADER -->
    <header class="header">
        <div class="hotSale">
            <strong class="hotSale__text">Hot sale -30% en Sandalias</strong>
        </div>
        <NavSmall />
        <Navbar />
    </header>
</template>
<script>
import NavSmall from './NavSmall.vue';
import Navbar from './Navbar.vue'
export default {

    name: 'Header',
    components: { NavSmall, Navbar },
    data() {
        return {

        }
    }
}
</script>
<style lang="css" scoped>
</style>
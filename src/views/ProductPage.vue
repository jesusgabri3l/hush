<template>
    <!-- STYLES AT PRODUCT/PRODUCT -->
    <section class="container container--product mt-4">
        <div class="row px-4 infoProduct">
            <div class="col-md-6 infoProduct__grid">
                <ImageSection />
            </div>
            <div class="col-md-6 infoProduct__grid px-5">
                <InfoProductSection />
            </div>
        </div>
        
        <!-- STYLES AT PRODUCT/MOREPRODUCT -->
        <MoreInfo />
    </section>
</template>
<script>
import ImageSection from '@/components/product/ImageSection'
import InfoProductSection from '@/components/product/InfoProductSection'
import MoreInfo from '@/components/product/MoreInfo';

export default {

    name: 'ProductPage',
    components: {ImageSection, InfoProductSection, MoreInfo},
    data() {
        return {

        }
    }
}
</script>
<style lang="css" scoped>
</style>
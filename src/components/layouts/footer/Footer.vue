<template>
    <!-- STYLES AT FOOTER/FOOTER -->
    <footer class="footer">
        <SocialMediaSection />
        <NavSection/>
        <div class="pt-3">
            <div class="container">
                <div class="d-flex justify-content-center">
                    <img src="../../../assets/img/brands.png">
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import SocialMediaSection from './SocialMediaSection'
import NavSection from './NavSection'
export default {

    name: 'Footer',
    components: { SocialMediaSection, NavSection },
    data() {
        return {

        }
    }
}
</script>
<style lang="css" scoped>
</style>
<template>
    <div class="col-md-2 col-3 mt-3 infoProduct__grid__details__talla__container">
        <span class="infoProduct__grid__details__talla__item">
            {{value}}
        </span>
    </div>
</template>
<script>
export default {

    name: 'Talla',
    props: ['value'],
    data() {
        return {

        }
    }
}
</script>
<style lang="css" scoped>
</style>
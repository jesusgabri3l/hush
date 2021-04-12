<template>
    <section class="infoProduct__grid__images">
        <div class="infoProduct__grid__images__main px-5 py-3">
        <img src="../../../assets/img/zapato.jpg" class="infoProduct__grid__images__main__img img-fluid" :class = "loading ? 'd-none' : ''">
        <div class="loader" :class = "loading ? '' : 'd-none'"></div>
        </div>
        <hr>
        <div class="d-flex" style="height: 100px;">
            <div :class = "loading ? 'd-none' : 'd-flex'">
            <img src="../../../assets/img/zapato.jpg" class="infoProduct__grid__images__item img-fluid">
            <img src="../../../assets/img/zapato.jpg" class="infoProduct__grid__images__item img-fluid">
            <img src="../../../assets/img/zapato.jpg" class="infoProduct__grid__images__item img-fluid">
            <img src="../../../assets/img/zapato.jpg" class="infoProduct__grid__images__item img-fluid">
            <img src="../../../assets/img/zapato.jpg" class="infoProduct__grid__images__item img-fluid">
            </div>
            <div class="loader margin" :class = "loading ? '' : 'd-none'"></div>
        </div>
    </section>
</template>
<script>
export default {

    name: 'ImageSection',

    data() {
        return {
            loading: true
        }
    },
    mounted(){
        setTimeout( () => {
            this.loading = false
        }, 2000)
    }
}
</script>
<style lang="css" scoped>
.loader,
.loader:before,
.loader:after {
  background: #ccc;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #ffffff;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader.margin{
    margin: 10px auto;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>
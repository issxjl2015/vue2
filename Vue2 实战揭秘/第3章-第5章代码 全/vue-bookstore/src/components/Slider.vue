<template>
  <div class="swiper-container" ref="slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide, key) in slides" :key="key">
        <img :src="slide.img_url">
      </div>
    </div>
    <div class="swiper-pagination" ref="pagination"></div>
  </div>
</template>
<style lang="less">
.swiper-container {
  & img {
    width: 100%;
  }
}
</style>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  props: ['slides'], // 获取父组建传过来的值
  mounted() {
    new Swiper(this.$refs.slider, {
      pagination: this.$refs.pagination,
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false
    })
  }
}
</script>

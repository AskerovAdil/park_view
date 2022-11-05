<template #slides>
    
    <Carousel class="" :autoplay="5000" >
      <Slide v-for="(slide) in Photos" :key="slide">
        <div class="carousel__item h-[580px] w-full bg-center bg-cover">
            <img :src="'https://pp.ftf.tsu.ru/' + slide.link"
            class="w-full relative flex items-center overflow-hidden bg-cover  p-0" />
        </div>
      </Slide>
  
      <template >
        <Pagination />
      </template>
    </Carousel>
  </template>

<!-- <img :src="'https://pp.ftf.tsu.ru/' + el.link"
class="w-full  h-[550px] relative flex items-center overflow-hidden bg-center p-0" /> -->
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
export default {
    name: 'Autoplay',

    components: {
        Carousel,
    Slide,
    Pagination,
    },
    props:{
        Photos:[]
    }
}
</script>

<style lang="scss" scoped>

</style>
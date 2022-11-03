<template>
            <div class="container mx-auto pb-8 bg-white rounded-lg shadow">
            <div class="mx-auto text-center py-6">
                    <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
                        Галлерея
                    </h2>
            </div>

            <lightgallery
                class="grid  gap-4 overflow-hidden text-white px-10 pt-4"
                :class="{
                    'lg:grid-cols-3 md:grid-cols-2':this.Files.length>=3,
                    'grid-cols-2':this.Files.length>1 && this.Files.length<3,
                }"
                :settings="{ speed: 500, plugins: plugins }"
                :onInit="onInit"
                :onBeforeSlide="onBeforeSlide"
                :addClass='lg-custom-thumbnails'
            >
                
                <a :href="'https://pp.ftf.tsu.ru/'+el.link" v-for="(el) in Files" :key="el.id">
                    <img :alt="el.name" :src="'https://pp.ftf.tsu.ru/'+el.link"  
                        class="hover:scale-105 transition shadow-lg block object-cover object-center w-full h-[250px] cover rounded-lg"
                    />
                   

                </a>
            </lightgallery>
        </div>
    <div class="pt-2 ">



          <!--<div  class="flex text-left -m-1 md:-m-2">
            <div :class="{'w-3/5':Files.length>1, 'w-full':Files.length <= 2}" class="p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-[300px] cover rounded-lg"
                        :src="'https://pp.ftf.tsu.ru/'+Files[0].link">
            </div>
            <div :class="{'w-2/5':Files.length>1}" class="p-1 md:p-2">
                    <div v-if="Files.length>1" class="">
                        <img alt="gallery" :class="{'h-[148px]':Files.length>2}" class="block object-cover object-center w-full  rounded-lg"
                            :src="'https://pp.ftf.tsu.ru/'+Files[1].link">

                    </div>
                    <div v-if="Files.length>2" class="relative bg-black h-[148px] mt-1 rounded-lg ">
                            <p class="z-20 absolute top-[50px] left-[200px] text-4xl text-white text-white">
                                + {{Files.length-2}}
                            </p>
                        <img alt="gallery" class="h-full w-full opacity-50 block object-cover object-center  rounded-lg"
                            :src="'https://pp.ftf.tsu.ru/'+Files[2].link">
                    </div>
                </div>
        </div>-->
        <!--
        <div class="flex text-left -m-1 md:-m-2">
                <div class="w-3/5 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full max-h-[300px] cover rounded-lg"
                        :src="'https://pp.ftf.tsu.ru/'+Files[0].link">
                </div>
                <div  class="w-2/5">
                    <div v-if="Files.length>1" class=" p-1 md:p-2">
                        <img alt="gallery"  class="block object-cover object-center w-full max-h-[141px] rounded-lg"
                            :src="'https://pp.ftf.tsu.ru/'+Files[1].link">
                        <img v-if="Files.length==2" alt="gallery"  class="block object-cover object-center w-full max-h-[300px] rounded-lg"
                            :src="'https://pp.ftf.tsu.ru/'+Files[1].link">
                    </div>
                    <div class="p-1 md:p-2">
                        <img alt="gallery" class="block object-cover object-center w-full max-h-[141px] rounded-lg"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp">
                    </div>
                </div>

        </div>
        -->
    </div>
</template>

<script>
import Lightgallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default {
    components:{Lightgallery},
    data(){
        return{
            plugins: [lgThumbnail, lgZoom],

        }
    },
    props:{
        Files:[]
    }
}
</script>

<style scoped>
@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-thumbnail.css';
@import 'lightgallery/css/lg-zoom.css';

</style>
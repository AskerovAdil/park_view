<template>
        <div class="mx-auto pb-8 bg-white rounded-lg shadow-lg">
            <div class="p-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                <h6 class="mb-0 dark:text-white">Галлерея</h6>
            </div>

            <lightgallery
                class="grid  gap-4 overflow-hidden text-white px-4 pt-4"
                :class="{
                    'lg:grid-cols-3 md:grid-cols-2':this.Files?.length>=3,
                    'grid-cols-2':this.Files?.length>1 && this.Files?.length<3,
                }"
                :settings="{ speed: 500, plugins: plugins }"
                :onInit="onInit"
                :onBeforeSlide="onBeforeSlide"
                :addClass='lg-custom-thumbnails'
            >
                
                <a :href="'https://pp.ftf.tsu.ru/'+el.link" v-for="(el) in Files" :key="el.id">
                    <img :alt="el.name" :src="'https://pp.ftf.tsu.ru/'+el.link"  
                        class="hover:scale-105 transition shadow-lg block object-cover object-center w-full h-[200px] cover rounded-lg"
                    />
                   

                </a>
            </lightgallery>
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
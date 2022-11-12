<template>

    <main-block :Name="'Новости'" :Description="'Новости проектного парка'">

        <swiper class="swiper" :modules="modules" :slides-per-view="1" :space-between="30" :loop="true"
            :pagination="{ clickable: true }"  navigation> 
            <swiper-slide v-for="el in News" :key="el.id">
                <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1  lg:grid-cols-2">
                        <div class="relative z-10 lg:py-16">
                            <div class="relative h-48 sm:h-80 lg:h-full">
                                <img v-if="el.files[0] != undefined" :src="'https://pp.ftf.tsu.ru/' + el.files[0]?.link"
                                    class="max-h-[500px] min-h-[200px] absolute inset-0 h-full w-full object-cover">
                                <img v-else alt="House"
                                    src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    class="max-h-[500px] min-h-[200px] absolute inset-0 h-full w-full object-cover" />
                            </div>
                        </div>

                        <div class="relative flex items-center bg-gray-100">
                            <span
                                class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                            <div class="p-8 sm:p-16 lg:p-24">
                                <h2 class="text-2xl font-bold sm:text-3xl">
                                    {{ el.name }}
                                </h2>

                                <div class="mt-4 mb-6 text-justify">
                                    <div class="mb-3 text-xl font-bold">{{ News.name }}</div>

                                    <p :class="{ 'max-h-[180px]': !isShow }"
                                        class="text-gray-600 overflow-hidden">
                                        {{ el.description }}
                                    </p>
                                    <div v-if="el.description?.length > 500" class="font-normal text-pink-500">
                                        <a v-if="!isShow" @click="isShow = !isShow;"
                                            class="hover:cursor-pointer ">Показать</a>
                                        <a v-if="isShow" @click="isShow = !isShow;"
                                            class="hover:cursor-pointer ">Скрыть</a>
                                    </div>


                                </div>

                                <router-link to="/News/Index"
                                    class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                                    На страницу новстей
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

        </swiper>

    </main-block>




</template>

<script>
import SwiperMixin from '@/components/mixins/Swiper'

import MainBlock from './MainBlock.vue';
export default {
    mixins: [SwiperMixin],
    components:
    {
        MainBlock
    },
    data() {
        return {
            News: [],
            isShow:false
        }
    },

    async mounted() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        var a = await fetch("https://pp.ftf.tsu.ru/api/News", requestOptions)
            .then(response => this.News = response.json())
            .then(x => this.News = x)
            .catch(error => console.log('error', error));
        console.log(this.NewsList)
    },
}
</script>

<style lang="scss">

//   .swiper {
//     @include swiper-wrapper();
//   }

//   .slide {
//     @include swiper-slide();
//   }
</style>
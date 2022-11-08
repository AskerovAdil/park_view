<template>

    <main-block :Name="'Новости'" :Description="'Новости проектного парка'">

        <swiper class="swiper" :modules="modules" :slides-per-view="1" :space-between="30" :loop="true"
            :pagination="{ clickable: true }" :navigation="true">
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

                                <a href="#"
                                    class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

        </swiper>


        <!-- ЭТО что-то типо отзывов -->
        <!-- <swiper class="swiper mx-auto" :modules="modules" :space-between="30" :slides-per-view="3"
            :pagination="{ clickable: true }">
            <swiper-slide v-for="el in News" :key="el.id" class="slide">
                <div class="p-4 w-full">
                    <div class="h-full bg-gray-100 p-8 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                            <path
                                d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                            </path>
                        </svg>
                        <p class="h-[200px] overflow-hidden leading-relaxed mb-6">{{ el.description }}</p>
                        <a class="inline-flex items-center">
                            <img alt="testimonial" src="https://dummyimage.com/107x107"
                                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                            <span class="flex-grow flex flex-col pl-4">
                                <span class="title-font font-medium text-gray-900">{{ el.user?.firstName + ' ' +
                                        el.user?.lastName
                                }}</span>
                                <span class="text-gray-500 text-sm">{{ el.user?.role }}</span>
                            </span>
                        </a>
                    </div>
                </div>
            </swiper-slide>
        </swiper> -->

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

<style lang="scss" scoped>

</style>
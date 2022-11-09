<template>


    <div class="">

        <div v-if="true">
            <section class="relative bg-gray-900 text-white rounded-lg shadow-xl">

                <div class=" mx-auto max-w-screen-2xl px-4 py-48 mb-10 lg:flex shadow-3xl lg:items-center">
                    <!-- <img v-if="Project?.photos != undefined" class="absolute opacity-30 object-fit  left-0 w-full bottom-0 z-0" :src="'https://pp.ftf.tsu.ru/' + Project.photos[0]?.link" alt=""> -->
                    <div class="absolute  opacity-20 object-fit left-0 h-full overflow-hidden w-full bottom-0 z-0">
                        <swiper class="" :modules="modules" :space-between="30" :slides-per-view="1"
                            :pagination="{ clickable: true }">
                            <swiper-slide v-for="el in Project.photos" :key="el.id" class="slide">
                                <div class="">
                                    <img :src="'https://pp.ftf.tsu.ru/' + el.link"
                                        class="object-cover w-full h-full z-40" alt="">
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>



                    <div class="z-40 mx-auto max-w-3xl text-center">
                        <h1
                            class="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                            {{ Project.name }}
                        </h1>

                        <p class="mx-auto mt-4 max-w-xl h-[100px] overflow-hidden sm:text-xl sm:leading-relaxed">
                            {{ Project.description }}

                        </p>

                        <div class="mt-8 flex flex-wrap justify-center gap-4">
                            <a class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="/get-started">
                                В команду проекта
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </div>

        <div v-if="false" class="w-full mb-6 shadow-xl">
            <div class="flex bg-white">
                <div class="relative flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                    <div class="my-40">
                        <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">{{ Project.name }}<span
                                class="text-indigo-600"></span></h2>
                        <p :class="{ 'max-h-[380px]': !isShow }"
                            class="overflow-hidden mt-6 mb-4 text-lg  leading-relaxed text-blueGray-700">
                            {{ Project.description }}
                        </p>
                        <div v-if="Project.description?.length > 1100" class="font-normal text-pink-500">
                            <a v-if="!isShow" @click="isShow = !isShow;" class="hover:cursor-pointer ">Показать</a>
                            <a v-if="isShow" @click="isShow = !isShow;" class="hover:cursor-pointer ">Скрыть</a>
                        </div>
                    </div>
                </div>
                <div class="hidden lg:block lg:w-1/2" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">

                    <div v-if="this.Project.photos?.length > 0" class=" w-full h-full object-cover">
                        <img :src="'https://pp.ftf.tsu.ru/' + this.Project.photos[(Project.photos.length - 1)].link"
                            class="w-full h-full object-cover bg-black" />

                    </div>
                    <div v-else class="h-full object-cover"
                        style="background-image: url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)">
                        <div class="w-full bg-black opacity-25"></div>
                    </div>
                </div>

            </div>
        </div>

        <div v-if="false" class="pb-10">
            <!-- <img v-if="Project?.photos != undefined" :src="'https://pp.ftf.tsu.ru/' + Project.photos[0]?.link"
                class="w-full object-cover h-[200px] relative flex items-center overflow-hidden rounded-2xl  bg-center p-0" /> -->
            <carousel />
            <swiper class="swiper mx-auto z-0" :modules="modules" :space-between="30" :slides-per-view="1"
                :pagination="{ clickable: true }">
                <swiper-slide v-for="el in Project.photos" :key="el.id" class="slide">
                    <div class="bg-black z-0">
                        <img :src="'https://pp.ftf.tsu.ru/' + el.link" class="object-cover w-full h-[450px] opacity-70"
                            alt="">
                    </div>
                </swiper-slide>
            </swiper>


            <!-- <img v-if="User?.photo !=undefined" alt="..." :src="'https://pp.ftf.tsu.ru/'+User.photo?.link" class="-mt-20 ml-40 shadow-xl rounded-full object-cover h-40 w-40 align-middle border border-4 border-white " data-v-47b4b219=""> -->

            <section class="max-h-[200px] w-10/12 mx-auto z-20" v-if="true">
                <div
                    class="relative flex flex-col flex-auto min-w-0 p-4 mx-6 z-40 -mt-10 overflow-hidden break-words border-0 shadow-xl dark:shadow-soft-dark-xl dark:bg-gray-950 rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
                    <div class="flex w-7/12 -mx-3">
                        <div class="flex-none w-auto max-w-full px-3">
                            <div
                                class="text-base ease-soft-in-out h-16 w-16 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                                <img v-if="Project?.photos != undefined" alt="..."
                                    :src="'https://pp.ftf.tsu.ru/' + Project.photos[(Project.photos.length - 1)].link"
                                    class="w-full h-full object-cover shadow-sm rounded-xl">
                                <img v-else src="../../../assets/img/bruce-mars.jpg" alt="profile_image"
                                    class="w-full h-full object-cover shadow-sm rounded-xl">

                            </div>
                        </div>
                        <div class="flex-none w-auto max-w-full px-2 ">
                            <div class="h-full">
                                <p class=" dark:text-white">{{ Project.name }}</p>
                                <p
                                    class="mb-0 max-h-[48px] overflow-hidden font-semibold leading-normal text-sm dark:text-white dark:opacity-60">
                                    {{ Project.description }}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>


        <div class="w-10/12 mx-auto">
            <div class="grid grid-cols-3 gap-4 mb-4">
                <project-info :Project="Project" />
                <team-list-new class="col-span-2" :UsersConsul="Project.consultant" :UsersMentor="Project.mentor"
                    :UsersMembers="Project.members" />
                </div>
                <div class="grid grid-cols-2 gap-4 mb-4">
                <gallery-new class="col-span-1" :Files="Project.photos" />
                <publication-list class="col-span-1" :Publications="Project.publications" @Deleted="Deleted()" />
            </div>

        </div>



    </div>
</template>

<script>
import PublicationList from '../Blocks/PublicationList.vue'
import ProjectInfo from './Resourse/ProjectInfo.vue'
import TeamListNew from '@/components/Explore/Project/Resourse/TeamListNew.vue'
import PaginationMixin from '@/components/mixins/Pagination'
import GalleryNew from './Resourse/GalleryNew.vue'
import Carousel from '../Blocks/Carousel.vue'
import SwiperMixin from '@/components/mixins/Swiper'

export default {
    mixins: [PaginationMixin, SwiperMixin],
    components: {
        PublicationList, GalleryNew, TeamListNew, ProjectInfo, Carousel

    },
    async mounted() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch("https://pp.ftf.tsu.ru/api/Projects/" + this.$route.params.id, requestOptions)
            .then(response => response.json())
            .then(x => this.Project = x)
            .then(console.log(this.ListProject))
            .catch(error => console.log('error', error));
    },
    methods: {

        async UpdatePublications() {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            await fetch("https://pp.ftf.tsu.ru/api/Publications", requestOptions)
                .then(response => response.json())
                .then(x => this.Project.publications = x)
                .catch(error => console.log('error', error));
        },

        Deleted() {
            this.UpdatePublications()
        }
    },
    data() {
        return {
            Project: Object,
            isShow: false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
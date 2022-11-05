<template>

  
    <div class="">
        
        <section v-if="false"
            class="h-[500px] overflow-hidden bg-[url(https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
            <div class="max-h-[200px] w-10/12 mx-auto" v-if="true">
                <div
                    class="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-10 overflow-hidden break-words border-0 shadow-xl dark:shadow-soft-dark-xl dark:bg-gray-950 rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
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
            </div>
        </section>


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

        <div v-if="true" class="pb-10">
            <!-- <img v-if="Project?.photos != undefined" :src="'https://pp.ftf.tsu.ru/' + Project.photos[0]?.link"
                class="w-full object-cover h-[200px] relative flex items-center overflow-hidden rounded-2xl  bg-center p-0" /> -->
            <carousel :Photos="Project.photos"/>


            <!-- <img v-if="User?.photo !=undefined" alt="..." :src="'https://pp.ftf.tsu.ru/'+User.photo?.link" class="-mt-20 ml-40 shadow-xl rounded-full object-cover h-40 w-40 align-middle border border-4 border-white " data-v-47b4b219=""> -->

            <section class="max-h-[200px] w-10/12 mx-auto" v-if="true">
                <div
                    class="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-10 overflow-hidden break-words border-0 shadow-xl dark:shadow-soft-dark-xl dark:bg-gray-950 rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
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
                <publication-list class="col-span-2" :Publications="Project.publications" @Deleted="Deleted()" />
            </div>
            <gallery-new :Files="Project.photos" />
            <team-list-new :UsersConsul="Project.consultant" :UsersMentor="Project.mentor"
                :UsersMembers="Project.members" />

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




export default {
    mixins: [PaginationMixin],
    components: {
        PublicationList, GalleryNew, TeamListNew, ProjectInfo,Carousel

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
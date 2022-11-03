<template>
    <div class="pt-8">
        <div class="w-full mb-6 shadow-xl">
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

                        <ul class="absolute bottom-0 w-full left-0 flex border-b border-gray-100 mx-auto">
                            <li v-if="this.Project.publications?.length > 0" class="flex-1">
                                <a @click="SelectPage(0)" class="hover:cursor-pointer relative block p-4">
                                    <span v-if="OpenPage == 0"
                                        class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600">
                                    </span>

                                    <div class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>

                                        <span class="ml-3 text-sm font-medium text-gray-900"> Публикации </span>
                                    </div>
                                </a>
                            </li>

                            <li v-if="this.Project.members?.length > 0" class="flex-1">
                                <a @click="SelectPage(1)" class="hover:cursor-pointer relative block p-4">
                                    <span v-if="OpenPage == 1"
                                        class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600">
                                    </span>
                                    <div class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>

                                        <span class="ml-3 text-sm font-medium text-gray-900">Команда </span>
                                    </div>
                                </a>
                            </li>
                            <li v-if="this.Project.photos?.length > 0" class="flex-1">
                                <a @click="SelectPage(2)" class="hover:cursor-pointer relative block p-4">
                                    <span v-if="OpenPage == 2"
                                        class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600">
                                    </span>

                                    <div class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>

                                        <span class="ml-3 text-sm font-medium text-gray-900"> Медиа </span>
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="hidden lg:block lg:w-1/2" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
                    <div>
                        <button lass="btn">
                            Далее
                        </button>
                    </div>
                    <div v-if="this.Project.photos?.length > 0" class="h-full h-full object-cover">
                        <img :src="'https://pp.ftf.tsu.ru/' + this.Project.photos[0].link" class="h-full bg-black" />

                    </div>
                    <div v-else class="h-full object-cover"
                        style="background-image: url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)">
                        <div class="h-full bg-black opacity-25"></div>
                    </div>
                </div>

            </div>
        </div>
        <publication-list v-if="OpenPage == 0" :Publications="Project.publications" @Deleted="Deleted()">

        </publication-list>
        <team-list v-if="this.isNewDesign && OpenPage == 1" :UsersConsul="Project.members" :UsersMentor="Project.members"
            :UsersMembers="Project.members"></team-list>

            <div class="flex">
                <team-list-new v-if="!this.isNewDesign && OpenPage == 1" :UsersConsul="Project.members" :UsersMentor="Project.members"
                    :UsersMembers="Project.members"></team-list-new>
                <gallery-new v-if="OpenPage == 1" :Files="Project.photos" />

            </div>


        <gallery v-if="OpenPage == 2" :Files="Project.photos" />


    </div>
</template>

<script>
import PublicationList from '@/components/Resourse/blocks/PublicationList.vue'
import TeamList from '@/components/Resourse/blocks/TeamList.vue'
import TeamListNew from '@/components/Resourse/blocks/TeamListNew.vue'
import PaginationMixin from '@/components/mixins/Pagination'
import Gallery from './Resourse/Gallery.vue'
import GalleryNew from './Resourse/GalleryNew.vue'

export default {
    mixins: [PaginationMixin],
    components: {
        PublicationList, TeamList, Gallery,GalleryNew, TeamListNew
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
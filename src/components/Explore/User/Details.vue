<template>



    <div class="">
        <!-- <div class="">
            <img v-if="true" src="https://mdbootstrap.com/img/new/slides/041.jpg"
                class="object-cover h-[200px] lg:h-[300px] w-screen" alt="..." />
            <img v-else :src="'https://pp.ftf.tsu.ru/' + this.User.memberProjects[0].photo[0].link"
                class="cover max-h-[600px] w-screen" alt="..." />
        </div> -->
        <img  src="@/assets/img/curved-images/curved14.jpg" class="w-full  h-[200px] relative flex items-center overflow-hidden rounded-2xl  bg-center p-0"/>
                                            <!-- <img v-if="User?.photo !=undefined" alt="..." :src="'https://pp.ftf.tsu.ru/'+User.photo?.link" class="-mt-20 ml-40 shadow-xl rounded-full object-cover h-40 w-40 align-middle border border-4 border-white " data-v-47b4b219=""> -->

        <section class="max-h-[200px] w-10/12 mx-auto mb-10" v-if="true">
            <div
                class="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-xl dark:shadow-soft-dark-xl dark:bg-gray-950 rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
                <div class="flex flex-wrap -mx-3">
                    <div class="flex-none w-auto max-w-full px-3">
                        <div
                            class="text-base ease-soft-in-out h-16 w-16 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                            <img  v-if="User?.photo !=undefined" alt="..." :src="'https://pp.ftf.tsu.ru/'+User.photo?.link" 
                                class="w-full shadow-soft-sm rounded-xl">
                            <img v-else src="../../../assets/img/bruce-mars.jpg" alt="profile_image"
                                class="w-full shadow-soft-sm rounded-xl">

                        </div>
                    </div>
                    <div class="flex-none w-auto max-w-full px-3 my-auto">
                        <div class="h-full">
                            <h5 class="mb-1 dark:text-white">{{User.firstName +' ' + User.lastName + ' ' + User.middleName}}</h5>
                            <p class="mb-0 font-semibold leading-normal text-sm dark:text-white dark:opacity-60">
                                {{User.role?.name}}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section v-if="false" class="relative">

            <div class=" mx-auto">
                <div
                    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-t-lg -mt-64">
                    <div class="continer mx-auto">
                        <div class="px-6">
                            <div class="lg:flex flex-wrap justify-end mt-6">
                                <div class="lg:flex w-full justify-between  px-4 lg:order-3 lg:self-center">
                                    <div class="lg:flex lg:text-left text-center">
                                        <div class=" ">
                                            <!-- <img v-if="User?.photo ==undefined" alt="..." src="@/components/Resourse/img/user.png" class="-mt-20 ml-40 shadow-xl rounded-full h-40 align-middle border border-4 border-white " data-v-47b4b219=""> -->
                                            <div
                                                class="w-40 h-40 bg-indigo-200 mx-auto rounded-full shadow-2xl shadow-indigo-200 -mt-20 lg:ml-48  flex items-center justify-center text-indigo-500">
                                                <img v-if="User.photo != null"
                                                    class="w-40 h-40  object-cover rounded-full border-2 border-indigo-300"
                                                    :src="'https://pp.ftf.tsu.ru/' + User.photo.link">
                                                <div class="text-5xl" v-if="User.photo == null">
                                                    {{ Initial }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ml-5">
                                            <h3
                                                class=" justify-center text-xl font-semibold leading-normal text-blueGray-700">
                                                {{ User.firstName + " " + User.lastName + " " + User.middleName }}
                                            </h3>
                                            <div v-if="User.telegram != ''"
                                                class="justify-center  text-blueGray-700 mb-2">
                                                @{{ User.telegram }}
                                            </div>
                                            <div v-else-if="User.email != ''"
                                                class="justify-center  text-blueGray-700 mb-2">
                                                {{ User.email }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center lg:mr-40">
                                        <a class="inline-block rounded border border-gray border-2 px-12 py-3 text-sm font-medium text-gray-600 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                                            href="/download">
                                            Связаться
                                        </a>
                                    </div>
                                </div>

                            </div>

                            <div class="mt-10 py-10 border-t border-blueGray-200 text-justify">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full lg:w-9/12 px-4">
                                        <p :class="{ 'max-h-[150px]': !isShow }"
                                            class="overflow-hidden  mb-4 text-lg  leading-relaxed text-blueGray-700">
                                            {{ User.skills }}
                                        </p>
                                        <div v-if="User.skills?.length > 800" class="font-normal text-pink-500">
                                            <a v-if="!isShow" @click="isShow = !isShow;"
                                                class="hover:cursor-pointer ">Показать</a>
                                            <a v-if="isShow" @click="isShow = !isShow;"
                                                class="hover:cursor-pointer ">Скрыть</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ul class=" flex border-b border-gray-100 mx-auto">
                                <li class="flex-1">
                                    <a @click="SelectPage(0)" class="hover:cursor-pointer relative block p-4">
                                        <span v-if="OpenPage == 0"
                                            class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>

                                        <div class="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 flex-shrink-0 text-gray-500" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                            </svg>

                                            <span class="ml-3 text-sm font-medium text-gray-900"> Проекты </span>
                                        </div>
                                    </a>
                                </li>

                                <li class="flex-1">
                                    <a @click="SelectPage(1)" class="hover:cursor-pointer relative block p-4">
                                        <span v-if="OpenPage == 1"
                                            class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>
                                        <div class="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 flex-shrink-0 text-gray-500" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                            </svg>

                                            <span class="ml-3 text-sm font-medium text-gray-900"> Публикации </span>
                                        </div>
                                    </a>
                                </li>


                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </section>

        <div class="w-10/12 mx-auto">
            <div class="grid grid-cols-3 gap-4 mb-4">
                <user-info :User="this.User" />
                <publication-list class="col-span-2" @Deleted="Deleted()" :Publications="User.publications">>
                </publication-list>
            </div>
            <project-list-new :projects="User.memberProjects" />

        </div>

    </div>
</template>

<script>
import ProjectListNew from './Resourse/ProjectListNew.vue'
import UserInfo from './Resourse/UserInfo.vue'
import PublicationList from '../Blocks/PublicationList.vue'
import PaginationMixin from '@/components/mixins/Pagination'
export default {
    mixins: [PaginationMixin],
    components: {
        PublicationList, ProjectListNew, UserInfo
    },
    data() {
        return {
            User: Object,
            Initial: '',
            isShow: false
        }
    },
    async mounted() {
        console.log(this.User)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch("https://pp.ftf.tsu.ru/api/Users/" + this.$route.params.id, requestOptions)
            .then(response => response.json())
            .then((x) => {
                this.User = x
                this.Initial = this.User.firstName[0] + this.User.lastName[0]
            })
            .catch(error => console.log('error', error));
    },
    methods: {
        OpenText() {
            this.isShow = !this.isShow;

        },
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
    }

}
</script>

<style scoped>

</style>
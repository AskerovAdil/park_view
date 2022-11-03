<template>
        <div class="container mx-auto pb-8 bg-white rounded-lg shadow">
            <div class="mx-auto text-center py-6">
                    <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
                        Команда
                    </h2>
            </div>
            <ul class=" mb-8 grid md:grid-cols-3 justify-center border-b border-gray-100 ">
                <li class="flex-1">
                    <a @click="SelectPage(0)" class="hover:cursor-pointer relative block p-4" >
                        <span v-if="OpenPage==0"
                            class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600">
                        </span>  

                    <div class="flex items-center justify-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 flex-shrink-0 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                        </svg>

                        <span class="ml-3 text-sm font-medium text-gray-900"> Наставники </span>
                    </div>
                    </a>
                </li>

                <li class="flex-1">
                    <a  class="hover:cursor-pointer relative block p-4" @click="SelectPage(1)">
                    <div class="flex items-center justify-center">
                        <span v-if="OpenPage==1"
                            class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600">
                        </span>  
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 flex-shrink-0 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                        </svg>

                        <span class="ml-3 text-sm font-medium text-gray-900"> Консультанты </span>
                    </div>
                    </a>
                </li>

                <li class="flex-1">
                    <a class="hover:cursor-pointer relative block p-4" @click="SelectPage(2)">
                    <div class="flex items-center justify-center">
                        <span v-if="OpenPage==2"
                            class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600">
                        </span>                        
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 flex-shrink-0 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                        </svg>

                        <span class="ml-3 text-sm font-medium text-gray-900"> Студенты </span>
                    </div>
                    </a>
                </li>

            </ul>
            <div >
                <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 mx-10" v-if="OpenPage==1">
                    <team-card 
                        :class="'col-3'"
                        v-for="el in UsersConsul" :key="el.id"
                        :User="el">
                        Консультант
                    </team-card>
                </div>
                <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 mx-10" v-if="OpenPage==0">
                    <team-card 
                        :class="'col-3'"
                        v-for="el in UsersMentor" :key="el.id"
                        :User="el">
                        Наставник
                    </team-card>
                </div>
                <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 mx-10" v-if="OpenPage==2">
                    <team-card 
                        :class="'col-3'"
                        v-for="el in UsersMembers" :key="el.id"
                        :User="el">
                        Учатсник
                    </team-card>
                </div>

            </div>
        </div>
</template>

<script>
import PaginationMixin from '@/components/mixins/Pagination'
import TeamCard from './TeamCard.vue'
    export default {
        mixins:[PaginationMixin],
        components:{
            TeamCard,
        },
        props:{
            UsersMembers:[],
            UsersConsul:[],
            UsersMentor:[],
        }
    }
</script>

<style lang="scss" scoped>

</style>
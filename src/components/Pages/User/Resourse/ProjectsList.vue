<template>
        <section class="container mx-auto bg-white rounded-lg shadow">
            <div class="mx-auto text-center py-6">
                    <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
                        Проекты
                    </h2>
            </div>
            <header class=" space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">

                <form class="group relative">
                    <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                    <input class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Поиск проектов...">
                </form>
            </header>



            <ul class="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
                <li v-for="el in projects" :key="el.id">
                    <div class="">
                        <project-card
                            :Project="el"
                        ></project-card>
                    </div>
                </li>
                <li class="flex">


                        
                    <router-link to="/Projects/Create" class="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
                        <svg class="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                        </svg>
                        Создать проект
                    </router-link>
                </li>
            </ul>
        </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
    export default {
        components:{
            ProjectCard
        },
        props:{
            projects:[]
        },
        data(){
            return{
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
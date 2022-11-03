<template>
        <div class="container mx-auto pb-8 bg-white rounded-lg shadow">
            <div class="mx-auto text-center py-6">
                    <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
                        Публикации
                    </h2>
            </div>
            <header class="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
                <form class="group relative">
                    <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                    <input v-model="SearchProject" class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Поиск проектов...">
                </form>
            </header>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-5" >
                <div v-for="el in this.Publications" :key="el.id"
                    v-show="el.name?.toLowerCase().includes(SearchProject?.toLowerCase())"
                >
                    <publication-card
                        :Publication="el"
                        @Deleted="Deleted()"
                        >
                    </publication-card>
                </div>
                <li class="flex">
                    <router-link :to="{path: '/Publications/Create' }" class="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
                        <svg class="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                        </svg>
                        Создать публикацию
                    </router-link>
                </li>
            </div>
        </div>
</template>

<script>
import PublicationCard from '@/components/Resourse/blocks/PublicationCard.vue'

    export default {
        data(){
            return{
                SearchProject:""
            }
        },
        components:{
            PublicationCard
        },
        props:{
            Publications:[]
        },
        methods:{

            Deleted(){
                this.$emit('Deleted')
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>
<template class="">
    <div class="mx-auto text-center py-36">

        <div class="mb-">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
                Новости
            </h2>
            <p class="max-w-6xl mx-auto mt-4 text-gring-offset-warm-gray-500">
                Расположение научно-исследовательских станций ТГУ позволило ученым университета создать на их основании так называемый Западно-сибирский мегапрофиль для ландшафтно-экологических исследований (2500 километров от гор Южной Сибири до глубокой Арктики). Мониторинг на протяжении всего мегапрофиля ведется круглогодично.
            </p>
        </div>
        <button-create :link="'/News/Create'">Создать</button-create>
        <header class="container mx-auto w-6/12">
                <form class="group relative">
                    <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                    <input v-model="SearchProject" class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Поиск проектов...">
                </form>
        </header>
        <div v-for="el in News" :key="el.Id"
            v-show="el.name?.toLowerCase().includes(SearchProject?.toLowerCase())" >
            <news-card class="mt-4" :News="el" @Deleted="Deleted()"></news-card>
        </div>
    </div>
</template>

<script>
import NewsCard from './Resourse/NewsCard.vue'
import ButtonCreate from '@/components/Resourse/StylesObj/ButtonCreate.vue'

    export default {
        components:{
            NewsCard,ButtonCreate
        },
        async mounted(){
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            await fetch("https://pp.ftf.tsu.ru/api/News", requestOptions)
                .then(response => response.json())
                .then(x=>this.News = x)
                .then(console.log(this.ListProject))
                .catch(error => console.log('error', error));
        },
        data(){
            return{
                News:[],
                SearchProject:''
            }
        },
        methods:{






            async UpdateNews(){
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                await fetch("https://pp.ftf.tsu.ru/api/News", requestOptions)
                    .then(response => response.json())
                    .then(x=>this.News = x)
                    .then(console.log(this.ListProject))
                    .catch(error => console.log('error', error));
            },
            Deleted(){
                this.UpdateNews()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
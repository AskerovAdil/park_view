<template class="container">
        <div class=" mx-auto text-center pt-36">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
                Проекты
            </h2>
            <p class="max-w-6xl mx-auto mt-4 text-gring-offset-warm-gray-500">
                Расположение научно-исследовательских станций ТГУ позволило ученым университета создать на их основании так называемый Западно-сибирский мегапрофиль для ландшафтно-экологических исследований (2500 километров от гор Южной Сибири до глубокой Арктики). Мониторинг на протяжении всего мегапрофиля ведется круглогодично.
            </p>
        </div>

        <button-create :link="'/Project/Create'">Создать</button-create>

        <header class="container mx-auto w-6/12">
                <form class="group relative">
                    <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                    <input v-model="SearchProject" class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Поиск проектов...">
                </form>
        </header>



        <div class="container mx-auto py-5 space-y-4 pb-20">
            <div class="grid grid-cols-3 mx-auto gap-4">
                <div v-for="el in ListProject" :key="el.Id"
                        v-show="el.name?.toLowerCase().includes(SearchProject?.toLowerCase() 
                    )"
                >
                        <project-card-new
                            :Project="el"
                            @Deleted="Deleted()"
    
                        />
                </div>
            </div>
        </div>

</template>

<script>
    import ProjectCardNew from './Resourse/ProjectCardNew.vue'
    import ButtonCreate from '@/components/Resourse/StylesObj/ButtonCreate.vue'
    export default {
        components:{
            ButtonCreate,ProjectCardNew
        },
        data(){
            return{
                ListProject:[1,3],
                SearchProject:''
            }
        },
        async mounted(){
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer "+localStorage.token);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            await fetch("https://pp.ftf.tsu.ru/api/Projects", requestOptions)
                .then(response => response.json())
                .then(x=>this.ListProject = x)
                .catch(error => console.log('error', error));
        },
        methods:{
            async UpdateProjects(){
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                await fetch("https://pp.ftf.tsu.ru/api/Projects", requestOptions)
                    .then(response => response.json())
                    .then(x=>this.ListProject = x)
                    .then(console.log(this.ListProject))
                    .catch(error => console.log('error', error));
            },
            Deleted(){
                this.UpdateProjects()
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>
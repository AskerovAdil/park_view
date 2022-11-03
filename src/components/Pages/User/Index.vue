<template class="container">
    <div class="mx-auto text-center py-36 ">
        <div>
            <h2 class=" text-4xl font-bold tracking-tight sm:text-5xl">
                Учатсники
            </h2>
            <p class="max-w-6xl mx-auto mt-4 text-gring-offset-warm-gray-500">
                Расположение научно-исследовательских станций ТГУ позволило ученым университета создать на их основании так называемый Западно-сибирский мегапрофиль для ландшафтно-экологических исследований (2500 километров от гор Южной Сибири до глубокой Арктики). Мониторинг на протяжении всего мегапрофиля ведется круглогодично.
            </p>
        </div>

        <div class="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-12">
            <div class="mt-20 w-100" v-for="el in this.Users" :key="el.Id">
                <users-card 
                    :User="el"
                    @Deleted="Deleted()"
                >
                </users-card>
            </div>
        </div>


    </div>
</template>

<script>
    import UsersCard from './Resourse/UsersCard.vue'    

    export default {
        components:{
            UsersCard,
        },
        data(){
            return{
                Users:[],
            }
        },
        async mounted(){
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            await fetch("https://pp.ftf.tsu.ru/api/Users", requestOptions)
                .then(response =>this.Users= response.json())
                .then(x=>this.Users = x)
                .catch(error => console.log('error', error));
                console.log(this.Users)
        },
        methods:{
            async UpdateUsers(){
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                await fetch("https://pp.ftf.tsu.ru/api/Users", requestOptions)
                    .then(response => response.json())
                    .then(x=>this.Users = x)
                    .catch(error => console.log('error', error));
            },
            Deleted(){
                this.UpdateUsers()
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>
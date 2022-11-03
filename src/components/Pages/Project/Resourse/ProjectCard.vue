<template>




    <div
        class="relative shadow-lg rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">

        <div
            class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
            <!-- <div class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom" v-bind:style="{ 'background-image': 'url(https://pp.ftf.tsu.ru/'+ this.Photos[0].link + ')' }" style="background-blend-mode: multiply;"></div> -->
            <img v-if="this.Photos?.length > 0" class="w-full" :src="'https://pp.ftf.tsu.ru/' + this.Photos[0].link"
                alt="">
            <div
                class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">{{ this.Name }}</h3>
            </div>
            <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
                viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
        </div>

        <div class="relative z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
            <div class="absolute top-2 right-4 md:-right-10">
                <btn-edit-delete :id="Id" :MethodName="'Projects'" :Name="Name" @Deleted="Deleted()">
                </btn-edit-delete>
            </div>
            <div
                class=" overflow-hidden p-8 w-full md:pr-18 md:pl-14 md:py-6 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                <div class="h-24 md:h-32 lg:h-32 xl:h-32 overflow-hidden">
                    <h3 class="hidden md:block font-bold text-2xl text-gray-700">{{ this.Name }}</h3>
                    <p class="text-gray-600 text-justify">
                        {{ Description }}
                    </p>
                </div>

                <div v-if="Users?.length > 0" class="mt-4 ">
                    <div class="text-gray-500 font-light">
                        <div class="grid grid-cols-3 text-start order-last md:order-first ">
                            <a href="/Explore/StationV/Details?id=@item.Id#MeteoBlock"
                                class="hover:scale-105 hover:text-indigo-500 hover:cursor-pointer rounded-lg transition">
                                <p class="font-bold ">Участники:</p>
                                <team-circular :Users="this.Users"></team-circular>
                            </a>

                        </div>
                    </div>
                </div>
                <router-link :to="{ path: '/Project/Details/' + Id }"
                    class="flex items-baseline mt-3 text-blue-600 hover:text-blue-900  focus:text-blue-900"
                    href="/Explore/StationV/Details?id=@item.Id">
                    <span>На страницу проекта</span>
                    <span class="text-xs ml-1">&#x279c;</span>
                </router-link>
            </div>
        </div>

    </div>










</template>

<script>
import TeamCircular from '@/components/Resourse/StylesObj/TeamCircular.vue'
import BtnEditDelete from '@/components/Resourse/blocks/BtnEditDelete.vue'

export default {
    components: {
        TeamCircular, BtnEditDelete
    },
    props: {

        Id: {
            type: Number,
            required: true
        },

        Name: {
            type: String,
            default: 'Без названия'
        },
        Description: {
            type: String,
            default: 'Без названия'
        },
        Photos: [],
        Users: []
    },
    methods: {
        Deleted() {
            this.$emit('Deleted')
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
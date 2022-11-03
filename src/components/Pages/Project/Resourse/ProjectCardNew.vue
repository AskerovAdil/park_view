<template>
    <div class="w-full  mb-6   xl:mb-0 ">
        <div
            class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
            <div class="relative ">
                <a class="block  m-2 shadow-4xl rounded-2xl">
                    <img v-if="this.Project.photos?.length > 0" :src="'https://pp.ftf.tsu.ru/' + this.Project.photos[0].link"
                        alt="img-blur-shadow" class="w-full h-[250px] object-cover overflow-hidden shadow-2xl rounded-2xl " />
                    <img v-else src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/home-decor-1.jpg"
                        alt="img-blur-shadow" class="max-w-full shadow-2xl rounded-2xl" />
                </a>
            </div>
            <div class="flex-auto p-6 pb-4">
                <p
                    class="relative z-10  h-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                    {{this.Project.name}}</p>

                <p class="mb-6 leading-normal text-sm h-24 md:h-32 lg:h-32 xl:h-32 overflow-hidden">{{this.Project.description}}</p>
                <div class="flex items-center justify-between">
                    <router-link :to="{ path: '/Project/Details/' + Project.id }" 
                        class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase transition-all border border-solid rounded-lg cursor-pointer text-xs hover:scale-105 border-fuchsia-500 text-fuchsia-500  hover:opacity-75">
                       Просмотр
                    </router-link>


                    <div class="my-2 ">
                        <div
                            class="relative z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                            <div class="absolute top-2 right-4 md:-right-10">
                                <btn-edit-delete :id="Id" :MethodName="'Projects'" :Name="Name" @Deleted="Deleted()">
                                </btn-edit-delete>
                            </div>
                                <div v-if="Project.members?.length > 0" class=" ">
                                    <team-circular :Users="this.Project.members"></team-circular>
                                </div>
                        </div>
                    </div>
                </div>
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
        Project: Object,

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
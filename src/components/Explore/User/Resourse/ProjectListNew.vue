<template>
    <div class="pb-10">
        <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-xl rounded-2xl">
            <div class="p-4 pb-0 mb-0 rounded-t-2xl">
                <h6 class="mb-1 ">Проекты</h6>
            </div>
            <div class="flex-auto p-4">
                <div class="grid grid-cols-4 gap-2 justify-between overflow-hidden" :class="{'h-[545px]':!isShow}"
                >
                    <div class="w-full px-3 mb-6 xl:mb-0">
                        <div
                            class="relative hover:shadow-lg hover:text-black text-slate-400 border-slate-300 transition flex flex-col h-full min-w-0 break-words bg-transparent border border-solid shadow-none  rounded-2xl  bg-clip-border ">
                            <div class="flex flex-col justify-center flex-auto p-6 text-center">
                                <a href="javascript:;">
                                    <i class="mb-4 fa fa-plus" aria-hidden="true"></i>
                                    <h5 class="">Добавить проект</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class=" pr-2" v-for="el in projects" :key="el.id">
                            <project-card-new :Project="el" />
                    </div>
                    
                </div>
                <div v-if="projects?.length >= 4"
                    class="flex flex-col text-center pt-5 pl-2 pb-2 font-normal text-pink-500">
                    <a v-if="!isShow" @click="isShow = !isShow;" class="text-sm hover:cursor-pointer ">Развернуть
                    </a>
                    <a v-if="isShow" @click="isShow = !isShow;" class="text-sm hover:cursor-pointer ">Свернуть</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectCardNew from '../../Project/Resourse/ProjectCardNew.vue';
export default {
    components: {
        ProjectCardNew
    },
    props: {
        projects: []
    },
    data(){
        return{
            isShow: false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
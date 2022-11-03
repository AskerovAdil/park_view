<template>
    <div class=" w-full max-w-full  lg-max:mt-6">
        <div
            class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl ">
            <div class="p-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                <div class="flex flex-wrap -mx-3">
                    <div class="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                        <h6 class="mb-0 dark:text-white">Profile Information</h6>
                    </div>
                    <div class="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
                        <a href="javascript:;" data-target="tooltip_trigger">
                            <i class="leading-normal fas fa-user-edit text-sm text-slate-400 dark:text-white dark:opacity-80"
                                aria-hidden="true"></i>
                        </a>
                        <div class="px-2 py-1 text-center text-white bg-black rounded-lg text-sm hidden" id="tooltip"
                            style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(1714.67px, -857.333px);"
                            data-popper-placement="top">
                            Edit Profile
                            <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow=""
                                style="position: absolute; left: 0px; transform: translate(0px, 0px);"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-auto p-4  ">
                <div v-for="el in Publications" :key="el.id">
                    <publication-card :Publication="el"/>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import PublicationCard from './PublicationCard.vue'

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
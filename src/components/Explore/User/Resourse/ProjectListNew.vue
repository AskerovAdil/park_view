<template>
    <div class="">
        <div
            class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-xl rounded-2xl">
            <div class="p-4 pb-0 mb-0 rounded-t-2xl">
                <h6 class="mb-1 dark:text-white">Проекты</h6>
            </div>
            <div class="flex-auto p-4">
                <div class="flex flex-wrap justify-between">
                    <div class="w-3/12 pr-2" v-for="el in projects" :key="el.id">
                        <project-card-new :Project="el" />
                    </div>
                    <div class="w-3/12  px-3 mb-6 md:w-6/12 xl:mb-0 xl:w-3/12">
                        <div
                            class="relative flex flex-col h-full min-w-0 break-words bg-transparent border border-solid shadow-none dark:shadow-soft-dark-xl rounded-2xl border-slate-100 bg-clip-border dark:border-slate-700">
                            <div class="flex flex-col justify-center flex-auto p-6 text-center">
                                <a href="javascript:;">
                                    <i class="mb-4 fa fa-plus text-slate-400 dark:text-white dark:opacity-80"
                                        aria-hidden="true"></i>
                                    <h5 class="text-slate-400 dark:text-white dark:opacity-80">Добавить проект</h5>
                                </a>
                            </div>
                        </div>
                    </div>

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
}
</script>

<style lang="scss" scoped>

</style>
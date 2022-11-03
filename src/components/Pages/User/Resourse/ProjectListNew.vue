<template>
    <div class="w-10/12 mx-auto">
        <div
            class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
            <div class="p-4 pb-0 mb-0 rounded-t-2xl">
                <h6 class="mb-1 dark:text-white">Проекты</h6>
                <p class="leading-normal text-sm dark:text-white dark:opacity-80">Architects design houses</p>
            </div>
            <div class="flex-auto p-4">
                <div class="flex flex-wrap gap-4 justify-center">
                    <div class="w-3/12" v-for="el in projects" :key="el.id">
                        <project-card-new :Project="el" />
                    </div>
                    <div class="w-3/12  px-3 mb-6 md:w-6/12 xl:mb-0 xl:w-2/12">
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
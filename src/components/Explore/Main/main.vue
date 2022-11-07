<template>
    <section class="bg-black shadow-2xl h-[700px] overflow-hidden rounded-b-3xl">
        <img class="hbg-cover bg-center bg-no-repeat rounded-b-3xl overflow-hidden" src="@/assets/img/main.png" alt="">
        <div class="absolute  top-20 p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="max-w-lg text-center sm:text-left">
                <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo!
                </h2>

                <p class="hidden max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
                    officia corporis quasi doloribus iure architecto quae voluptatum beatae
                    excepturi dolores.
                </p>

                <div class="mt-4 sm:mt-8">
                    <a href="#"
                        class="inline-flex items-center rounded-full bg-indigo-700 px-8 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none focus:ring">
                        <span class="text-sm font-medium"> Создать проект </span>

                        <svg class="ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>


    </section>
    <project-list />
    <news-list/>
    <users-list />
    <feed-back class="mt-10" />


    Путь Пользователя
    Примеры проектов
    Учатсники

    Ближайшие мероприятия
    Новости


    <p></p>

    Добавить слайдер, (возможно, vue slick)
    Представление на главной, ближайшие мероприятия


    <footer class="py-12">
        <div class="container mx-auto">
            <div class="flex flex-wrap -mx-3">
                <div class="flex-shrink-0 w-full max-w-full mx-auto mb-6 text-center lg:flex-0 lg:w-8/12">
                    <a href="javascript:;" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Проекты
                    </a>
                    <a href="javascript:;" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Учатсники
                    </a>
                    <a href="javascript:;" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Новости
                        <a href="javascript:;" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">
                            Публикации </a>
                        <a href="javascript:;" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> О нас
                        </a>
                    </a>
                </div>
                <div class="flex-shrink-0 w-full max-w-full mx-auto mt-2 mb-6 text-center lg:flex-0 lg:w-8/12">
                    <a href="javascript:;" target="_blank" class="mr-6 text-slate-400">
                        <span class="text-lg fab fa-dribbble" aria-hidden="true"></span>
                    </a>
                    <a href="javascript:;" target="_blank" class="mr-6 text-slate-400">
                        <span class="text-lg fab fa-twitter" aria-hidden="true"></span>
                    </a>
                    <a href="javascript:;" target="_blank" class="mr-6 text-slate-400">
                        <span class="text-lg fab fa-instagram" aria-hidden="true"></span>
                    </a>
                    <a href="javascript:;" target="_blank" class="mr-6 text-slate-400">
                        <span class="text-lg fab fa-pinterest" aria-hidden="true"></span>
                    </a>
                    <a href="javascript:;" target="_blank" class="mr-6 text-slate-400">
                        <span class="text-lg fab fa-github" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3">
                <div class="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
                    <p class="mb-0 text-slate-400">
                        Copyright © 2022
                        Soft by Creative Tim.
                    </p>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>
import UsersList from './Resourse/UsersList.vue';
import NewsList from './Resourse/NewsList.vue';
import ProjectList from './Resourse/ProjectList.vue';
import FeedBack from './Resourse/FeedBack.vue';


export default {
    components: {
        UsersList, FeedBack, NewsList,ProjectList
    },
    data() {
        return {
            Users: [],
        }
    },

}
</script>

<style lang="scss" scoped>

</style>
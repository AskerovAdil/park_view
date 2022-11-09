<template>
    <div class=" mr-0 max-w-full lg-max:mt-6">
        <div
            class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 dark:bg-gray-950 shadow-xl rounded-2xl bg-clip-border">
            <div class="p-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                <h6 class="mb-0 dark:text-white">Команда</h6>
            </div>
            <div>
                
            </div>

            <div class="flex-auto p-4">
                <ul v-for="el in UsersMembers" :key="el.id"
                    class="flex flex-col pl-0 mb-0 rounded-lg">
                    <li class="hover:shadow-lg pl-2 rounded-lg relative flex items-center px-0 py-2 mb-2 border-0 rounded-t-lg text-inherit">
                        <div
                            class="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                            <img v-if="el.photo!=null" :src="'https://pp.ftf.tsu.ru/'+el.photo.link" alt="kal"
                                class="h-12 w-12 object-cover shadow-soft-2xl rounded-xl">
                            <img v-else src="@/assets/img/kal-visuals-square.jpg" alt="kal"
                                class="w-full shadow-soft-2xl rounded-xl">
                        </div>
                        <div class=" w-9/12  flex flex-col items-start justify-center">
                            <h6 class="mb-0 leading-normal text-sm dark:text-white">{{el.firstName + ' '+el.lastName}}</h6>
                            <p class="h-8 overflow-hidden mb-0 leading-tight text-xs dark:text-white dark:opacity-60">{{el.skills}}</p>
                        </div>
                        <a class="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                            href="javascript:;">Перейти</a>
                    </li>
                </ul>
                <ul v-for="el in UsersConsul" :key="el.id"
                    class="flex flex-col pl-0 mb-0 rounded-lg">
                    <li class="relative hover:shadow-lg pl-2 rounded-lg flex items-center px-0 py-2 mb-2 border-0 rounded-t-lg text-inherit">
                        <div
                            class="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                            <img v-if="el.photo!=null" :src="'https://pp.ftf.tsu.ru/'+el.photo.link" alt="kal"
                                class="h-12 w-12 object-cover shadow-soft-2xl rounded-xl">
                            <img v-else src="@/assets/img/kal-visuals-square.jpg" alt="kal"
                                class="w-full shadow-soft-2xl rounded-xl">
                        </div>
                        <div class=" w-9/12  flex flex-col items-start justify-center">
                            <h6 class="mb-0 leading-normal text-sm dark:text-white">{{el.firstName + ' '+el.lastName}}</h6>
                            <p class="h-8 overflow-hidden mb-0 leading-tight text-xs dark:text-white dark:opacity-60">{{el.skills}}</p>
                        </div>
                        <a class="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                            href="javascript:;">Перейти</a>
                    </li>
                </ul>
                <ul v-for="el in UsersMentor" :key="el.id"
                    class="flex flex-col pl-0 mb-0 rounded-lg">
                    <li class="relative hover:shadow-lg pl-2 rounded-lg flex items-center px-0 py-2 mb-2 border-0 rounded-t-lg text-inherit">
                        <div
                            class="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                            <img v-if="el.photo!=null" :src="'https://pp.ftf.tsu.ru/'+el.photo.link" alt="kal"
                                class="h-12 w-12 object-cover shadow-soft-2xl rounded-xl">
                            <img v-else src="@/assets/img/kal-visuals-square.jpg" alt="kal"
                                class="w-full shadow-soft-2xl rounded-xl">
                        </div>
                        <div class=" w-9/12  flex flex-col items-start justify-center align-center flex">
                            <h6 class="mb-0 leading-normal text-sm dark:text-white">{{el.firstName + ' '+el.lastName}}</h6>
                            <p class="h-8 overflow-hidden mb-0 leading-tight text-xs dark:text-white dark:opacity-60">{{el.skills}}</p>
                        </div>
                        <a class="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                            href="javascript:;">Перейти</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        UsersMembers:[],
            UsersConsul:[],
            UsersMentor:[],
    }
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <div class=" mr-0 max-w-full lg-max:mt-6">
        <div
            class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
            <div class="p-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                <h6 class="mb-0 ">Команда</h6>
            </div>
            <div>

            </div>
            <div class="flex-auto p-2 ">
                <p :class="{ 'max-h-[380px]': !isShow }"
                    class=" overflow-hidden">

                <ul v-for="el in UsersMembers" :key="el.id" class="flex flex-col pl-0 mb-0 rounded-lg">
                    <li
                        class="hover:shadow-lg pl-2 rounded-lg relative flex items-center px-0 py-2 mb-2 border-0 rounded-t-lg text-inherit">
                        <div
                            class="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                            <img v-if="el.photo != null" :src="'https://pp.ftf.tsu.ru/' + el.photo.link" alt="kal"
                                class="h-12 w-12 object-cover shadow-soft-2xl rounded-xl">
                            <img v-else src="@/assets/img/kal-visuals-square.jpg" alt="kal"
                                class="w-full shadow-soft-2xl rounded-xl">
                        </div>
                        <div class=" w-9/12  flex flex-col items-start justify-center">
                            <h6 class="mb-0 leading-normal text-sm ">{{ el.firstName + ' ' +
                                    el.lastName
                            }}
                            </h6>
                            <p class="h-8 overflow-hidden mb-0 leading-tight text-xs">
                                {{ el.skills }}</p>
                        </div>
                        <router-link :to="{ path: '/Users/Details/' + el.id }"
                            class="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                            href="javascript:;">Перейти</router-link>
                    </li>
                </ul>
                <ul v-for="el in UsersConsul" :key="el.id" class="flex flex-col pl-0 mb-0 rounded-lg">
                    <li
                        class="relative hover:shadow-lg pl-2 rounded-lg flex items-center px-0 py-2 mb-2 border-0 rounded-t-lg text-inherit">
                        <div
                            class="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                            <img v-if="el.photo != null" :src="'https://pp.ftf.tsu.ru/' + el.photo.link" alt="kal"
                                class="h-12 w-12 object-cover shadow-soft-2xl rounded-xl">
                            <img v-else src="@/assets/img/kal-visuals-square.jpg" alt="kal"
                                class="w-full shadow-soft-2xl rounded-xl">
                        </div>
                        <div class=" w-9/12  flex flex-col items-start justify-center">
                            <h6 class="mb-0 leading-normal text-sm ">{{ el.firstName + ' ' +
                                    el.lastName
                            }}
                            </h6>
                            <p class="h-8 overflow-hidden mb-0 leading-tight text-xs">
                                {{ el.skills }}</p>
                        </div>
                        <router-link :to="{ path: '/Users/Details/' + el.id }"
                            class="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                            href="javascript:;">Перейти</router-link>
                    </li>
                </ul>
                <ul v-for="el in UsersMentor" :key="el.id" class="flex flex-col pl-0 mb-0 rounded-lg">
                    <li
                        class="relative hover:shadow-lg pl-2 rounded-lg flex items-center px-0 py-2 mb-2 border-0 rounded-t-lg text-inherit">
                        <div
                            class="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                            <img v-if="el.photo != null" :src="'https://pp.ftf.tsu.ru/' + el.photo.link" alt="kal"
                                class="h-12 w-12 object-cover shadow-soft-2xl rounded-xl">
                            <img v-else src="@/assets/img/kal-visuals-square.jpg" alt="kal"
                                class="w-full shadow-soft-2xl rounded-xl">
                        </div>
                        <div class=" w-9/12  flex flex-col items-start justify-center align-center flex">
                            <h6 class="mb-0 leading-normal text-sm ">{{ el.firstName + ' ' +
                                    el.lastName
                            }}
                            </h6>
                            <p class="h-8 overflow-hidden mb-0 leading-tight text-xs">
                                {{ el.skills }}</p>
                        </div>
                        <router-link :to="{ path: '/Users/Details/' + el.id }"
                            class="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                            href="javascript:;">Перейти</router-link>
                    </li>
                </ul>

                </p>
                <div v-if="UsersConsul?.length + UsersMembers?.length + UsersMentor?.length >= 6"
                    class="flex flex-col pl-2 pb-2 font-normal text-pink-500">
                    <a v-if="!isShow" @click="isShow = !isShow;" class="text-sm hover:cursor-pointer ">Развернуть </a>
                    <a v-if="isShow" @click="isShow = !isShow;" class="text-sm hover:cursor-pointer ">Свернуть</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
            Users: []
        }
    },
    props: {
        UsersMembers: [],
        UsersConsul: [],
        UsersMentor: [],
    },

    methods: {
        UpdateUsers() {
            this.Users = this.UsersMembers
            console.log(this.UsersMembers)
        }
        // UpdateUsers() {
        //     console.log(this.Users)

        //     Array.from(this.UsersMembers).forEach(item=>  
        //             {   
        //                 this.Users.push(item);
        //             }
        //         );


        //     console.log(this.Users)
        //     return this.Users
        //}
    }
}
</script>

<style lang="scss" scoped>

</style>
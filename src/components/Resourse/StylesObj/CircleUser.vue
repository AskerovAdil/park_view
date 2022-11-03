<template>
    <router-link v-if="User?.id !=null" :to="{ path: '/Users/Details/'+User.id}" :data-tip='"На страницу профиля"' class="flex tooltip">
        <div class="flex items-center justify-center rounded-full ring ring-white w-8 h-8 bg-gray-300 font-semibold text-white">
            <img v-if="User.photo!=null" class="w-8 h-8 shadow-2xl shadow-indigo-200 object-cover rounded-full border-1 bg-indigo-200 shadow-2xl " :src="'https://pp.ftf.tsu.ru/'+User.photo.link" alt="">
            <div v-if="User.photo ==null">
                {{User.firstName[0] +User.middleName[0]}}
            </div>
        </div>
        <div class="ml-2 my-auto font-bold">
            <slot >
            </slot>
        </div>
    </router-link>
</template>

<script>
    export default {
        props:{
            User:Object
        }
    }
</script>

<style lang="scss" scoped>

</style>
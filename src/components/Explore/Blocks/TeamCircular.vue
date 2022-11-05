<template>
    <div class="flex z-10 -space-x-2">
        <div v-for="(item,index) in Users" :key="index">
            <router-link :to="{ path: '/Users/Details/'+item.id}" :data-tip='item.firstName + " " + item.lastName' class="hover:z-20 tooltip">
                    <div class="flex items-center justify-center rounded-full ring ring-white w-6 h-6 bg-gray-300 font-semibold text-white">
                        <img v-if="item.photo !=null" class="w-6 h-6 shadow-2xl shadow-indigo-200 object-cover rounded-full bg-indigo-200 shadow-2xl " :src="'https://pp.ftf.tsu.ru/'+item.photo.link" alt="">
                        <div class="text-sm" v-if="item.photo ==null">
                            {{item.firstName[0] +item.middleName[0]}}
                        </div>
                    </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            Users:[]
        }
    }
</script>

<style lang="scss" scoped>

</style>
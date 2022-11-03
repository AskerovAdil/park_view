<template>
    <div class="">
        <router-link :to="{path:'/Project/Details/'+Project.id}"
            :class="{[
                'bg-[url(https://pp.ftf.tsu.ru/' + Project.photos[0]?.link +')]'] : Project.photos[0]?.link!='',
                'bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)]':Project.photos[0]==undefined
                }"
            class=" relative block overflow-hidden rounded-xl  bg-cover bg-center bg-no-repeat"
        >

            <div class="relative bg-black bg-opacity-40 p-8  text-white">
                <h5 class="text-2xl font-bold">{{Project.name}}</h5>

                <p class="h-[150px] overflow-hidden text-sm overflow-hidden mt-5">{{Project.description}}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props:{
            Project:Object
        }
    }
</script>

<style lang="scss" scoped>

</style>
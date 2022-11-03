<template>

<div class=" ">

    <div class="p-8 pb-8 ui container bg-white shadow-xl rounded-lg my-0  relative  ">
        <div class="absolute top-2 -right-0 " >
            <btn-edit-delete 
                :id="User.id"
                :MethodName="'Users'"
                :Name="User.firstName"
                @Deleted="Deleted()"
            >
            </btn-edit-delete>
        </div>
        <div class="grid grid-cols-1 ">

                <div class="relative">
                        <div class="w-48 h-48 bg-indigo-200 mx-auto rounded-full shadow-2xl shadow-indigo-200 absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            <img v-if="User.photo!=null" class="w-48 h-48  object-cover rounded-full border-2 border-indigo-300" :src="'https://pp.ftf.tsu.ru/'+User.photo.link"/>
                            <div class="text-5xl" v-if="User.photo ==null">
                                {{User.firstName[0] +User.lastName[0]}}
                            </div>
                        </div>
                    <!-- <div class="w-48 h-48 bg-indigo-200 mx-auto rounded-full shadow-2xl shadow-indigo-200 absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            <img v-if="User.photo!=null" class="w-48 h-48  object-cover rounded-full border-2 border-indigo-300" :src="'https://pp.ftf.tsu.ru/'+User.photo.link">
                            <img v-if="User.photo==null" class="w-48 h-48 object-cover rounded-full border-2 border-indigo-300" src="@/components/Resourse/img/user.png">
                    </div> -->
                </div>
        </div>

        <div class="mt-32 text-center pb-12 ">
            <h1 class="text-4xl font-medium text-gray-700">{{User.firstName + ' ' + User.lastName}}</h1>
            <h1 class="text-4xl font-medium text-gray-700">{{User.middleName}}</h1>

            <div class="mt-3">
                <strong class="border border-red-500 text-red-500 bg-red-100 uppercase px-5 py-1.5 rounded-full text-[10px] ">
                    Cтудент {{User.role}}
                </strong>

            </div>
            <div class="w-full centered">
                <div class="flex flex-wrap mt-6 justify-center gap-y-1">
                    <button class="overflow-hidden  h-[150px] ui compact button centered mb-2">
                        {{User.skills}}
                    </button>
                </div>
            </div>

        </div>

        <div class=" text-center justify-center">
            <router-link :to="{path:'/Users/Details/'+User.id}" class="_userbtn text-center text-indigo-500 py-2 px-4  font-medium mt-4">
                Открыть профиль
            </router-link>
        </div>
    </div>

</div>

</template>

<script>
    import BtnEditDelete from '@/components/Resourse/blocks/BtnEditDelete.vue'
    export default {
        components:{
            BtnEditDelete
        },
        props:{
            User:Object
        },
        methods: {
            Deleted(){
                this.$emit('Deleted')
            }
        },
    }
</script>

<style scoped>
    ._userbtn{
        margin-left:20%;
        margin-right:20%;
        border-radius:10px;
        transition:all .6s ease;
    }
    ._userbtn:hover {
        opacity:1; 
        background-color: #6366F1;
        color: white;
        box-shadow:5px 5px 5px 5px;
    }
</style>
<template>
    <div>
        
          <div class="text-center text-gray-500 ">
                <div class="w-40 h-40 bg-indigo-200 mx-auto rounded-full shadow-2xl shadow-indigo-200  flex items-center justify-center text-indigo-500">
                    <img v-if="User.photo!=null" class="w-40 h-40  object-cover rounded-full border-2 border-indigo-300" :src="'https://pp.ftf.tsu.ru/'+User.photo.link">
                    <div class="fs-xl" v-if="User.photo ==null">
                        {{User.firstName[0] +User.middleName[0]}}
                    </div>
                </div>

                <h3 class="mb-1 mt-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    <a href="#">{{User.firstName + ' ' + User.lastName}} </a>
                </h3>
                <p v-if="User.role == 0">
                    <slot>
                        
                    </slot>
                </p>
                <p v-if="User.role == 1">Наставник</p>
                <ul class="flex justify-center mt-2 space-x-4">
                    <li v-if="User.phoneNumber!=null && User.phoneNumber!=''" :data-tip="this.User.phoneNumber" class="tooltip" >
                        <a  class="text-[#00acee] hover:text-gray-900 ">
                            <img class="h-6 w-6" src="@/components/Resourse/img/phone-call.png" alt="">
                        </a>
                    </li>
                    <li :data-tip="this.User.telegram" class="tooltip" v-if="User.telegram!=null && User.telegram!=''">
                        <a  class="text-gray-900 hover:text-gray-900 ">
                            <img class="h-6 w-6" src="@/components/Resourse/img/telegram.png" alt="">

                        </a>
                    </li>

                    <li :data-tip="this.User.email " class="tooltip" v-if="User.email != null && User.email!=''">
                        <a  class="text-[#ea4c89] hover:text-gray-900 ">
                            <img class="h-6 w-6" src="@/components/Resourse/img/email.png" alt="">
                        </a> 
                    </li> 
                </ul>
            </div>

    </div>
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
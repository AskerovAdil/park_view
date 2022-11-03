<template>
    <div class='flex items-center justify-center'>  
        <div class="relative rounded-xl border p-5 shadow-md w-11/12 lg:w-9/12 bg-white">
                <div class="absolute top-2 right-2" >
                    <btn-edit-delete 
                        :id="News.id"
                        :MethodName="'News'"
                        :Name="News.name"
                        @Deleted="Deleted()"
                    >
                    </btn-edit-delete>
                </div>
            <div class="flex w-full items-center justify-between border-b pb-3">
                <circle-user
                    :User="News.user"
                >{{News.user.firstName+' '+ News.user.lastName}}</circle-user>
                <!--<div class="flex items-center space-x-8">
                    <div class="text-xs text-neutral-500">{{News.}}/div>
                </div>-->
            </div>
            <gallery v-if="News.files.length >0" :Files="News.files"></gallery>


            <div class="mt-4 mb-6 text-justify">
                <div class="mb-3 text-xl font-bold">{{News.name}}</div>
                
                <p :class="{'max-h-[180px]': !isShow}"
                            class="overflow-hidden mt-6 mb-4 text-sm text-neutral-600  leading-relaxed ">
                            {{News.description}}
                </p>
                <div v-if="News.description?.length > 1490" class="font-normal text-pink-500">
                    <a v-if="!isShow" @click="isShow = !isShow;" class="hover:cursor-pointer ">Показать</a>
                    <a v-if="isShow" @click="isShow = !isShow;" class="hover:cursor-pointer ">Скрыть</a>
                </div>


            </div>

            <div>
                <div class="flex items-center justify-between text-slate-500">
                    <div class="flex space-x-4 md:space-x-8">
                    <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        <span>125</span>
                    </div>
                    <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <span>4</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>


    </div>


</template>

<script>
import CircleUser from '@/components/Resourse/StylesObj/CircleUser.vue'
import Gallery from './Gallery.vue'
import BtnEditDelete from '@/components/Resourse/blocks/BtnEditDelete.vue'


    export default {
        data(){
            return{
                isShow:false
            }
        },
        components:{
            CircleUser,Gallery,BtnEditDelete
        },  
        props:{
            News:Object
        },
        methods:{
            Deleted(){
                this.$emit('Deleted')
            }
        }
    }
</script>

<style  scoped>

</style>
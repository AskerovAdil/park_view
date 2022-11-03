<template>
    <div>
        <a
            class="relative block bg-white rounded-lg border border-gray-100 p-4 px-6 mb-2"
        >
            <div class="absolute right-1 top-1   ">
                <btn-edit-delete 
                    :id="Publication?.id"    
                    :Name="Publication?.name"    
                    :MethodName="'Publications'"
                    @Deleted="Deleted()" 
                />
            </div>


            <span
                class="absolute inset-x-0 bottom-0 h-2 rounded-b-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div class="justify-between sm:flex">
                <div>
                    <h5 v-if="Publication?.name!=''" class="text-xl font-bold text-gray-900">
                        {{Publication?.name}}
                    </h5>

                    <p v-if="Publication?.author != undefined" class="mt-1 text-xs font-medium text-gray-600">{{Publication.author.firstName + ' ' + Publication.author.lastName}}</p>
                </div>

                <div class="ml-3 hidden flex-shrink-0 sm:block">
                    <!--<img v-if="Publication.author.photo !=null"
                        alt="Paul Clapton"
                        :src="'http://localhost:7030/'+Publication.author.photo"
                        class="h-16 w-16 rounded-lg object-cover shadow-sm"
                    />-->
                    <div class="flex  z-10 -space-x-2">
                        <li class="flex">
                            <circle-user
                                :User="Publication?.author"
                            ></circle-user>
                        </li>
                    </div>
                </div>
            </div>
            <p :class="{'max-h-[65px]': !isShow}"
                class="overflow-hidden  mb-1 text-sm  leading-relaxed text-blueGray-700">
                {{Publication?.description}}
            </p>
            <div v-if="Publication?.description?.length > 145" class="mb-2 font-normal text-pink-500">
                <a v-if="!isShow" @click="isShow = !isShow;" class="hover:cursor-pointer ">Показать</a>
                <a v-if="isShow" @click="isShow = !isShow;" class="hover:cursor-pointer ">Скрыть</a>
            </div>

            <!-- <div class="mt-4 sm:pr-8">
                <p :class="{}" class="text-sm text-gray-500">
                    {{Publication?.description}}
                </p>
            </div> -->

            <!-- <dl class="mt-6 flex">
                <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">Опубликовано</dt>
                <dd class="text-xs text-gray-500">{{Publication?.createdDate}}</dd>
                </div>
            </dl> -->
        </a>
    </div>

</template>

<script>
import CircleUser from './CircleUser.vue'
import BtnEditDelete from './BtnEditDelete.vue'
    export default {
        data(){
            return{
                isShow:false
            }
        },
        components:{
            CircleUser,BtnEditDelete
        },
        props:{
            Publication:Object
        },
        methods:{
            Deleted(){
                this.$emit('Deleted')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
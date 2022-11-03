<template >
        <AlertDelete v-if="this.isModalOpen" class="absolute top-20"
            :id="id"
            :Name="this.Name"
            :MethodName='this.MethodName'
            @close="isModalOpen=false"
            @Deleted="Deleted()"
        />
        <div v-if="isAdmin()" class="">
            <div class=" flex items-center -space-x-4 hover:space-x-1">
                <router-link :to="{path: '/'+MethodName+'/Edit/'+id}"
                    class="z-20 block p-2 text-blue-700 transition-all bg-blue-100 border-2 border-white rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
                    type="button"
                >
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </router-link>

                <button @click="OpenModal(Name)" @delete='DeleteProject(id)'
                    class="z-30 block p-2 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                    type="button"
                >
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
        </div>
    </div>
</template>

<script>
import AlertDelete from '@/components/Resourse/blocks/AlertDelete.vue'
    export default {

        components:{
            AlertDelete
        },
        props:{
            id:Number,
            Name:String,
            MethodName:String
        },
        data(){
            return{
                isModalOpen:false
            }
        },
        methods:{
            OpenModal(name){
                console.log(name)
                this.isModalOpen = true
            },
            Deleted(){
                this.$emit('Deleted')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
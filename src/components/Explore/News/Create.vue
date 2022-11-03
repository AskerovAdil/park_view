<template >
    <div  v-if="isAdmin()">
        <section class=" py-20 relative overflow-hidden text-white">
        <div class="z-20 max-w-screen-2xl px-4 py-16 mx-auto sm:px-6 lg:px-8">    
            <div class="container grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="lg:col-span-2 m-auto ">
                        <!-- <div @click="upload" id="empty-cover-art" class="mx-auto hover:scale-105 hover:cursor-pointer transition  rounded-lg sm:w-full md:w-48 md:h-48 py-16 text-center  md:border-solid md:border-2 md:border-gray-600">
                            <input multiple @change="FileInputChange" type="file" accept="image/jpeg, image/gif, image/png" id="upload-file" style="display:none">
                            <svg class="text-black mx-auto feather feather-image" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            <div class="my-auto py-4 text-black">
                                Загрузить фото
                            </div>
                        </div> -->
                        <div class="relative p-8  bg-white rounded-lg shadow-lg mt-10">
                            <div @click="upload" id="empty-cover-art" class="px-8 hover:border-blue-500 hover:cursor-pointer hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
                                <input multiple @change="FileInputChange" type="file" accept="image/jpeg, image/gif, image/png" id="upload-file" style="display:none">
                                <svg class="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                                    <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                                </svg>
                                Загрузить фото
                            </div>
                            <div v-if="this.Files?.length >0" class="overflow-hidden" :class="{'h-[160px]': !isShow}" >
                                <div class=" grid grid-cols-2 ">
                                    <div v-for="(el, index) in this.Files" :key="index">
                                        <div class="relative">
                                            <img @click="DeleteFile(index)" class="absolute right-0 hover:scale-105 z-20 h-6" src="../../Resourse/img/minus-sign.png"/>
                                            <div class="">
                                                <div class="w-64 h-full p-1 md:p-2">
                                                    <img :src="getSrc(el)" alt="gallery" class="h-[150px] w-full block object-cover object-center rounded-lg">
                                                </div>
                                            </div>
                                        </div>
            
                                    </div>
                                </div>  
                            </div>
                            <div v-if="this.Files?.length > 2" class="font-normal text-pink-500 mx-auto text-center mt-4">
                                <a v-if="!isShow" @click="isShow = !isShow;" class="hover:cursor-pointer ">Показать</a>
                                <a v-if="isShow" @click="isShow = !isShow;" class="hover:cursor-pointer ">Скрыть</a>
                            </div>       
                        </div>

               
                    </div>

                    <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">

                        <form @submit.prevent = "OnSubmit" class="space-y-4 text-gray-800">
                            <alert-create :isSuccess="this.isSuccess"></alert-create>   
                            <div class="form">
                                <label class="sr-only" for="name">Название</label>
                                <input v-model="News.Name" class="w-full p-3 text-sm border rounded-lg" placeholder="Название" type="text" id="Name" />
                            </div>
                            <div>
                                <label class="sr-only" for="message">Описание</label>
                                <textarea v-model="News.Description"
                                class="w-full p-3 text-sm border rounded-lg"
                                placeholder="Описание"
                                rows="8"
                                id="message"
                                ></textarea>
                            </div>
                            <div>
                                <Multiselect
                                    v-model="selectedUser"
                                    placeholder="Select your character"
                                    label="firstName"
                                    track-by="firstName"
                                    object="true"
                                    :options="GetAllUser"
                                    :searchable="true"
                                >

                                </multiselect>
                            </div>
                            <div class="mt-4">
                                <button
                                    type="submit"
                                    class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                                    >
                                    <span class="font-medium"> Создать </span>
                                        
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 ml-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>    
    </section>
    </div>
</template>

<script>
import Multiselect from '@vueform/multiselect'
import AlertCreate from '@/components/Resourse/blocks/AlertCreate.vue'
import FormPhotoMixins from '@/components/mixins/FormPhoto.js'

    export default {
        mixins:[FormPhotoMixins],

        components:{
            Multiselect,AlertCreate
        },


        data(){
            return {
                News:{
                    Name:'',
                    Description:'',
                    User:Object
                },
                isSuccess:0,
                isShow:false,
                selectedUser: Object,
                options: [{value:"thiasdasds", name:"This"},{value:"OrThis",firstName:"sdasdasd"}],



            }
        },
        methods:{
            async OnSubmit(){
                delete this.selectedUser.value;
                console.log(this.selectedUser)
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "Bearer "+localStorage.token);

                await this.SendPhoto();

                var raw = JSON.stringify({
                    "name": this.News.Name,
                    "description": this.News.Description,
                    "user":this.selectedUser,
                    "files":this.UploadedFile
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("https://pp.ftf.tsu.ru/api/News", requestOptions)
                    .then(response => this.isSuccess =response.status)
                    .catch(error => console.log('error', error));
                    console.log(this.isSuccess)
            },



            async SendPhoto(){
                var formdata = new FormData();

                Array.from(this.Files).forEach(item=>  
                    {   
                        console.log(item.name); 
                        formdata.append("UploadedFiles", item, 'News/' + item.name);
                    }
                );
                console.log(formdata.getAll('UploadedFiles'))

                var myHeaders = new Headers();
                //myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "Bearer "+localStorage.token);

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: formdata,
                    redirect: 'follow'
                };
                await fetch("https://pp.ftf.tsu.ru/api/Files", requestOptions)
                    .then(response => response.text())
                    .then(result => this.UploadedFile = JSON.parse(result) )
                    .catch(error => console.log('error', error));
                    console.log(this.UploadedFile)  

            },
            

            async GetAllUser(){
                console.log(this.selectedUser)
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                await fetch("https://pp.ftf.tsu.ru/api/Users", requestOptions)
                    .then(response => response.json())
                    .then(result =>this.options = result)
                    .then(x=>console.log(x))
                    .catch(error => console.log('error', error));
                    
                this.options.forEach((e,index) => {
                    e.value = index + ' ' + e.firstName + " " + e.lastName
                });
                console.log(this.options)
                return this.options
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>
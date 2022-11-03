<template  >
    <div v-if="isAdmin()">
        <section class=" py-20 relative overflow-hidden text-black ">
        <div class="z-20 max-w-screen-2xl px-4 py-16 mx-auto sm:px-6 lg:px-8">    
            <div class="container grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="lg:col-span-2 m-auto ">
                        <div class="relative p-8 bg-white rounded-lg shadow-lg mt-10">
                            <div @click="upload" id="empty-cover-art" class="px-8 hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
                                <input multiple @change="FileInputChange" type="file" accept="image/jpeg, image/gif, image/png" id="upload-file" style="display:none">
                                    <svg class="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                                        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                                    </svg>
                                    Загрузить фото
                            </div>
                            <div v-if="this.Files?.length >0 || this.News?.files?.length>0" class="overflow-hidden" :class="{'h-[160px]': !isShow}" >
                                <div class=" grid grid-cols-2 ">

                                    <div  v-for="(el, index) in this.News?.files" v-show="!el.isDeleted" :key="index" class="relative">
                                        <img @click="DeleteFile(index,true)" class="absolute hover:scale-105 z-20 h-6" src="../../Resourse/img/minus-sign.png"/>
                                        <div class="">
                                            <div class="w-64 h-full p-1 md:p-2">
                                                <img :src="'https://pp.ftf.tsu.ru/'+(el.link)" alt="gallery" class="h-[150px] w-full block object-cover object-center rounded-lg">
                                            </div>
                                        </div>
                                    </div>
                                    <div v-for="(el, index) in this.Files" :key="index">
                                        <div class="relative">
                                            <img @click="DeleteFile(index,false)" class="absolute right-0 hover:scale-105 z-20 h-6" src="../../Resourse/img/minus-sign.png"/>
                                            <div class="">
                                                <div class="w-64 h-full p-1 md:p-2">
                                                    <img :src="getSrc(el)" alt="gallery" class="h-[150px] block object-cover object-center rounded-lg">
                                                </div>
                                            </div>
                                        </div>
            
                                    </div>
                                </div>  
                            </div>
                            <div v-if="(this.Files?.length + this.News?.files?.length) > 2" class="font-normal text-pink-500 mx-auto text-center mt-4">
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
                                <input v-model="News.name" class="w-full p-3 text-sm border rounded-lg" placeholder="Название" type="text" id="Name" />
                            </div>
                            <div>
                                <label class="sr-only" for="message">Описание</label>
                                <textarea v-model="News.description"
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

    export default {
        
        //Не хватает multiselect для User

        components:{
            Multiselect,AlertCreate
        },


        data(){
            return {
                News:Object,
                isSuccess:0,
                isShow:false,
                selectedUser: Object,
                options: [{value:"thiasdasds", name:"This"},{value:"OrThis",firstName:"sdasdasd"}],

                Files:[],
                UploadedFile:[],


            }
        },
        async mounted(){

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            await fetch("https://pp.ftf.tsu.ru/api/News/"+ this.$route.params.id, requestOptions)
                .then(response => response.json())
                .then(result =>this.News = result)
                .catch(error => console.log('error', error));

                this.selectedUser = this.News.user
                this.selectedUser.value = this.News.user.firstName + ' ' +this.News.user.lastName
                console.log(this.selectedUser)

                    
        },
        methods:{
            async OnSubmit(){
                delete this.selectedUser.value;
                console.log(this.selectedUser)
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "Bearer "+localStorage.token);

                await this.SendPhoto();
                Array.from(this.News.files).forEach(item=>  
                    {   
                        if(!item.isDeleted){
                            console.log(item.name); 
                            this.UploadedFile.push(item)
                        } 
                    }
                );
                var raw = JSON.stringify({
                    "id":this.$route.params.id,
                    "name": this.News.name,
                    "description": this.News.description,
                    "user":this.selectedUser,
                    "files":this.UploadedFile
                });
                console.log(raw)
                var requestOptions = {
                    method: 'PUT',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("https://pp.ftf.tsu.ru/api/News/" + this.$route.params.id, requestOptions)
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
            
            FileInputChange(){
                this.Files = event.target.files;
                console.log(this.Files)
            },


            DeleteFile(item, isOLD){
                if(isOLD){
                    this.News.files[item].isDeleted = true
                    
                }
                else{
                    //this.Files = event.target.files;
                    console.log("Delt")
                    //this.Files.splice(item,1)
                }
                console.log(this.Files)
            },
            upload(){
                document.getElementById("upload-file").click();
                this.Files = document.getElementById("upload-file").files;
            },


            getSrc(item){
                return URL.createObjectURL(item)
            },





            AlertClose(){
                this.isSuccess =0;
                this.News.Name = '',
                    this.News.Description =''
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
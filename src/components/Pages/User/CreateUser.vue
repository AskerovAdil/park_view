<template>
    <section class=" py-20 relative overflow-hidden text-white bg-gradient-to-r from-blue-400 to-red-400">
        <div class="z-20 max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">    
            <div class="container grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div class="lg:col-span-2 m-auto">
                        <div @click="upload" id="empty-cover-art" class="mx-auto hover:scale-105 hover:cursor-pointer transition  rounded-lg sm:w-full md:w-48 md:h-48 py-16 text-center  md:border-solid md:border-2 md:border-gray-200">
                            <input  @change="FileInputChange" type="file" accept="image/jpeg, image/gif, image/png" id="upload-file" style="display:none">
                            <svg class="mx-auto feather feather-image" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            <div class="my-auto py-4">
                                Загрузить фото
                            </div>
                        </div>
                        <div class="mt-10">
  
                            <div  v-for="(el, index) in this.Files" :key="index">
                                <div class="relative">
                                    <img @click="DeleteFile(index)" class="absolute right-0 hover:scale-105 z-20 h-6" src="../../Resourse/img/minus-sign.png"/>
                                    <div class="">
                                        <div class="w-64 h-full p-1 md:p-2">
                                            <img :src="getSrc(el)" alt="gallery" class="block object-cover object-center rounded-lg">
                                        </div>
                                    </div>
                                </div>
       
                            </div>
                        </div>                        
                    </div>

                    <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                        <form @submit.prevent = "OnSubmit" class="space-y-4 text-gray-800">
                            <div v-if="isSuccess > 400" class="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded-lg relative" role="alert">
                                <strong class="font-bold">Ошибка! </strong>
                                <span class="block sm:inline">Что-то пошло не так!</span>
                                <span @click="AlertClose" class="absolute top-0 bottom-0 right-0 px-4 py-1">
                                    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                </span>
                            </div>
                            <div @click="AlertClose" v-if="isSuccess > 200 && isSuccess < 220" class="bg-green-200 border border-green-400 text-green-700 px-4 py-1 rounded-lg relative" role="alert">
                                <strong class="font-bold">Успешно! </strong>
                                <span class="block sm:inline">Новость добавлена!</span>
                                <span class="absolute top-0 bottom-0 right-0 px-4 py-1">
                                    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                </span>
                            </div>     
                            <div class="form-group grid grid-cols-2">
                                <div>
                                    <label class="sr-only" for="name">Имя</label>
                                    <input v-model="User.FirstName" class="w-full p-3 text-sm border rounded-lg" placeholder="Имя" type="text" id="name" />
                                </div>
                                <div>
                                    <label class="sr-only" for="name">Фамилия</label>
                                    <input v-model="User.LastName" class="w-full p-3 text-sm border rounded-lg" placeholder="Фамилия" type="text" id="name" />
                                </div>
                            </div>
                            <div>
                                <label class="sr-only" for="name">Отчество</label>
                                <input v-model="User.MiddleName" class="w-full p-3 text-sm border rounded-lg" placeholder="Отчество" type="text" id="name" />
                            </div>
                            <div>
                                <label class="sr-only" for="name">Курс</label>
                                <input v-model="User.Course" class="w-full p-3 text-sm border rounded-lg" placeholder="Курс" type="Number" id="name" />
                            </div>
      
                            <div>
                                <label class="sr-only" for="name">Email</label>
                                <input v-model="User.Email" class="w-full p-3 text-sm border rounded-lg" placeholder="example@example.ru" type="text" id="name" />
                            </div>
                            <div>
                                <label class="sr-only" for="name">PhoneNumber</label>
                                <input v-model="User.PhoneNumber" class="w-full p-3 text-sm border rounded-lg" placeholder="+79991234567" type="text" id="name" />
                            </div>
                            
                            <div>
                                <label class="sr-only" for="message">Навыки</label>
                                <textarea v-model="User.Skills"
                                class="w-full p-3 text-sm border rounded-lg"
                                placeholder="О себе"
                                rows="8"
                                id="message"
                                ></textarea>
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
</template>

<script>
    export default {
        data(){
            return{
                User:{
                    FirstName:'',
                    LastName:'',
                    MiddleName:'',
                    Course:0,
                    Email:'',
                    PhoneNumber:'',
                    Telegram:'',
                    Skills:''
                },
                isSuccess:0,

                Files:[],
                UploadedFile:[],
            }
        },

        methods: {
            async OnSubmit(){
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                await this.SendPhoto();
                console.log(this.UploadedFile)

                var raw = JSON.stringify({
                    "firstName": this.User.FirstName,
                    "lastName": this.User.LastName,
                    "middleName": this.User.MiddleName,
                    "course": this.User.Course,
                    "email": this.User.Email,
                    "phoneNumber": this.User.PhoneNumber,
                    "telegram": this.User.Telegram,
                    "skills": this.User.Skills,
                    "photo":this.UploadedFile[0]
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("https://pp.ftf.tsu.ru/api/Users", requestOptions)
                    .then(response => this.isSuccess =response.status)
                    .then(result => this.isSuccess == result.status)
                    .catch(error => console.log('error', error));
            },

            async SendPhoto(){
                var formdata = new FormData();
                Array.from(this.Files).forEach(item=>  
                    {   
                        console.log(item.name); 
                        formdata.append("UploadedFiles", item, 'Project/' + item.name);
                    }
                );
                console.log(formdata.getAll('UploadedFiles'))

                var myHeaders = new Headers();
                //myHeaders.append("Content-Type", "application/json");

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


            DeleteFile(){
                this.Files = []
                console.log(this.Files)
            },
            upload(){
                document.getElementById("upload-file").click();
                this.Files = document.getElementById("upload-file").files;
            },

            getSrc(item){
                return URL.createObjectURL(item)
            },


        },
    }
</script>
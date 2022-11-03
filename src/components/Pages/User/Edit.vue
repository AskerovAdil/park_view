<template  >
    <section v-if="isAdmin()" class=" py-20 relative overflow-hidden text-black">
        <div class="z-20 max-w-screen-2xl px-4 py-16 mx-auto sm:px-6 lg:px-8">    
            <div class="container grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="lg:col-span-2 m-auto">
                        <div @click="upload" id="empty-cover-art" class="mx-auto hover:scale-105 hover:cursor-pointer transition  rounded-lg sm:w-full md:w-48 md:h-48 py-16 text-center  md:border-solid md:border-2 md:border-gray-600">
                            <input  @change="FileInputChange" type="file" accept="image/jpeg, image/gif, image/png" id="upload-file" style="display:none">
                            <svg class="text-black mx-auto feather feather-image" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            <div class="my-auto py-4 text-black">
                                Загрузить фото
                            </div>
                        </div>
                        <div v-if="this.Files?.length >0 || this.User.photo" class="relative p-8 bg-white rounded-lg shadow-lg mt-10">
                            <div v-if="User.photo != null" class="relative">
                                <img @click="DeleteFile()" class="absolute hover:scale-105 z-20 h-6" src="../../Resourse/img/minus-sign.png"/>
                                <div class="">
                                    <div class="w-64 h-full p-1 md:p-2">
                                        <img :src="'https://pp.ftf.tsu.ru/'+(this.User.photo?.link)" alt="gallery" class="block object-cover object-center rounded-lg">
                                    </div>
                                </div>
                            </div>
                            <div v-for="(el, index) in this.Files" :key="index">
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
                            <alert-create :isSuccess="isSuccess"/>
                            <div class="form-group grid grid-cols-2">
                                <div>
                                    <label class="sr-only" for="name">Имя</label>
                                    <input v-model="User.firstName" class="w-full p-3 text-sm border rounded-lg" placeholder="Имя" type="text" id="name" />
                                </div>
                                <div>
                                    <label class="sr-only" for="name">Фамилия</label>
                                    <input v-model="User.lastName" class="w-full p-3 text-sm border rounded-lg" placeholder="Фамилия" type="text" id="name" />
                                </div>
                            </div>
                            <div>
                                <label class="sr-only" for="name">Отчество</label>
                                <input v-model="User.middleName" class="w-full p-3 text-sm border rounded-lg" placeholder="Отчество" type="text" id="name" />
                            </div>
                            <div>
                                <label class="sr-only" for="name">Курс</label>
                                <input v-model="User.course" class="w-full p-3 text-sm border rounded-lg" placeholder="Курс" type="Number" id="name" />
                            </div>

                            <div>
                                <label class="sr-only" for="name">Телеграм</label>
                                <input v-model="User.telegram" class="w-full p-3 text-sm border rounded-lg" placeholder="Телеграм" type="Telegram" id="name" />
                            </div>
      
                            <div>
                                <label class="sr-only" for="name">Email</label>
                                <input v-model="User.email" class="w-full p-3 text-sm border rounded-lg" placeholder="example@example.ru" type="text" id="name" />
                            </div>
                            <div>
                                <label class="sr-only" for="name">PhoneNumber</label>
                                <input v-model="User.phoneNumber" class="w-full p-3 text-sm border rounded-lg" placeholder="+79991234567" type="text" id="name" />
                            </div>
                            
                            <div>
                                <label class="sr-only" for="message">Навыки</label>
                                <textarea v-model="User.skills"
                                class="w-full p-3 text-sm border rounded-lg"
                                placeholder="О себе"
                                rows="8"
                                id="message"
                                ></textarea>
                            </div>
                            <div v-if="isAdmin()">

                                <Multiselect
                                    v-model="selectRole"
                                    placeholder="Назначить роль"
                                    label="name"
                                    track-by="name"
                                    object="true"
                                    :close-on-select="true"
                                    :options="GetAllRoles"
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
</template>

<script>
import Multiselect from '@vueform/multiselect'
import AlertCreate from '@/components/Resourse/blocks/AlertCreate.vue'
    export default {
        components:{
            AlertCreate,Multiselect
        },
        data(){
            return{
                User:Object,
                isSuccess:0,

                Files:[],
                UploadedFile:[],

                selectRole: [],
                options: []
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

            await fetch("https://pp.ftf.tsu.ru/api/Users/"+ this.$route.params.id, requestOptions)
                .then(response => response.json())
                .then(result =>this.User = result)
                .catch(error => console.log('error', error));
                
                this.selectRole = this.User.role
                this.selectRole.value = this.User.id
                console.log(this.selectedUser)
        },
        methods: {
            async GetAllRoles(){
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "Bearer "+localStorage.token);

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                await fetch("https://pp.ftf.tsu.ru/api/Roles", requestOptions)
                    .then(response => response.json())
                    .then(result =>this.options = result)
                    .then(x=>console.log(x))
                    .catch(error => console.log('error', error));
                    
                this.options.forEach((e) => {
                    e.value = e.id
                });
                console.log(this.options)
                return this.options
            },


            async OnSubmit(){
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "Bearer "+localStorage.token);

                await this.SendPhoto();
                delete this.selectRole.value
                console.log(this.UploadedFile)
                console.log(this.selectRole[0])
                
                var raw = JSON.stringify({
                    "id":this.$route.params.id,
                    "firstName": this.User.firstName,
                    "lastName": this.User.lastName,
                    "middleName": this.User.middleName,
                    "course": this.User.course,
                    "email": this.User.email,
                    "phoneNumber": this.User.phoneNumber,
                    "telegram": this.User.telegram,
                    "skills": this.User.skills,
                    "photo":this.UploadedFile[0],
                    "role":this.selectRole
                });

                var requestOptions = {
                    method: 'PUT',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("https://pp.ftf.tsu.ru/api/Users/"+this.$route.params.id, requestOptions)
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
            },
            upload(){
                document.getElementById("upload-file").click();
                this.Files = [];
                this.User.photo = null;
            },

            getSrc(item){
                return URL.createObjectURL(item)
            },



            AlertClose(){
                this.isSuccess =0;
                this.User = Object()
            }
        },
    }
</script>
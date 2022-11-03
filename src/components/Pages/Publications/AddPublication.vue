<template>
    <section v-if="isAdmin()" class=" py-20 relative overflow-hidden text-black">
        <div class="z-20 max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">    
            <div class="container ">

                    <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                        <form @submit.prevent = "OnSubmit" class="space-y-4 text-gray-800">
                            <alert-create
                                :isSuccess="this.isSuccess"
                            />                               
                            <div class="form">
                                <label class="sr-only" for="name">Название</label>
                                <input v-model="Publication.Name" class="w-full p-3 text-sm border rounded-lg" placeholder="Название" type="text" id="Name" />
                            </div>
                            <div>
                                <label class="sr-only" for="message">Описание</label>
                                <textarea v-model="Publication.Description"
                                class="w-full p-3 text-sm border rounded-lg"
                                placeholder="Описание"
                                rows="8"
                                id="message"
                                ></textarea>
                            </div>
                            <div>
                                <Multiselect
                                    v-model="selectedProject"
                                    placeholder="Выбрать проект"
                                    label="name"
                                    track-by="name"
                                    object="true"
                                    :options="GetAllProject"
                                    :searchable="true"
                                >

                                </Multiselect>
                                <Multiselect
                                    v-model="selectedUser"
                                    placeholder="Выбрать пользователя"
                                    label="value"
                                    track-by="value"
                                    object="true"
                                    :options="GetAllUser"
                                    :searchable="true"
                                >

                                </Multiselect>
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
            Multiselect,AlertCreate
        },
        data(){
            return{
                Publication:{
                    Name:'',
                    Description:'',
                },
                selectedProject:[],
                optionsProject: [],
                selectedUser:[],
                optionsUser: [],
                isSuccess:0

            }
        },
        methods:{
            async OnSubmit(){
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "Bearer "+localStorage.token);


                var raw = JSON.stringify({
                    "name": this.Publication.Name,
                    "description": this.Publication.Description,
                    "Project":this.selectedProject,
                    "Author":this.selectedUser
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("https://pp.ftf.tsu.ru/api/Publications", requestOptions)
                    .then(response => this.isSuccess =response.status)
                    .catch(error => console.log('error', error));
            },
            async GetAllProject(){
                console.log(this.selectedUser)
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                await fetch("https://pp.ftf.tsu.ru/api/Projects", requestOptions)
                    .then(response => response.json())
                    .then(result =>this.optionsProject = result)
                    .then(x=>console.log(x))
                    .catch(error => console.log('error', error));
                    
                this.optionsProject.forEach((e,index) => {
                    e.value = index ;
                });
                console.log(this.optionsProject)
                return this.optionsProject
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
                    .then(result =>this.optionsUser = result)
                    .then(x=>console.log(x))
                    .catch(error => console.log('error', error));
                    
                this.optionsUser.forEach((e,index) => {
                    e.value = index + e.firstName + ' ' + e.lastName;
                });
                console.log(this.optionsUser)
                return this.optionsUser
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
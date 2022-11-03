<template>
                    <div class="lg:col-span-2 m-auto">
                        <div @click="upload" id="empty-cover-art" class="mx-auto hover:scale-105 hover:cursor-pointer transition  rounded-lg sm:w-full md:w-48 md:h-48 py-16 text-center  md:border-solid md:border-2 md:border-gray-900">
                            <input multiple @change="FileInputChange" type="file" accept="image/jpeg, image/gif, image/png" id="upload-file" style="display:none">
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
</template>

<script>
    export default {
        data(){
        return{
            Files:[],
            UploadedFile:[],

        }
      },
      methods: {
        async SendPhoto(){
            console.log("ASDSADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAAAAAAAAAa")
            var formdata = new FormData();
            // for(let i =0; i<this.Files.length;i++){
            //     console.log(this.Files[i].name); 
            //     formdata.append("UploadedFiles", this.Files[i], 'Project/' + this.Files[i].name);
            // }
            console.log(this.Files)
            Array.from(this.Files).forEach(item=>  
                {   
                    console.log(item.name); 
                    formdata.append("UploadedFiles", item, 'Project/' + item.name);
                }
            );
            console.log(formdata.getAll('UploadedFiles'))

            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer "+localStorage.token);
                console.log(localStorage.token)
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

        AlertClose(){
            this.isSuccess =0;
            this.Project = Object()
        },
      },
    }
</script>

<style lang="scss" scoped>

</style>
<template>
  <transition class="z-40 " name="modal-fade">
    <div class="modal-backdrop ">
        <div class="modal-body mt-20">
           <div class="flex flex-col p-8 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                <button
                    type="button"
                    class="btn-close"
                    @click="close"
                    aria-label="Close modal"
                    >
                    x
                </button>   
                <div class="flex items-center justify-between">

                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-16 h-16 rounded-2xl p-3 border border-gray-800 text-blue-400 bg-gray-900" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <div class="flex flex-col ml-3">
                            <div class="font-medium leading-none text-gray-100">Вы действительно хотите удалить?</div>
                            <p class="text-sm text-gray-500 leading-none mt-1">{{Name}} https://pp.ftf.tsu.ru/api/ {{this.MethodName}}
                            </p>
                        </div>
                    </div>
                    <button @click="DeleteItem"  class="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Delete</button>
                </div>
            </div>
        </div>

    </div>
  </transition>
</template>

<script>
    export default {
        props:{
            Name:String,
            MethodName:String,
            id:Number,
        },
        methods: {
            DeleteItem(){
                var myHeaders = new Headers();

                myHeaders.append("Authorization", "Bearer "+localStorage.token);

                var requestOptions = {
                    method: 'DELETE',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                fetch("https://pp.ftf.tsu.ru/api/"+this.MethodName +'/'+this.id, requestOptions)
                    .then(response => response.status)
                    .then(response=>{
                        if(response > 200 && response < 220){
                            this.$emit('close');
                            this.$emit('Deleted')
                        }

                    })
                    .catch(error => console.log('error', error));

                                
            },
            close() {
                this.$emit('close');
            },
        },
    }
</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom:0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-body {
    position: fixed;
    top: 10px;

  }
  .btn-close {
    position:absolute;
    z-index: 100;
    top:-15px;
    right:0px;
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    color: white;
    background: transparent;
  }
</style>
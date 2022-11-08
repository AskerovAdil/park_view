<template>
    <div class="pt-16 lg:pt-36 ">
        <form @submit.prevent="OnSubmit()" class="container mx-auto lg:w-6/12 mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
            <p class="text-lg font-medium">Авторизация</p>

            <div>
                <label for="email" class="text-sm font-medium">Email</label>

                <div class="relative mt-1">
                <input v-model="Login"
                    type="string"
                    id="email"
                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter email"
                />

                <span class="absolute inset-y-0 right-4 inline-flex items-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                    </svg>
                </span>
                </div>
            </div>

            <div>
                <label for="password" class="text-sm font-medium">Пароль</label>

                <div class="relative mt-1">
                <input v-model="Password"
                    type="password"
                    id="password"
                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter password"
                />

                <span class="absolute inset-y-0 right-4 inline-flex items-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                    </svg>
                </span>
                </div>
            </div>
            <div class="text-red">
                {{Message}}
            </div>
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
            >
              <span class="font-medium"> Войти </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>


            <p class="text-start text-sm text-gray-500">
                Нет аккаунта, зарегистрироваться?
                <router-link to="/Register" class="underline" href="">Регистрация</router-link>
            </p>
        </form>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                Login:"String",
                Password:"String",
                User:Object,
                Message:""
            }
        },
        methods:{
            OnSubmit(){
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    "email": this.Login,
                    "password": this.Password,
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("https://pp.ftf.tsu.ru/api/Auth", requestOptions)
                    .then((response) =>  {
                        console.log(response.status)
                        if(response.status >= 200 && response.status <220)
                        {
                            response.json().then(
                                res => {
                                    localStorage.token = res.token
                                    localStorage.user = JSON.stringify(res) 
                                    window.location.href = 'https://pp.ftf.tsu.ru/';
                                    //this.$router.push("/Users/Index")
                                }
                            )
                        }
                        else{
                            this.Message ="Email или пароль введены неверно" 
                        }
                        
                    })
                    .catch(error => console.log('error', error));
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
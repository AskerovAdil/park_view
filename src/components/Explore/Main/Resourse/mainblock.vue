<template>

    <section class="text-gray-600 body-font bg-white container mx-auto mt-10 rounded-xl shadow-lg">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">{{this.Name}}</h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac
                    Heirloom</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{{this.Description}}</p>
            </div>
            <div class="flex flex-wrap">
                <slot>

                </slot>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props:{
            Name:{
                type:String,
                default:"ROOF PARTY POLAROID",
            },
            Description:{
                default:"Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.",
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>
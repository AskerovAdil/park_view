<template >
    <div v-if="isAdmin()" class=" text-center md:mt-0 md:justify-center">
        <router-link v-bind:to="{path:link}"
            class="mt-2 mb-10 inline-block rounded border border-gray border-2 px-12 py-3 text-sm font-medium text-gray-600 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
            href="/download"
        >
            <slot></slot>
        </router-link>
    </div>
</template>

<script>
    export default {
        props:{
            link:String
        }    
    }
</script>

<style lang="scss" scoped>

</style>